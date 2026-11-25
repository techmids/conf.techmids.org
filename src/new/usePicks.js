import { useEffect, useState } from 'react'
import { EVENT } from '../../event'

// Picks are shared with the current site (same browser storage), so the rebuilt site uses
// the same code. Its schedule-change warning is not shown here yet: see src/picks/usePicks.js.
export { usePicks } from '../picks/usePicks'

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
