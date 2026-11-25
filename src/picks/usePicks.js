import { useEffect, useMemo, useState } from 'react'
import { EVENT } from '../../event'
import { Schedule } from '../../schedule'
import { Sessions } from '../../speakers'
import { BASELINE } from './baseline'

// The attendee's picked talks ("My day"): saving them in the browser, share links, and
// noticing when the schedule has changed under a pick. Used by the schedule on the current
// site. The rebuilt site in src/new reads and saves picks through it too, so the two never
// overwrite each other's saved picks, but does not show the schedule-change warning yet.
// Picks are kept in this browser only (the site has no server).
const PICKS_KEY = `techmids:picks:${EVENT.isoDate}`
// Schedule changes that hit this browser's picks, kept until the attendee dismisses them
const CHANGES_KEY = `techmids:pick-changes:${EVENT.isoDate}`

const ROOMS = ['screen3', 'screen2', 'screen1']
// schedule.js writes times as '09:45 AM' or '13:00PM'; the hours are already 24-hour
const clock = (time = '') => time.replace(/[^0-9:]/g, '')

// Every slot on the three screens as it stands now, by pick id.
// A talk is known by its speaker id, so a pick survives a talk moving room.
const currentTalks = () => {
  const talks = new Map()
  ROOMS.forEach((room) =>
    Schedule[room]?.day1?.timeSlots.forEach((slot) => {
      const speakerId = slot.session?.[0]
      const speaker = speakerId ? Sessions[speakerId] : null
      talks.set(speakerId || `${room}@${slot.start}`, {
        who: speaker?.name || slot.name,
        title: slot.description || speaker?.talkTitle || 'To be announced',
        room: Schedule[room].day1.room,
        start: clock(slot.start),
        end: clock(slot.end),
      })
    })
  )
  return talks
}

// Saved picks and share links are untrusted input: anyone can craft a link, and anything on
// this origin can write to storage. Everything read from them goes through these.
const MAX_PICKS = 64 // far more than the day has slots
const TIME = /^([01]\d|2[0-3]):[0-5]\d$/
const text = (value) => (typeof value === 'string' && value.length <= 200 ? value : undefined)
const time = (value) => (TIME.test(text(value) ?? '') ? value : undefined)
// A plain lookup would also find inherited keys: an id of "constructor" must not match
const own = (object, key) => (Object.prototype.hasOwnProperty.call(object, key) ? object[key] : undefined)

// A pick is saved with its talk as it was when picked: { id, who, title, room, start, end },
// which is everything needed to say later what has changed.
// Picks saved before that was recorded are a bare id, and are compared against BASELINE.
const toEntry = (saved) => {
  const id = text(typeof saved === 'string' ? saved : saved?.id)
  if (!id) return null
  const start = time(saved?.start)
  return start ? { id, start, who: text(saved.who) } : { id }
}

const readSaved = () => {
  try {
    const saved = JSON.parse(window.localStorage.getItem(PICKS_KEY))
    return Array.isArray(saved) ? saved.slice(0, MAX_PICKS).map(toEntry).filter(Boolean) : []
  } catch {
    return []
  }
}

const readChanges = () => {
  try {
    const saved = JSON.parse(window.localStorage.getItem(CHANGES_KEY))
    if (!Array.isArray(saved)) return []
    return saved
      .slice(0, MAX_PICKS)
      .map((c) => ({
        id: text(c?.id),
        kind: c?.kind === 'moved' ? 'moved' : 'gone',
        who: text(c?.who),
        from: time(c?.from) ?? null,
        to: time(c?.to) ?? null,
        room: text(c?.room),
      }))
      .filter((c) => c.id && c.who && (c.kind === 'gone' || (c.from && c.to && c.room)))
  } catch {
    return []
  }
}

