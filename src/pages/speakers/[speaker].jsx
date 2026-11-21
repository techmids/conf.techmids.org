import Link from 'next/link'
import { Layout } from '@/new/Layout'
import { Arrow, Badge, Button, Eyebrow } from '@/new/ui'
import { findTalk, href, shortDate } from '@/new/data'
import { usePicks } from '@/new/usePicks'
import { SOCIALS } from '@/components/Speaker'
import { Sessions } from '../../../speakers'

export default function SpeakerPage({ speakerId }) {
  const speaker = Sessions[speakerId]
  const talk = findTalk(speakerId)
  const { picks, toggle } = usePicks()
  const picked = talk ? picks.includes(talk.option.id) : false
  const socials = Object.keys(speaker).filter((key) => SOCIALS[key] && speaker[key])
  const card = speaker.speakerCard
    ? `https://conf.techmids.org/speakers/card/${speaker.name}.png`
    : 'https://conf.techmids.org/launch.jpg'

  return (
    <Layout
      path={`/speakers/${speakerId}`}
      current="Speakers"
      title={`TechMids Conf Speaker - ${speaker.name}`}
      description={speaker.talkTitle}
      image={card}
    >
      <article className="tm-wrap tm-profile">
        <p className="tm-back">
          <Link className="tm-link" href={href('/speakers')}>
            ← All speakers
          </Link>
        </p>
        <header className="tm-profile-head">
          <div className="tm-profile-photo">
            <div className="tm-profile-block" aria-hidden="true" />
            <img src={speaker.image.src} alt={`Portrait of ${speaker.name}`} />
          </div>
          <div>
            <Eyebrow route="/speakers">{speaker.sessionType}</Eyebrow>
            <h1 className="tm-h1 tm-h1-page">{speaker.name}</h1>
            <p className="tm-lede">{speaker.jobTitle}</p>
            {speaker.bio && <div className="tm-prose">{speaker.bio}</div>}
            {socials.length > 0 && (
              <ul className="tm-socials">
                {socials.map((key) => {
                  const { label, url, Icon } = SOCIALS[key]
                  return (
                    <li key={key}>
                      <a href={url(speaker[key])} rel="noreferrer noopener" target="_blank">
                        <Icon width={18} height={18} />
                        <span>{label}</span>
                      </a>
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
        </header>

        <section className="tm-talkpanel">
          <div className="tm-talkpanel-meta">
            <Badge solid>{speaker.sessionType}</Badge>
            {talk && (
              <p className="tm-mono">
                {shortDate()} · {talk.row.start}–{talk.row.end} ·{' '}
                <i className={`tm-dot tm-dot-${talk.option.room.id}`} aria-hidden="true" />
                {talk.option.room.label}
              </p>
            )}
          </div>
          <h2 className="tm-h2">{speaker.talkTitle}</h2>
          <div className="tm-prose">{speaker.description}</div>
          <div className="tm-actions">
            {talk && toggle && (
              <Button variant={picked ? 'secondary' : 'primary'} aria-pressed={picked} onClick={() => toggle(talk.row, talk.option.id)}>
                {picked ? '✓ In my day' : '+ Add to my day'}
              </Button>
            )}
            <Button href={href('/schedule')} variant="ghost">
              See the schedule <Arrow />
            </Button>
          </div>
        </section>
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  return { paths: Object.keys(Sessions).map((speaker) => ({ params: { speaker } })), fallback: false }
}

export async function getStaticProps({ params }) {
  return { props: { speakerId: params.speaker } }
}
