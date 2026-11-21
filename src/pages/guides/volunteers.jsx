import { A, CTA, Facts, GuidePage, GuideSection, SCREENS, SiteLink, dayFacts, mailto, mapLink, span, venueLine } from '@/components/Guide'
import { featuredTestimonial, testimonials } from '@/components/Testimonials'
import { EVENT } from '../../../event'
import { GUIDES } from '../../../guides'

const SECTIONS = [
  ['why', 'Why volunteer'],
  ['the-day', 'The day'],
  ['where', 'Where help is needed'],
  ['screens', 'Screen helper checklist'],
  ['wear', 'What to wear and bring'],
  ['conduct', 'Code of conduct'],
  ['contacts', 'Who to call'],
  ['perks', 'Food and perks'],
]

const volunteerQuote = [featuredTestimonial, ...testimonials.flat(2)].find((q) => /volunteer/i.test(q.body))

export default function VolunteerGuide() {
  const day = dayFacts()
  const v = GUIDES.volunteers
  const screens = SCREENS.map(([, label]) => label).join(', ')

  const areas = [
    ['Registration desk', `Welcoming people from ${day.doors}, checking them in and pointing them to the screens.`],
    [`Screen helpers (${screens})`, 'Helping each talk start and finish on time, and helping people find a seat.'],
    ['Speaker help', 'Making speakers feel welcome and getting them to their screen in good time.'],
    ['Sponsor help', 'Helping sponsors find their stand and get what they need.'],
    ['Breaks and lunch', `Keeping things moving at lunch (${day.lunch?.start}) and the afternoon break (${day.afternoonBreak?.start}).`],
  ]

  return (
    <GuidePage
      slug="volunteers"
      title={`Volunteer guide - ${EVENT.edition}`}
      description={`Everything volunteers need to know for ${EVENT.edition}: the day, where help is needed, the code of conduct and who to call.`}
      heading="Volunteer guide"
      lede={`Thank you for helping run ${EVENT.edition}! Volunteers are what make the day run smoothly. Here's what to expect.`}
      facts={[
        ['Date', day.date || 'To be confirmed'],
        ['Venue', `${EVENT.venue}, ${EVENT.address}`],
        ['Doors open', day.doors],
        ['Attendees', `Up to ${EVENT.capacity}`],
      ]}
      sections={SECTIONS}
    >
      <GuideSection id="why" number={1} title="Why volunteer">
        <p>
          You&apos;ll be part of the team behind Birmingham&apos;s community-driven tech conference, meet speakers and
          sponsors, and help {EVENT.capacity} people have a great day.
        </p>
        {volunteerQuote && (
          <figure className="not-prose mt-6 rounded-2xl bg-gray-50 p-6 dark:bg-techmids-coal">
            <blockquote className="text-gray-900 dark:text-gray-100">
              <p>{`“${volunteerQuote.body}”`}</p>
            </blockquote>
            <figcaption className="mt-4 text-sm font-semibold text-gray-500 dark:text-gray-400">
              {volunteerQuote.author.name}
            </figcaption>
          </figure>
        )}
        <Facts items={[['How to sign up', v.signUp, 'how to volunteer']]} />
      </GuideSection>

      <GuideSection id="the-day" number={2} title="The day">
        <Facts
          items={[
            ['Date', day.date],
            ['Venue', <A href={mapLink} key="map">{venueLine}</A>],
            ['Volunteers arrive', v.arrival, 'arrival and briefing time'],
            ['Doors open', `${day.doors}, registration until ${day.welcome?.start || day.firstTalk}`],
            ['Welcome', span(day.welcome)],
            ['Talks', `${day.firstTalk} - ${day.lastTalkEnd}, ${day.slotMinutes} minute slots on 3 screens`],
            ['Lunch', span(day.lunch)],
            ['Afternoon break', span(day.afternoonBreak)],
            ['Post-event social', `After ${day.lastTalkEnd}`],
          ]}
        />
        <p>
          Keep the <SiteLink href="/schedule">schedule</SiteLink> open on your phone. It shows every talk on every screen
          and highlights what&apos;s on now.
        </p>
      </GuideSection>

      <GuideSection id="where" number={3} title="Where help is needed">
        <p>These are the parts of the day that need people. The volunteer lead will confirm your role and shifts.</p>
        <div className="not-prose mt-6 grid gap-4 sm:grid-cols-2 print:grid-cols-2">
          {areas.map(([title, body]) => (
            <div key={title} className="break-inside-avoid border-l-4 border-brand-500 py-1 pl-4">
              <h3 className="font-semibold text-gray-900 dark:text-white">{title}</h3>
              <p className="mt-1 text-gray-600 dark:text-gray-300">{body}</p>
            </div>
          ))}
        </div>
      </GuideSection>

      <GuideSection id="screens" number={4} title="Screen helper checklist">
        <ul>
          <li>Be in your screen before each talk starts, and check the speaker is there.</li>
          <li>
            Help the talk finish on time. Talks run back to back, so the next one starts as soon as the last one ends.
          </li>
          <li>Help people find seats, and point them to the other screens if one is full.</li>
          <li>Keep exits and walkways clear.</li>
          <li>Tell the volunteer lead straight away if a speaker hasn&apos;t arrived or something isn&apos;t working.</li>
        </ul>
      </GuideSection>

      <GuideSection id="wear" number={5} title="What to wear and bring">
        <p>
          Conference staff wear a TechMids t-shirt, so attendees know who to ask for help. Bring a charged phone, and
          wear comfortable shoes.
        </p>
        <Facts items={[['Your t-shirt', v.tshirt, 'how volunteers get a t-shirt']]} />
      </GuideSection>

      <GuideSection id="conduct" number={6} title="Code of conduct">
        <p>
          Everyone at the event, volunteers included, agrees to our{' '}
          <SiteLink href="/code-of-conduct">code of conduct</SiteLink>. Because you&apos;re wearing a TechMids
          t-shirt, attendees may come to you with a problem.
        </p>
        <p>If someone tells you they are being harassed, or you see it happen:</p>
        <ul>
          <li>Listen, take it seriously, and help them get somewhere they feel safe.</li>
          <li>Tell the code of conduct contact straight away.</li>
          <li>
            Offer to help them contact venue security or the police, or to walk with them, as the code of conduct
            promises.
          </li>
        </ul>
      </GuideSection>

      <GuideSection id="contacts" number={7} title="Who to call">
        <Facts
          items={[
            ['Volunteer lead', v.lead, 'name and phone on the day'],
            ['Code of conduct', v.conductContact, 'who takes reports on the day'],
            ['First aid and safeguarding', v.firstAid, 'first aid and safeguarding contacts'],
            ['Before the day', <A href={`mailto:${GUIDES.contactEmail}`} key="email">{GUIDES.contactEmail}</A>],
          ]}
        />
      </GuideSection>

      <GuideSection id="perks" number={8} title="Food and perks">
        <Facts
          items={[
            ['Food and breaks', v.food, 'volunteer breaks and food'],
            ['What you get', v.perks, 'volunteer perks'],
          ]}
        />
        <CTA href={mailto(`${EVENT.edition}: volunteering`)}>Email us about volunteering</CTA>
      </GuideSection>
    </GuidePage>
  )
}
