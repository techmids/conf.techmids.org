// Read-only helpers over the existing content files (event.js, schedule.js, speakers.js).
// The rebuilt pages never copy content: they read the same data as the current site.

import { Schedule } from '../../schedule'
import { Sessions } from '../../speakers'
import { EVENT } from '../../event'

// Path the site is served under. '' is the root; a value such as '/new' turns it back into a noindex preview.
export const BASE = ''
export const href = (path = '') => `${BASE}${path}` || '/'

// Screen 3 first, matching the order the current site uses.
export const ROOMS = [
  { id: 'screen3', label: 'Screen 3', short: 'S3' },
  { id: 'screen2', label: 'Screen 2', short: 'S2' },
  { id: 'screen1', label: 'Screen 1', short: 'S1' },
]

// schedule.js writes times as '09:45 AM' or '13:00PM'; the hours are already 24-hour.
export const clock = (time = '') => time.replace(/[^0-9:]/g, '')
export const minutes = (time) => {
  const [h, m] = clock(time).split(':').map(Number)
  return h * 60 + (m || 0)
}

const sameSlot = (a, b) => {
  if (!a || !b) return false
  if (a.session && b.session) return a.session[0] === b.session[0]
  if (!a.session && !b.session) return a.name === b.name
  return false
}

// A talk is known by its speaker id, so a pick survives a talk moving room or time.
// (Same ids as the current site, so picks made there carry over.)
const talkId = (slot, room) => (slot.session ? slot.session[0] : `${room}@${slot.start}`)

// One row per time slot across the three screens. A row where every screen has the
// same thing (registration, lunch) is `shared`; otherwise it lists its talks as `options`.
export function buildRows() {
  const map = new Map()
  ROOMS.forEach(({ id }) => {
    Schedule[id]?.day1?.timeSlots.forEach((slot) => {
      const key = `${clock(slot.start)}-${clock(slot.end)}`
      if (!map.has(key)) map.set(key, { key, start: clock(slot.start), end: clock(slot.end), slots: {} })
      map.get(key).slots[id] = slot
    })
  })
  return Array.from(map.values())
    .sort((a, b) => minutes(a.start) - minutes(b.start))
    .map((row) => {
      const [first, ...rest] = ROOMS.map(({ id }) => row.slots[id])
      const shared = Boolean(first) && rest.every((slot) => sameSlot(first, slot))
      const options = shared
        ? []
        : ROOMS.filter(({ id }) => row.slots[id]).map((room) => {
            const slot = row.slots[room.id]
            const speakerId = slot.session?.[0]
            const speaker = speakerId ? Sessions[speakerId] : null
            return {
              id: talkId(slot, room.id),
              room,
              speakerId,
              speaker,
              title: slot.description || speaker?.talkTitle || 'To be announced',
              who: speaker?.name || slot.name,
            }
          })
      return {
        ...row,
        shared,
        options,
        title: shared ? first.name : null,
        description: shared ? first.description : null,
        duration: minutes(row.end) - minutes(row.start),
      }
    })
}

// The overall shape of the day (registration, sessions, lunch...) from schedule.js
export const dayOutline = () =>
  Schedule.conferenceSchedule.day1.timeSlots.map((slot) => ({
    start: clock(slot.start),
    end: clock(slot.end),
    name: slot.name,
    description: slot.description,
  }))

// When and where a speaker is on, for their own page
export function findTalk(speakerId) {
  for (const row of buildRows()) {
    const option = row.options.find((o) => o.speakerId === speakerId)
    if (option) return { row, option }
  }
  return null
}

export const speakerList = () => Object.entries(Sessions).map(([id, speaker]) => ({ id, ...speaker }))

// True while the line up is still open: the event says so and a talk slot has no speaker yet.
// Once every slot on the schedule is filled, the "more speakers" tile and wording go away.
export const moreSpeakersToCome = () =>
  Boolean(EVENT.speakersTBC) && buildRows().some((row) => row.options.some((option) => !option.speaker))

// 'Fri 27 Nov 2026' style label for mono captions
export const shortDate = () =>
  new Date(`${EVENT.isoDate}T12:00:00Z`).toLocaleDateString('en-GB', {
    weekday: 'short', day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC',
  })

export const longDate = () =>
  new Date(`${EVENT.isoDate}T12:00:00Z`).toLocaleDateString('en-GB', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC',
  })
