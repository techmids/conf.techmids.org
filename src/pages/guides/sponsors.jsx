import fs from 'fs'
import path from 'path'
import { A, CTA, Facts, GuidePage, GuideSection, SiteLink, dayFacts, mailto, mapLink, span, venueLine } from '@/components/Guide'
import { meetups } from '@/components/Meetups'
import { featuredTestimonial, testimonials } from '@/components/Testimonials'
import { EVENT, sponsorTiers } from '../../../event'
import { TICKETS } from '../../../tickets'
import { GUIDES } from '../../../guides'

const SECTIONS = [
  ['about', 'About TechMids Conf'],
  ['audience', 'Who comes'],
  ['packages', 'Packages'],
  ['this-year', `${EVENT.year} sponsors`],
  ['on-the-day', 'On the day'],
  ['deadlines', 'Deadlines and logos'],
  ['conduct', 'Code of conduct'],
  ['book', 'How to book'],
]

// Past attendees on sponsors, topped up with the featured quote
const allQuotes = [featuredTestimonial, ...testimonials.flat(2)]
const sponsorQuotes = [...allQuotes.filter((q) => /sponsor/i.test(q.body)), featuredTestimonial]
  .filter((q, i, list) => list.indexOf(q) === i)
  .slice(0, 2)

const price = (amount) => `£${Number(amount).toLocaleString('en-GB', { maximumFractionDigits: 2 })}`

