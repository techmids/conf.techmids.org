import Link from 'next/link'
import { useMemo, useState } from 'react'
import { EVENT } from '../../event'
import { ROOMS, buildRows, href, minutes } from './data'
import { Badge, Button } from './ui'
import { useEventClock, usePicks } from './usePicks'

const isNow = (row, now) => now !== null && now >= minutes(row.start) && now < minutes(row.end)

function PickButton({ picked, onClick, label }) {
  return (
    <button
      type="button"
      className="tm-pick"
      aria-pressed={picked}
      aria-label={`${picked ? 'Remove' : 'Add'} ${label} ${picked ? 'from' : 'to'} my day`}
      onClick={onClick}
    >
      <span aria-hidden="true">{picked ? '✓' : '+'}</span>
      {picked ? 'Picked' : 'Pick'}
    </button>
  )
}

// One talk. The whole card reads as: which screen, what, who, and a pick button.
function TalkCard({ option, row, picks, onToggle, showRoom = true }) {
  const picked = picks.includes(option.id)
  const passedOver = !picked && row.options.some((o) => picks.includes(o.id))
  const { speaker, speakerId, room } = option
  const title = speakerId ? (
    <Link href={href(`/speakers/${speakerId}`)}>{option.title}</Link>
  ) : (
    option.title
  )

  return (
    <article
      className={`tm-talk tm-talk-${room.id}${picked ? ' is-picked' : ''}${passedOver ? ' is-passed' : ''}`}
    >
      <div className="tm-talk-top">
        {showRoom && <span className="tm-talk-room">{room.label}</span>}
        {speaker?.sessionType && speaker.sessionType !== 'Talk' && <Badge solid>{speaker.sessionType}</Badge>}
      </div>
      <h3 className="tm-talk-title">{title}</h3>
      <div className="tm-talk-foot">
        <span className="tm-talk-who">
          {speaker?.image && <img src={speaker.image.src} alt="" width={28} height={28} loading="lazy" />}
          <span>{option.who}</span>
        </span>
        {onToggle ? (
          <PickButton picked={picked} label={option.title} onClick={() => onToggle(row, option.id)} />
        ) : (
          picked && <span className="tm-pick tm-pick-static">✓ Picked</span>
        )}
      </div>
    </article>
  )
}

function SlotHead({ row, now, note }) {
  return (
    <header className="tm-slot-head">
      <p className="tm-slot-time">
        <time>{row.start}</time>
        <span aria-hidden="true">–</span>
        <span className="tm-sr">to</span>
        <time>{row.end}</time>
      </p>
      {isNow(row, now) && <Badge solid>Now</Badge>}
      {note && <span className="tm-slot-note">{note}</span>}
    </header>
  )
}

const SharedSlot = ({ row }) => (
  <div className="tm-slot-shared">
    <b>{row.title}</b>
    {row.description && <span>{row.description}</span>}
  </div>
)

