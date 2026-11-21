import { Layout } from '@/new/Layout'
import { Arrow, Eyebrow } from '@/new/ui'
import { pastEventMetadata } from '@/components/PastEventsList'
import { EVENT } from '../../../event'

// Same source as the current /past-events page: every folder in public/past is an archived site.
export const getStaticProps = async () => {
  const fs = require('fs/promises')
  const path = require('path')
  let entries
  try {
    entries = await fs.readdir(path.join(process.cwd(), 'public', 'past'), { withFileTypes: true })
  } catch (e) {
    if (e.code === 'ENOENT') return { props: { pastEvents: [] } }
    throw e
  }
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const pastEvents = entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => {
      const [year, month] = entry.name.split('-')
      return {
        slug: entry.name,
        title: `${months[Number(month) - 1] || month} ${year}`,
        href: `/past/${entry.name}/index.html`,
      }
    })
    .sort((a, b) => b.slug.localeCompare(a.slug))
  return { props: { pastEvents } }
}

export default function PastEvents({ pastEvents }) {
  const events = pastEvents.map((event) => ({
    imageUrl: '/gallery/audience.jpg',
    ...event,
    ...(pastEventMetadata[event.slug] || {}),
  }))
  return (
    <Layout
      path="/past-events"
      title="Past events - TechMids Conf"
      description={`TechMids Conf is an all day, full stack conference on ${EVENT.date} Come along for a day of inspiring talks, social chatter and fun.`}
    >
      <section className="tm-pagehead">
        <div className="tm-wrap tm-wrap-wide">
          <Eyebrow route="/past-events">{events.length} editions</Eyebrow>
          <h1 className="tm-h1 tm-h1-page">Past events</h1>
          <p className="tm-lede">Every previous TechMids Conf site, kept as it was on the day.</p>
        </div>
      </section>
      <section className="tm-section tm-section-flush">
        <div className="tm-wrap tm-wrap-wide">
          <ul className="tm-past">
            {events.map((event) => (
              <li key={event.slug}>
                {/* Archived sites are plain HTML outside the app, so this is a normal link */}
                <a href={event.href} className="tm-card">
                  <img src={event.imageUrl} alt="" loading="lazy" />
                  <div className="tm-card-body">
                    {event.niceDate && <p className="tm-date">{event.niceDate}</p>}
                    <h2 className="tm-h3">{event.title}</h2>
                    <p className="tm-small">
                      Visit the archived site <Arrow />
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  )
}