export default function SponsorPack({ pastEditions }) {
  const day = dayFacts()
  const s = GUIDES.sponsors
  const ticketPrices = TICKETS.releases.map((r) => r.price)
  const current = Object.values(sponsorTiers).filter((tier) => tier.sponsors?.length)

  return (
    <GuidePage
      slug="sponsors"
      title={`Sponsor pack - ${EVENT.edition}`}
      description={`Sponsor ${EVENT.edition}, Birmingham's community-driven, full stack tech conference. Who comes, packages and how to book.`}
      heading="Sponsor pack"
      lede={`Sponsors make TechMids Conf possible. Meet up to ${EVENT.capacity} people from the Midlands tech community, and help keep tickets affordable.`}
      facts={[
        ['Date', day.date || 'To be confirmed'],
        ['Venue', `${EVENT.venue}, ${EVENT.address}`],
        ['Attendees', `Up to ${EVENT.capacity}`],
        ['Tracks', '3 screens of talks'],
      ]}
      sections={SECTIONS}
    >
      <GuideSection id="about" number={1} title="About TechMids Conf">
        <p>
          TechMids Conf is an all day, full stack conference made up of the Midlands&apos; favourite meetups, from
          Fusion to Women in Tech, Golang to .NET/MAUI and everything in between. It&apos;s Birmingham&apos;s
          community-driven tech conference, organised by <a href="https://techmids.org/">TechMids</a>.
        </p>
        <Facts
          items={[
            ['Date', day.date],
            ['Venue', <A href={mapLink} key="map">{venueLine}</A>],
            ['The day', `${day.doors} - ${day.lastTalkEnd}, then the post-event social`],
            ['Talks', `${day.talkCount} talks across 3 cinema screens`],
            ['Past editions', `${pastEditions.length} since ${pastEditions[0]}`],
            ['Tickets', `${price(Math.min(...ticketPrices))} to ${price(Math.max(...ticketPrices))}, including lunch`],
          ]}
        />
        <p>Backed by {meetups.length} local meetups and organisations, including:</p>
        <ul className="not-prose flex list-none flex-wrap gap-2 p-0">
          {meetups.map((m) => (
            <li
              key={m.name}
              className="rounded-full px-3 py-1 text-sm font-medium text-gray-700 ring-1 ring-inset ring-gray-300 dark:text-gray-200 dark:ring-gray-600"
            >
              {m.name}
            </li>
          ))}
        </ul>
      </GuideSection>

      <GuideSection id="audience" number={2} title="Who comes">
        <p>
          The Midlands tech community and beyond, with talks covering everything from front end engineering to cloud
          platforms and operations. Tickets are kept low cost, with student and self-funded tickets, so the room is a
          real mix of people.
        </p>
        <Facts items={[['Audience numbers', s.audience, 'past attendance, roles and reach']]} />
        <div className="not-prose mt-6 grid gap-4 sm:grid-cols-2 print:grid-cols-2">
          {sponsorQuotes.map((q) => (
            <figure key={q.body} className="break-inside-avoid rounded-2xl bg-gray-50 p-6 dark:bg-techmids-coal">
              <blockquote className="text-gray-900 dark:text-gray-100">
                <p>{`“${q.body}”`}</p>
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-gray-500 dark:text-gray-400">{q.author.name}</figcaption>
            </figure>
          ))}
        </div>
      </GuideSection>

      <GuideSection id="packages" number={3} title="Packages">
        <p>We offer four sponsor tiers. Logos appear on the site, sized by tier.</p>
        <div className="not-prose mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 print:grid-cols-4">
          {s.tiers.map((tier, i) => (
            <div
              key={tier.key}
              className={
                i === 0
                  ? 'break-inside-avoid rounded-2xl bg-techmids-black p-5 text-white ring-2 ring-brand-500'
                  : 'break-inside-avoid rounded-2xl bg-white p-5 text-gray-900 ring-1 ring-gray-200 dark:bg-techmids-coal dark:text-white dark:ring-gray-700'
              }
            >
              <h3 className={i === 0 ? 'font-display text-xl font-bold text-brand-500' : 'font-display text-xl font-bold'}>
                {tier.name}
              </h3>
              <p className="mt-2 text-lg font-semibold">
                {tier.price || <span className="rounded-md bg-gray-100 px-2 py-0.5 text-xs font-bold uppercase tracking-wider text-gray-700 ring-1 ring-inset ring-gray-300">Price TBC</span>}
              </p>
              {tier.includes?.length ? (
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
                  {tier.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className={i === 0 ? 'mt-2 text-sm text-gray-300' : 'mt-2 text-sm text-gray-500 dark:text-gray-400'}>
                  What&apos;s included: to be confirmed
                </p>
              )}
              {tier.available && <p className="mt-2 text-sm">{tier.available}</p>}
            </div>
          ))}
        </div>
        <Facts
          items={[
            ['Add-ons', s.addOns?.length ? s.addOns.join(', ') : null, 'extras such as coffee or the social'],
            ['Staff passes', s.staffPasses, 'passes per tier for stand staff'],
          ]}
        />
      </GuideSection>

      <GuideSection id="this-year" number={4} title={`${EVENT.year} sponsors`}>
        <p>Thank you to this year&apos;s sponsors.</p>
        <div className="not-prose space-y-6">
          {current.map((tier) => (
            <div key={tier.name}>
              <p className="text-sm font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-300">{tier.name}</p>
              <ul className="mt-3 flex flex-wrap gap-3">
                {tier.sponsors.map((sponsor) => (
                  <li key={sponsor.name}>
                    {/* Sponsor logos are drawn for a light background, so they keep a white tile */}
                    <a
                      href={sponsor.url}
                      title={sponsor.name}
                      className="flex h-24 w-44 items-center justify-center rounded-2xl bg-white p-4 ring-1 ring-gray-200"
                    >
                      <img src={sponsor.image} alt={sponsor.name} className="max-h-full max-w-full object-contain" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </GuideSection>

      <GuideSection id="on-the-day" number={5} title="On the day">
        <p>Attendees are free to visit sponsors whenever they aren&apos;t in a talk. The busiest times are:</p>
        <Facts
          items={[
            ['Registration', `${day.doors} - ${day.welcome?.start || day.firstTalk}`],
            ['Lunch', span(day.lunch)],
            ['Afternoon break', span(day.afternoonBreak)],
            ['Post-event social', `From ${day.lastTalkEnd}`],
          ]}
        />
        <h3>Your stand</h3>
        <Facts
          items={[
            ['Stand', s.stand, 'size, table, chairs and power'],
            ['Set up and pack down', s.setup, 'set up and pack down times'],
            ['Deliveries', s.deliveries, 'whether the venue accepts deliveries'],
          ]}
        />
      </GuideSection>

      <GuideSection id="deadlines" number={6} title="Deadlines and logos">
        <Facts items={[['Deadlines', s.deadlines, 'booking, payment and logo deadlines']]} />
        <p>Please send your logo as an SVG if you can, or a large PNG. Logos sit on a white tile on the site.</p>
      </GuideSection>

      <GuideSection id="conduct" number={7} title="Code of conduct">
        <p>
          Sponsors, and everyone on their stand, agree to our <SiteLink href="/code-of-conduct">code of conduct</SiteLink>.
          In particular, sponsors shouldn&apos;t use sexualised images, activities or other material, and stand staff
          shouldn&apos;t wear sexualised clothing, uniforms or costumes.
        </p>
      </GuideSection>

      <GuideSection id="book" number={8} title="How to book">
        <p>
          Email us at <a href={`mailto:${GUIDES.contactEmail}`}>{GUIDES.contactEmail}</a> with the tier you&apos;re
          interested in, and we&apos;ll get back to you.
        </p>
        <CTA href={mailto(`${EVENT.edition}: sponsorship`)}>Email us about sponsoring</CTA>
      </GuideSection>
    </GuidePage>
  )
}

// Past editions are the archived sites in public/past (folders named YYYY-MM or YYYY-MM-DD)
export async function getStaticProps() {
  const dir = path.join(process.cwd(), 'public', 'past')
  const pastEditions = fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && /^\d{4}-\d{2}/.test(entry.name))
    .map((entry) => entry.name.slice(0, 4))
    .sort()
  return { props: { pastEditions } }
}
