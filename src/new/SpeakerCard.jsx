import Link from 'next/link'
import { href } from './data'
import { Badge } from './ui'

export function SpeakerCard({ speaker }) {
  const featured = speaker.sessionType === 'Keynote'
  return (
    <Link href={href(`/speakers/${speaker.id}`)} className={`tm-speaker${featured ? ' tm-speaker-featured' : ''}`}>
      <div className="tm-speaker-photo">
        <img src={speaker.image.src} alt="" loading="lazy" />
      </div>
      <h3>{speaker.name}</h3>
      <p>{speaker.jobTitle}</p>
      {speaker.sessionType && <Badge solid={featured}>{speaker.sessionType}</Badge>}
    </Link>
  )
}
