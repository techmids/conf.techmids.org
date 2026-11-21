import Script from 'next/script'
import Link from 'next/link'
import { Layout } from '@/new/Layout'
import { Arrow, Badge, BlockLogo, Button, Eyebrow, Section, Tag } from '@/new/ui'
import { dayOutline, href, longDate, shortDate, speakerList } from '@/new/data'
import { SpeakerCard } from '@/new/SpeakerCard'
import { images } from '@/components/Images'
import { meetups } from '@/components/Meetups'
import { featuredTestimonial, testimonials } from '@/components/Testimonials'
import { EVENT, AVAILABLE_INFORMATION, sponsorTiers } from '../../../event'
import { TICKETS } from '../../../tickets'

function Hero() {
  return (
    <section className="tm-hero">
      <div className="tm-wrap tm-wrap-wide tm-hero-grid">
        <div className="tm-hero-copy">
          <Eyebrow route={`/conf/${EVENT.year}`}>
            {!EVENT.dateTbc && `${shortDate()} · `}
            {EVENT.venue}, {EVENT.address}
          </Eyebrow>
          <h1 className="tm-h1">
            <span className="tm-sr">{EVENT.title} - </span>
            All day, <span className="tm-hl">full stack</span> conference
          </h1>
          <p className="tm-lede">
            <b>TechMids Conf is a full stack conference</b>, made up of all your favourite meetups from{' '}
            <b>Fusion</b>, to <b>Women in Tech</b>, to <b>Golang</b>, to <b>.NET/MAUI</b> and everything in-between.
          </p>
          <p className="tm-lede">
            Hear from awesome speakers - from the local community and beyond - across 3 tracks hosted in the
            delightful Everyman Mailbox venue, enjoy the &apos;hallway track&apos;, and find out how to get
            involved with the community.
          </p>
          <div className="tm-actions">
            {EVENT.onSale && (
              <Button href="#tickets">
                Get your ticket <Arrow />
              </Button>
            )}
            {EVENT.CFPOpen && (
              <Button href={EVENT.CFPLink} variant="secondary">
                Submit to our CFP
              </Button>
            )}
            {AVAILABLE_INFORMATION.scheduleAvailable && (
              <Button href={href('/schedule')} variant="ghost">
                See the schedule
              </Button>
            )}
          </div>
        </div>
        <div className="tm-hero-art">
          <div className="tm-hero-block" aria-hidden="true" />
          <img src="/hero/hero.jpg" alt="A full cinema screen of attendees at a previous TechMids Conf" />
          <BlockLogo tag="Conf" tagLine={EVENT.year} className="tm-hero-logo" />
        </div>
      </div>
      {AVAILABLE_INFORMATION.locationAvailable && (
        <dl className="tm-wrap tm-wrap-wide tm-facts">
          {[
            ['Date', EVENT.dateTbc ? 'To be confirmed' : longDate()],
            ['Spaces', `Limited to ${EVENT.capacity} seats`],
            ['Venue', EVENT.venue],
            ['Location', EVENT.address],
          ].map(([name, value]) => (
            <div key={name}>
              <dt>{name}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      )}
    </section>
  )
}

function Tickets() {
  if (!EVENT.onSale && !EVENT.soldOut && !EVENT.CFPOpen) return null
  return (
    <Section
      id="tickets"
      wide
      tone="inverse"
      route="/tickets"
      label={EVENT.soldOut ? 'Sold out' : EVENT.onSale ? 'On sale' : 'Call for proposals'}
      title={EVENT.soldOut ? 'We are SOLD OUT!' : EVENT.onSale ? 'Tickets are on sale now!' : 'Ready to take the stage?'}
      lede={EVENT.soldOut ? 'Check back later to see if we have any tickets available' : null}
    >
      {EVENT.onSale && (
        <div className="tm-tickets">
          <div>
            <p className="tm-label">Every ticket includes</p>
            <ul className="tm-list">
              {TICKETS.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="tm-small">
              Need to make the case at work?{' '}
              <Link className="tm-link" href={href('/how-to-convince-your-boss')}>
                How to convince your boss
              </Link>
            </p>
          </div>
          <div className="tm-tito">
            <Script src="https://js.tito.io/v2/with/inline" strategy="lazyOnload" />
            <tito-widget event={EVENT.titoId}></tito-widget>
            <Button href={EVENT.ticketLink} className="tm-btn-block">
              Get your ticket for {EVENT.edition} now <Arrow />
            </Button>
          </div>
        </div>
      )}
      {EVENT.CFPOpen && (
        <div className="tm-cfp">
          {EVENT.onSale && <h3 className="tm-h3">Ready to take the stage?</h3>}
          <p className="tm-lede">
            Our Call for Proposals is now open! Apply now to present a talk at {EVENT.edition}
          </p>
          <Button href={EVENT.CFPLink}>
            Submit to our CFP <Arrow />
          </Button>
        </div>
      )}
    </Section>
  )
}

function Gallery() {
  return (
    <Section
      id="gallery"
      wide
      route="/past"
      label="Previous years"
      title="Check out some of our events from prior years"
    >
      <div className="tm-video">
        <iframe
          src="https://www.youtube.com/embed/5P_iCOXKxfA?si=QiTDrD2wPBs9l6Ne"
          title="TechMids Conf highlights video"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
      <ul className="tm-gallery" aria-label="Photos from TechMids Conf 2025">
        {images.map((image) => (
          <li key={image.name}>
            <img src={image.source} alt="" loading="lazy" />
          </li>
        ))}
      </ul>
      <p className="tm-small">
        <Link className="tm-link" href={href('/past-events')}>
          Browse every past event
        </Link>
      </p>
    </Section>
  )
}

function Speakers() {
  const speakers = speakerList()
  return (
    <Section
      id="speakers"
      wide
      route="/speakers"
      label={`${speakers.length} announced`}
      title="Speakers"
      lede="Come away inspired from a day of talks from experts, ranging from front end engineering, to cloud platforms and operations, with everything in between."
    >
      {speakers.length === 0 ? (
        <p className="tm-lede">
          We are working hard on the speaker line up. Check back soon!{' '}
          <Link className="tm-link" href={href('/past-events')}>
            Past Events
          </Link>
        </p>
      ) : (
        <ul className="tm-speakers">
          {speakers.map((speaker) => (
            <li key={speaker.id}>
              <SpeakerCard speaker={speaker} />
            </li>
          ))}
          {EVENT.speakersTBC && (
            <li className="tm-speaker tm-speaker-more">
              <div className="tm-speaker-photo" aria-hidden="true">
                +
              </div>
              <h3>More Speakers</h3>
              <p>To be announced soon</p>
            </li>
          )}
        </ul>
      )}
    </Section>
  )
}

function DayOutline() {
  return (
    <Section
      id="schedule"
      tone="sunk"
      route="/schedule"
      label="3 tracks"
      title="Schedule"
      lede="Your day will be composed of 30-45 minute sessions including plenty of time to chat, network and move between talks."
    >
      <ol className="tm-outline">
        {dayOutline().map((slot) => (
          <li key={slot.start + slot.name}>
            <time>
              {slot.start}
              <span aria-hidden="true">–</span>
              {slot.end}
            </time>
            <b>{slot.name}</b>
            <span>{slot.description}</span>
          </li>
        ))}
      </ol>
      <div className="tm-actions">
        <Button href={href('/schedule')}>
          See all three tracks and pick your talks <Arrow />
        </Button>
      </div>
    </Section>
  )
}

const Quote = ({ testimonial, featured }) => (
  <figure className={`tm-quote${featured ? ' tm-quote-featured' : ''}`}>
    <blockquote>
      <p>{`“${testimonial.body}”`}</p>
    </blockquote>
    <figcaption>
      {testimonial.author.imageUrl && <img src={testimonial.author.imageUrl} alt="" loading="lazy" />}
      <span>{testimonial.author.name}</span>
    </figcaption>
  </figure>
)

function Testimonials() {
  return (
    <Section
      id="testimonials"
      wide
      route="/testimonials"
      title="Testimonials"
      lede="Hear from some of our past attendees, sponsors, and speakers"
    >
      <div className="tm-quotes">
        <Quote testimonial={featuredTestimonial} featured />
        {testimonials.flat(2).map((testimonial) => (
          <Quote key={testimonial.body} testimonial={testimonial} />
        ))}
      </div>
    </Section>
  )
}

function Sponsors() {
  const tiers = [
    ['Headline', sponsorTiers.headline.sponsors, 'xl'],
    ['Gold', sponsorTiers.gold.sponsors, 'lg'],
    ['Silver', sponsorTiers.silver.sponsors, 'md'],
    ['Bronze', sponsorTiers.bronze.sponsors, 'sm'],
  ].filter(([, sponsors]) => sponsors?.length)

  return (
    <Section id="sponsors" tone="sunk" wide route="/sponsors" title="Sponsors">
      {AVAILABLE_INFORMATION.sponsorsAvailable && (
        <div className="tm-tiers">
          {tiers.map(([tier, sponsors, size]) => (
            <div key={tier} className={`tm-tier tm-tier-${size}`}>
              <p className="tm-label">
                {tier} Sponsor{sponsors.length > 1 ? 's' : ''}
              </p>
              <ul>
                {sponsors.map((sponsor) => (
                  <li key={sponsor.name}>
                    {/* Sponsor logos are drawn for light backgrounds, so they always sit on a white tile */}
                    <a href={sponsor.url} target="_blank" rel="noreferrer">
                      <img src={sponsor.image} alt={sponsor.name} loading="lazy" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
      <div className="tm-cta">
        <div>
          <h3 className="tm-h3">
            We are <span className="tm-hl">looking for sponsors!</span>
          </h3>
          <p>Sponsors make this conference possible, we&apos;re actively looking for people to support!</p>
        </div>
        <div>
          <p className="tm-label">Say hi if you&apos;re interested in supporting</p>
          <Button href="mailto:techmidsconf@gmail.com">techmidsconf@gmail.com</Button>
        </div>
      </div>
    </Section>
  )
}

function Meetups() {
  return (
    <Section id="meetups" wide route="/community" title="Backed by your favourite meetups and organisations">
      <ul className="tm-meetups">
        {meetups.map((meetup) => (
          <li key={meetup.name}>
            <img src={meetup.image} alt={meetup.name} title={meetup.name} loading="lazy" />
          </li>
        ))}
        <li className="tm-meetups-more">... and more</li>
      </ul>
    </Section>
  )
}

export default function Home() {
  return (
    <Layout
      title="TechMids Conf - Birmingham's community-driven tech conference"
      description={`TechMids Conf is an all day, full stack conference on ${EVENT.date} Come along for a day of inspiring talks, social chatter and fun.`}
    >
      <Hero />
      <Tickets />
      {AVAILABLE_INFORMATION.speakersAvailable && <Speakers />}
      {AVAILABLE_INFORMATION.scheduleAvailable && <DayOutline />}
      <Gallery />
      <Testimonials />
      <Sponsors />
      <Meetups />
    </Layout>
  )
}
