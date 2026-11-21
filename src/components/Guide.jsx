// Shared pieces for the speaker, sponsor and volunteer guides (src/pages/guides).
// Event facts come from event.js and schedule.js; anything still undecided lives in
// guides.js as null and shows as a TBC marker. Styled to match the rest of the site.

import Link from 'next/link'
import clsx from 'clsx'
import { PageMeta } from '@/components/PageMeta'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Container } from '@/components/Container'
import { EVENT } from '../../event'
import { Schedule } from '../../schedule'
import { Sessions } from '../../speakers'
import { GUIDES } from '../../guides'

// ---------- facts worked out from schedule.js, so the guides can't drift from the schedule ----------

export const SCREENS = [
  ['screen1', 'Screen 1'],
  ['screen2', 'Screen 2'],
  ['screen3', 'Screen 3'],
]

// schedule.js writes times as '09:45 AM' or '13:00PM'; the hours are already 24-hour
const clock = (time = '') => time.replace(/[^0-9:]/g, '')
const minutes = (time) => {
  const [h, m] = clock(time).split(':').map(Number)
  return h * 60 + (m || 0)
}

// Every talk with a speaker, in running order
export function talks() {
  return SCREENS.flatMap(([id, screen]) =>
    (Schedule[id]?.day1?.timeSlots || [])
      .filter((slot) => slot.session?.[0] && Sessions[slot.session[0]])
      .map((slot) => {
        const speakerId = slot.session[0]
        return {
          speakerId,
          speaker: Sessions[speakerId],
          screen,
          start: clock(slot.start),
          end: clock(slot.end),
          title: slot.description || Sessions[speakerId].talkTitle,
          duration: minutes(slot.end) - minutes(slot.start),
        }
      })
  ).sort((a, b) => minutes(a.start) - minutes(b.start) || a.screen.localeCompare(b.screen))
}

export function dayFacts() {
  const list = talks()
  const durations = list.map((t) => t.duration)
  const slotMinutes = [...durations].sort(
    (a, b) => durations.filter((d) => d === b).length - durations.filter((d) => d === a).length
  )[0]
  const overall = Schedule.conferenceSchedule.day1.timeSlots
  const find = (pattern) => {
    const slot = overall.find((s) => pattern.test(s.name))
    return slot && { start: clock(slot.start), end: clock(slot.end) }
  }
  return {
    date: EVENT.dateTbc ? null : EVENT.date,
    doors: clock(overall[0]?.start),
    welcome: find(/welcome/i),
    firstTalk: list[0]?.start,
    lastTalkEnd: list.reduce((end, t) => (minutes(t.end) > minutes(end) ? t.end : end), '00:00'),
    slotMinutes,
    lunch: find(/lunch/i),
    afternoonBreak: find(/break/i),
    talkCount: list.length,
  }
}