// A share link carries the picks after the #, so they never reach a server.
// #p= is base64 of `JessRose1630,FaithSodipe0945`: each id with its talk's start time when
// the link was made. Older links are #picks=JessRose,FaithSodipe with no times.
// Base64 only keeps the link tidy: it hides nothing and proves nothing about who made it.
const readShared = () => {
  const { hash } = window.location
  try {
    const packed = hash.match(/^#p=(.+)$/)
    const legacy = hash.match(/^#picks=(.*)$/)
    if (!packed && !legacy) return null
    const parts = packed
      ? window.atob(packed[1].replace(/-/g, '+').replace(/_/g, '/')).split(',')
      : legacy[1].split(',').map(decodeURIComponent)
    return parts
      .filter(Boolean)
      .slice(0, MAX_PICKS)
      .map((part) => {
        const timed = packed && part.match(/^(.+)(\d\d)(\d\d)$/)
        return toEntry(timed ? { id: timed[1], start: `${timed[2]}:${timed[3]}` } : part)
      })
      .filter(Boolean)
  } catch {
    return null
  }
}

// Checks picks against the schedule as it stands now. A pick whose talk has gone, or has
// moved to another start time, is dropped and reported so the attendee can be told.
const reconcile = (entries, talks) => {
  const picks = []
  const changes = []
  entries.forEach((entry) => {
    const { id } = entry
    if (picks.includes(id) || changes.some((c) => c.id === id)) return
    const then = entry.start ? entry : own(BASELINE, id)
    const now = talks.get(id)
    if (!now) {
      // Nothing known about it (a mistyped link, an old placeholder slot): drop it quietly
      const who = entry.who || own(BASELINE, id)?.who || own(Sessions, id)?.name
      if (who) changes.push({ id, kind: 'gone', who, from: then?.start ?? null })
    } else if (then && then.start !== now.start) {
      changes.push({ id, kind: 'moved', who: now.who, from: then.start, to: now.start, room: now.room })
    } else {
      picks.push(id)
    }
  })
  return { picks, changes }
}

// "Jess Rose" + this = one line of the warning
export const changeText = (change) =>
  change.kind === 'moved'
    ? `’s talk has moved from ${change.from} to ${change.to} (${change.room}).`
    : change.from
    ? ` was on at ${change.from} but is no longer on the line-up.`
    : ' is no longer on the line-up.'

export function usePicks({ onShared } = {}) {
  const talks = useMemo(currentTalks, [])
  const [picks, setPicks] = useState([])
  const [changes, setChanges] = useState([]) // what the schedule has done to my picks
  const [shared, setShared] = useState(null) // someone else's picks, from a share link
  const [ready, setReady] = useState(false)

  // Read after the page loads: the exported HTML is the same for everyone
  useEffect(() => {
    const mine = reconcile(readSaved(), talks)
    const fresh = mine.changes.map((c) => c.id)
    setPicks(mine.picks)
    setChanges([...readChanges().filter((c) => !fresh.includes(c.id)), ...mine.changes])
    setReady(true)
    const showShared = () => {
      const fromLink = readShared()
      if (fromLink) {
        setShared(reconcile(fromLink, talks))
        onShared?.()
      }
    }
    showShared()
    window.addEventListener('hashchange', showShared)
    return () => window.removeEventListener('hashchange', showShared)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Saving straight after reading is what cleans changed picks out of storage
  useEffect(() => {
    if (!ready) return
    try {
      const entries = picks.filter((id) => talks.has(id)).map((id) => ({ id, ...talks.get(id) }))
      window.localStorage.setItem(PICKS_KEY, JSON.stringify(entries))
      if (changes.length) window.localStorage.setItem(CHANGES_KEY, JSON.stringify(changes))
      else window.localStorage.removeItem(CHANGES_KEY)
    } catch {
      // Private browsing or storage full: picks last until the page closes
    }
  }, [picks, changes, ready, talks])

  // One pick per slot: picking a talk replaces the slot's pick, picking it again clears it
  const toggle = (row, id) => {
    const slotIds = row.options.map((o) => o.id)
    setPicks((current) => {
      const rest = current.filter((p) => !slotIds.includes(p))
      return current.includes(id) ? rest : [...rest, id]
    })
  }

  const clearHash = () =>
    window.history.replaceState(null, '', window.location.pathname + window.location.search)

  return {
    ready,
    picks: shared ? shared.picks : picks,
    // Talks dropped from the picks being shown because the schedule changed under them
    changes: shared ? shared.changes : changes,
    dismissChanges: () => setChanges([]),
    isShared: Boolean(shared),
    toggle: shared ? undefined : toggle,
    clear: () => setPicks([]),
    shareUrl: () => {
      const list = picks
        .filter((id) => talks.has(id))
        .map((id) => `${id}${talks.get(id).start.replace(':', '')}`)
        .join(',')
      const packed = window.btoa(list).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
      return `${window.location.origin}${window.location.pathname}#p=${packed}`
    },
    backToMine: () => {
      setShared(null)
      clearHash()
    },
    saveShared: (ids) => {
      setPicks(ids)
      setShared(null)
      clearHash()
    },
  }
}
