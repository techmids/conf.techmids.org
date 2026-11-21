import Link from 'next/link'
import { Layout } from '@/new/Layout'
import { Eyebrow } from '@/new/ui'
import { href, speakerList } from '@/new/data'
import { SpeakerCard } from '@/new/SpeakerCard'
import { EVENT } from '../../../../event'

export default function SpeakersPage() {
  const speakers = speakerList()
  return (
    <Layout path="/speakers" current="Speakers" title="TechMids Conf - Speakers" description="Our Speaker lineup">
      <section className="tm-pagehead">
        <div className="tm-wrap tm-wrap-wide">
          <Eyebrow route="/speakers">{speakers.length} announced</Eyebrow>
          <h1 className="tm-h1 tm-h1-page">Speakers</h1>
          <p className="tm-lede">
            Come away inspired from a day of talks from experts, ranging from front end engineering, to cloud
            platforms and operations, with everything in between.
          </p>
        </div>
      </section>
      <section className="tm-section tm-section-flush">
        <div className="tm-wrap tm-wrap-wide">
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
        </div>
      </section>
    </Layout>
  )
}
