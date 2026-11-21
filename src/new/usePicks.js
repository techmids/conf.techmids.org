import { useEffect, useState } from 'react'
import { EVENT } from '../../event'

// Same storage key and share-link format as the current site, so picks carry over.
// Picks are kept in this browser only (the site has no server).
const PICKS_KEY = `techmids:picks:${EVENT.isoDate}`

const readSaved = () => {
  try {
    const saved = JSON.parse(window.localStorage.getItem(PICKS_KEY))
    return Array.isArray(saved) ? saved.filter((id) => typeof id === 'string') : []
  } catch {
    return []
  }
}

// A share link carries the picks after the #, so they never reach a server
const readShared = () => {
  const match = window.location.hash.match(/^#picks=(.*)$/)
  if (!match) return null
  try {
    return match[1].split(',').filter(Boolean).map(decodeURIComponent)
  } catch {
    return null
  }
}

export function usePicks({ onShared } = {}) {
  const [picks, setPicks] = useState([])
  const [shared, setShared] = useState(null) // someone else's picks, from a share link
  const [ready, setReady] = useState(false)

  // Read after the page loads: the exported HTML is the same for everyone
  useEffect(() => {
    setPicks(readSaved())
    setReady(true)
    const showShared = () => {
      const fromLink = readShared()
      if (fromLink) {
        setShared(fromLink)
        onShared?.()
      }
    }
    showShared()
    window.addEventListener('hashchange', showShared)
    return () => window.removeEventListener('hashchange', showShared)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!ready) return
    try {
      window.localStorage.setItem(PICKS_KEY, JSON.stringify(picks))
    } catch {
      // Private browsing or storage full: picks last until the page closes
    }
  }, [picks, ready])

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
    picks: shared ?? picks,
    isShared: Boolean(shared),
    toggle: shared ? undefined : toggle,
    clear: () => setPicks([]),
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

// Minutes since midnight in Birmingham on the day of the event, or null on any other day.
// Refreshes every 20 seconds so "Now" moves on by itself.
export function useEventClock() {
  const [now, setNow] = useState(null)
  useEffect(() => {
    let timer
    const tick = () => {
      const parts = new Intl.DateTimeFormat('en-CA', {
        timeZone: 'Europe/London',
        year: 'numeric', month: '2-digit', day: '2-digit',
        hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
      }).formatToParts(new Date())
      const get = (type) => parts.find((p) => p.type === type)?.value
      const today = `${get('year')}-${get('month')}-${get('day')}`
      setNow(today === EVENT.isoDate ? Number(get('hour')) * 60 + Number(get('minute')) : null)
      timer = setTimeout(tick, 20000)
    }
    tick()
    return () => clearTimeout(timer)
  }, [])
  return now
}