export const span = (slot) => (slot ? `${slot.start} - ${slot.end}` : null)
export const venueLine = `${EVENT.venue}, ${EVENT.streetAddress}, Birmingham ${EVENT.postalCode}`
export const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venueLine)}`
export const mailto = (subject) => `mailto:${GUIDES.contactEmail}?subject=${encodeURIComponent(subject)}`

// ---------- building blocks ----------

const isEmpty = (value) =>
  value === null || value === undefined || value === '' || (Array.isArray(value) && !value.length)

// The value, or a TBC marker when it hasn't been decided yet
export function Tbc({ children, note }) {
  if (!isEmpty(children)) return children
  return (
    <span className="inline-flex flex-wrap items-baseline gap-x-2">
      <span className="rounded-md bg-gray-100 px-2 py-0.5 text-xs font-bold uppercase tracking-wider text-gray-700 ring-1 ring-inset ring-gray-300 dark:bg-techmids-coal dark:text-gray-200 dark:ring-gray-600">
        TBC
      </span>
      {note && <span className="text-sm font-normal text-gray-500 dark:text-gray-400">{note}</span>}
    </span>
  )
}

export const A = ({ href, children }) => (
  <a href={href} className="font-semibold text-gray-900 underline decoration-brand-500 decoration-2 underline-offset-2 dark:text-white">
    {children}
  </a>
)

export const SiteLink = ({ href, children }) => (
  <Link href={href} className="font-semibold text-gray-900 underline decoration-brand-500 decoration-2 underline-offset-2 dark:text-white">
    {children}
  </Link>
)

// Label and value rows; a value can be a TBC marker
export function Facts({ items }) {
  return (
    <dl className="not-prose mt-6 divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-700 dark:border-gray-700">
      {items.map(([label, value, note]) => (
        <div key={label} className="py-3 sm:grid sm:grid-cols-3 sm:gap-4 print:grid print:grid-cols-3 print:gap-4 break-inside-avoid">
          <dt className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">{label}</dt>
          <dd className="mt-1 text-base text-gray-900 dark:text-gray-100 sm:col-span-2 sm:mt-0 print:col-span-2 print:mt-0">
            <Tbc note={note}>{value}</Tbc>
          </dd>
        </div>
      ))}
    </dl>
  )
}

export function GuideSection({ id, number, title, children }) {
  return (
    <section id={id} className="scroll-mt-8 border-t border-gray-200 py-10 first:border-t-0 first:pt-0 dark:border-gray-700 print:py-6">
      <h2 className="flex items-center gap-3 font-display text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl break-after-avoid">
        <span className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-brand-500 text-base font-bold text-black">
          {number}
        </span>
        {title}
      </h2>
      <div className="mt-5 prose prose-yellow max-w-none text-gray-600 dark:prose-invert dark:text-gray-300 prose-a:decoration-brand-500 prose-a:decoration-2">
        {children}
      </div>
    </section>
  )
}

const GUIDE_LINKS = [
  ['speakers', 'Speaker pack'],
  ['sponsors', 'Sponsor pack'],
  ['volunteers', 'Volunteer guide'],
]

export function GuidePage({ slug, title, description, heading, lede, facts, sections, children }) {
  return (
    <>
      <PageMeta path={`/guides/${slug}`} title={title} description={description} noindex={!GUIDES.published} />
      <div className="print:hidden">
        <Header />
      </div>
      <main className="bg-white dark:bg-techmids-night">
        <div className="bg-techmids-black py-14 text-white sm:py-20 print:py-10">
          <Container>
            <p className="font-mono text-sm font-semibold uppercase tracking-wider text-brand-500">
              {EVENT.edition}
              {!EVENT.dateTbc && ` · ${EVENT.date}`}
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tighter text-brand-500 sm:text-6xl">{heading}</h1>
            <p className="mt-5 max-w-2xl text-lg tracking-tight text-gray-200">{lede}</p>
            <div className="mt-8 flex flex-wrap gap-3 print:hidden">
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex justify-center rounded-2xl bg-brand-300 px-5 py-3 text-base font-semibold text-black hover:bg-brand-500"
              >
                Save as PDF
              </button>
              <a
                href={mailto(`${EVENT.edition}: ${title}`)}
                className="inline-flex justify-center rounded-2xl px-5 py-3 text-base font-semibold text-white ring-1 ring-inset ring-white/40 hover:ring-brand-500"
              >
                Ask us a question
              </a>
            </div>
            {facts && (
              <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-white/20 pt-8 sm:grid-cols-4 print:grid-cols-4">
                {facts.map(([name, value]) => (
                  <div key={name}>
                    <dt className="font-mono text-sm text-brand-500">{name}</dt>
                    <dd className="mt-0.5 text-xl font-semibold tracking-tight text-white">{value}</dd>
                  </div>
                ))}
              </dl>
            )}
          </Container>
        </div>

        <Container className="py-12 sm:py-16 print:py-6">
          <div className="lg:grid lg:grid-cols-4 lg:gap-12">
            <nav aria-label="On this page" className="mb-10 lg:mb-0 print:hidden">
              <div className="rounded-2xl bg-gray-50 p-5 dark:bg-techmids-coal lg:sticky lg:top-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">On this page</p>
                <ol className="mt-3 space-y-2 text-sm">
                  {sections.map(([id, label], i) => (
                    <li key={id} className="flex gap-2">
                      <span className="w-5 flex-none font-mono text-gray-400">{i + 1}</span>
                      <a href={`#${id}`} className="font-medium text-gray-900 hover:underline dark:text-gray-100">
                        {label}
                      </a>
                    </li>
                  ))}
                </ol>
                <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Other guides</p>
                <ul className="mt-3 space-y-2 text-sm">
                  {GUIDE_LINKS.filter(([s]) => s !== slug).map(([s, label]) => (
                    <li key={s}>
                      <Link href={`/guides/${s}`} className="font-medium text-gray-900 hover:underline dark:text-gray-100">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
            <div className="min-w-0 lg:col-span-3">{children}</div>
          </div>
          <p className="mt-10 border-t border-gray-200 pt-6 text-sm text-gray-500 dark:border-gray-700 dark:text-gray-400">
            Anything marked <Tbc /> is still being confirmed. Questions? Email{' '}
            <A href={`mailto:${GUIDES.contactEmail}`}>{GUIDES.contactEmail}</A>. This guide lives at
            conf.techmids.org/guides/{slug}
          </p>
        </Container>
      </main>
      <div className="print:hidden">
        <Footer />
      </div>
    </>
  )
}

export function CTA({ href, children, className }) {
  return (
    <div className={clsx('not-prose mt-8 print:hidden', className)}>
      <a
        href={href}
        className="inline-flex justify-center rounded-2xl bg-brand-300 p-4 text-base font-semibold text-black hover:bg-brand-500"
      >
        {children}
      </a>
    </div>
  )
}