export function ScheduleBoard() {
  const rows = useMemo(buildRows, [])
  const [view, setView] = useState('all') // 'all', a room id, or 'mine'
  const [changing, setChanging] = useState(null)
  const [shareNote, setShareNote] = useState('')
  const now = useEventClock()
  const { picks: rawPicks, toggle, isShared, clear, backToMine, saveShared } = usePicks({
    onShared: () => setView('mine'),
  })

  const pickable = rows.filter((row) => !row.shared)
  const allIds = pickable.flatMap((row) => row.options.map((o) => o.id))
  // Ignore picks for talks no longer on the schedule
  const picks = rawPicks.filter((id) => allIds.includes(id))
  const pickedCount = pickable.filter((row) => row.options.some((o) => picks.includes(o.id))).length
  const room = ROOMS.find((r) => r.id === view)

  const share = async () => {
    const url = `${window.location.origin}${window.location.pathname}#picks=${picks.map(encodeURIComponent).join(',')}`
    try {
      if (navigator.share) {
        await navigator.share({ title: `My ${EVENT.edition} picks`, url })
        return
      }
      await navigator.clipboard.writeText(url)
      setShareNote('Link copied')
    } catch (error) {
      if (error?.name === 'AbortError') return // share sheet dismissed
      setShareNote(url)
    }
  }

  const tabs = [
    { id: 'all', label: 'All screens' },
    ...ROOMS.map((r) => ({ id: r.id, label: r.label, dot: r.id })),
    { id: 'mine', label: 'My day', count: `${pickedCount}/${pickable.length}` },
  ]

  return (
    <div className={`tm-schedule tm-schedule-${room ? 'room' : view}`}>
      <div className="tm-schedule-bar">
        <div className="tm-tabs" role="group" aria-label="Show">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className="tm-tab"
              aria-pressed={view === tab.id}
              onClick={() => setView(tab.id)}
            >
              {tab.dot && <i className={`tm-dot tm-dot-${tab.dot}`} aria-hidden="true" />}
              {tab.label}
              {tab.count && <span className="tm-tab-count">{tab.count}</span>}
            </button>
          ))}
        </div>
      </div>

      <nav className="tm-jump" aria-label="Jump to a time">
        <span className="tm-jump-label">Jump to</span>
        {rows.map((row) => (
          <a key={row.key} href={`#t-${row.start.replace(':', '')}`} className={isNow(row, now) ? 'is-now' : ''}>
            {isNow(row, now) ? 'Now' : row.start}
          </a>
        ))}
      </nav>

      {isShared && (
        <div className="tm-callout" role="status">
          <p>
            <b>You are looking at picks someone shared with you.</b>
          </p>
          <div className="tm-callout-actions">
            <Button size="sm" onClick={() => saveShared(picks)}>
              Save as my picks
            </Button>
            <Button size="sm" variant="ghost" onClick={backToMine}>
              Back to my picks
            </Button>
          </div>
        </div>
      )}

      {view === 'all' && (
        <div className="tm-grid-head" aria-hidden="true">
          <span>Time</span>
          {ROOMS.map((r) => (
            <span key={r.id}>
              <i className={`tm-dot tm-dot-${r.id}`} />
              {r.label}
            </span>
          ))}
        </div>
      )}

      <ol className="tm-slots">
        {rows.map((row) => {
          const id = `t-${row.start.replace(':', '')}`
          const live = isNow(row, now) ? ' is-now' : ''

          if (row.shared) {
            return (
              <li key={row.key} id={id} className={`tm-slot tm-slot-break${live}`}>
                <SlotHead row={row} now={now} />
                <SharedSlot row={row} />
              </li>
            )
          }

          // My day: the pick for this slot, or the choices where nothing is picked yet
          if (view === 'mine') {
            const picked = row.options.find((o) => picks.includes(o.id))
            const choosing = !picked || changing === row.key
            return (
              <li key={row.key} id={id} className={`tm-slot${live}`}>
                <SlotHead row={row} now={now} note={!picked ? 'Pick one' : null} />
                <div className="tm-slot-talks tm-slot-talks-stack">
                  {(choosing ? row.options : [picked]).map((option) => (
                    <TalkCard
                      key={option.id}
                      option={option}
                      row={row}
                      picks={picks}
                      onToggle={
                        toggle &&
                        ((r, optionId) => {
                          toggle(r, optionId)
                          setChanging(null)
                        })
                      }
                    />
                  ))}
                  {picked && toggle && (
                    <button
                      type="button"
                      className="tm-linkbtn"
                      onClick={() => setChanging(changing === row.key ? null : row.key)}
                    >
                      {changing === row.key ? 'Done' : 'Change pick'}
                    </button>
                  )}
                </div>
              </li>
            )
          }

          const options = room ? row.options.filter((o) => o.room.id === room.id) : row.options
          return (
            <li key={row.key} id={id} className={`tm-slot${live}`}>
              <SlotHead row={row} now={now} />
              <div className={`tm-slot-talks${room ? ' tm-slot-talks-stack' : ''}`}>
                {room
                  ? options.map((option) => (
                      <TalkCard key={option.id} option={option} row={row} picks={picks} onToggle={toggle} showRoom={false} />
                    ))
                  : ROOMS.map((r) => {
                      const option = row.options.find((o) => o.room.id === r.id)
                      return option ? (
                        <TalkCard key={r.id} option={option} row={row} picks={picks} onToggle={toggle} />
                      ) : (
                        <div key={r.id} className="tm-talk tm-talk-empty" aria-hidden="true" />
                      )
                    })}
                {room && !options.length && <p className="tm-slot-none">Nothing on {room.label} in this slot.</p>}
              </div>
            </li>
          )
        })}
      </ol>

      {!isShared && (
        <div className="tm-schedule-actions">
          <Button variant="ghost" size="sm" onClick={share} disabled={!picks.length}>
            Share my picks
          </Button>
          <Button
            variant="ghost"
            size="sm"
            disabled={!picks.length}
            onClick={() => {
              clear()
              setShareNote('')
            }}
          >
            Clear picks
          </Button>
          <span role="status" className="tm-schedule-note">
            {shareNote || 'Picks are saved on this device only.'}
          </span>
        </div>
      )}
    </div>
  )
}
