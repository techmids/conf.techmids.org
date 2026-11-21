import { A, CTA, Facts, GuidePage, GuideSection, SiteLink, dayFacts, mailto, mapLink, span, talks, venueLine } from '@/components/Guide'
import { EVENT } from '../../../event'
import { GUIDES } from '../../../guides'

const SECTIONS = [
  ['glance', 'At a glance'],
  ['before', 'Before the day'],
  ['promote', 'Promote your talk'],
  ['travel', 'Travel and accommodation'],
  ['on-the-day', 'On the day'],
  ['your-slot', 'Find your slot'],
  ['conduct', 'Code of conduct'],
  ['contact', 'Contact'],
]

export default function SpeakerPack() {
  const day = dayFacts()
  const s = GUIDES.speakers
  return (
    <GuidePage
      slug="speakers"
      title={`Speaker pack - ${EVENT.edition}`}
      description={`Everything speakers need to know for ${EVENT.edition}: dates, the venue, your slot, tech checks and the code of conduct.`}
      heading="Speaker pack"
      lede={`Thank you for speaking at ${EVENT.edition}! Here's everything you need for the day, from your tech check to finding your screen.`}
      facts={[
        ['Date', day.date || 'To be confirmed'],
        ['Venue', `${EVENT.venue}, ${EVENT.address}`],
        ['Doors open', day.doors],
        ['Talk slots', `${day.slotMinutes} minutes`],
      ]}
      sections={SECTIONS}
    >
      <GuideSection id="glance" number={1} title="At a glance">
        <p>
          {EVENT.edition} is a one day, full stack conference across three tracks, each in its own cinema screen at{' '}
          {EVENT.venue}. There are {day.talkCount} talks and up to {EVENT.capacity} attendees.
        </p>
        <Facts
          items={[
            ['Date', day.date],
            ['Venue', <A href={mapLink} key="map">{venueLine}</A>],
            ['Registration', `${day.doors} - ${day.welcome?.start || day.firstTalk}`],
            ['Welcome', span(day.welcome)],
            ['Talks', `${day.firstTalk} - ${day.lastTalkEnd}, in ${day.slotMinutes} minute slots`],
            ['Lunch', span(day.lunch)],
            ['Afternoon break', span(day.afternoonBreak)],
          ]}
        />
      </GuideSection>

      <GuideSection id="before" number={2} title="Before the day">
        <h3>Check your speaker page</h3>
        <p>
          Your name, photo, job title, talk title and abstract are on your page under{' '}
          <SiteLink href="/speakers">Speakers</SiteLink>. If anything is wrong or out of date, email us and we&apos;ll
          fix it.
        </p>
        <h3>Book a tech check</h3>
        <p>
          Please book or attend a tech check before your talk, so we can make sure your laptop and slides work with the
          screen.
        </p>
        <Facts items={[['How to book', s.techCheck, 'when and how tech checks run']]} />
      </GuideSection>

      <GuideSection id="promote" number={3} title="Promote your talk">
        <p>Telling your network you&apos;re speaking is the best way to fill the room. You can share:</p>
        <ul>
          <li>
            Your speaker page, which shows your talk, time and screen. Find it in the table under{' '}
            <a href="#your-slot">Find your slot</a>.
          </li>
          <li>
            The ticket link: <a href={EVENT.ticketLink}>{EVENT.ticketLink.replace('https://', '')}</a>
          </li>
          <li>
            Our guide to <SiteLink href="/how-to-convince-your-boss">convincing your boss</SiteLink>, for anyone who
            needs to make the case at work.
          </li>
        </ul>
      </GuideSection>

      <GuideSection id="travel" number={4} title="Travel and accommodation">
        <p>
          {s.travelCovered ? (
            'We cover travel and accommodation.'
          ) : (
            <strong>TechMids doesn&apos;t cover travel or accommodation for speakers.</strong>
          )}{' '}
          Please plan and book your own journey and hotel.
        </p>
        <p>
          The venue is {EVENT.venue} at <a href={mapLink}>{venueLine}</a>.
        </p>
      </GuideSection>

      <GuideSection id="on-the-day" number={5} title="On the day">
        <p>
          Doors open at {day.doors} for registration, and we welcome everyone at {day.welcome?.start}. Talks run from{' '}
          {day.firstTalk} to {day.lastTalkEnd}.
        </p>
        <Facts
          items={[
            ['When to arrive', s.arrival, 'speaker arrival time and check-in'],
            ['Your ticket', s.ticket, 'door list or ticket for speakers'],
            ['Your slot', `${day.slotMinutes} minutes`],
            ['Talk and Q&A', s.talkLength, 'talk length and Q&A within the slot'],
            ['Recording and photos', s.recording, 'whether talks are filmed'],
            ['Food', 'Lunch and refreshments are provided'],
          ]}
        />
        <h3>Keeping to time</h3>
        <p>
          Talks run back to back on all three screens, and many attendees move between screens after each one. Please
          finish on time so the next speaker can set up and people can get to their next talk.
        </p>
        <h3>After the talks</h3>
        <p>Stay for the post-event social, and catch the talks on the other screens during the day.</p>
      </GuideSection>

      <GuideSection id="your-slot" number={6} title="Find your slot">
        <p>
          Every talk, in running order. The <SiteLink href="/schedule">schedule</SiteLink> always has the latest
          version.
        </p>
        <div className="not-prose -mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0 print:overflow-visible">
          <table className="w-full min-w-[34rem] text-left text-sm text-gray-700 dark:text-gray-300 print:min-w-0">
            <thead>
              <tr className="border-b-2 border-gray-900 dark:border-gray-400">
                {['Time', 'Screen', 'Speaker', 'Talk'].map((h) => (
                  <th key={h} scope="col" className="py-2 pr-4 font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {talks().map((talk) => (
                <tr key={talk.speakerId} className="break-inside-avoid align-top">
                  <td className="whitespace-nowrap py-2.5 pr-4 font-mono text-xs font-semibold text-gray-900 dark:text-white">
                    {talk.start}–{talk.end}
                  </td>
                  <td className="whitespace-nowrap py-2.5 pr-4">{talk.screen}</td>
                  <td className="py-2.5 pr-4">
                    <SiteLink href={`/speakers/${talk.speakerId}`}>{talk.speaker.name}</SiteLink>
                  </td>
                  <td className="py-2.5">{talk.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GuideSection>

      <GuideSection id="conduct" number={7} title="Code of conduct">
        <p>
          All attendees, speakers, sponsors and volunteers agree to our{' '}
          <SiteLink href="/code-of-conduct">code of conduct</SiteLink>. For speakers, that means sexual language and
          imagery isn&apos;t appropriate in talks or slides.
        </p>
        <p>
          If you are being harassed, notice that someone else is, or have any other concerns, please contact a member of
          conference staff straight away. Staff wear a TechMids t-shirt.
        </p>
      </GuideSection>

      <GuideSection id="contact" number={8} title="Contact">
        <Facts
          items={[
            ['Before the day', <A href={`mailto:${GUIDES.contactEmail}`} key="email">{GUIDES.contactEmail}</A>],
            ['On the day', s.dayContact, 'who to find on the day'],
          ]}
        />
        <CTA href={mailto(`${EVENT.edition}: speaker question`)}>Email the organisers</CTA>
      </GuideSection>
    </GuidePage>
  )
}
