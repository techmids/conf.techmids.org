import Link from 'next/link'
import { PageMeta } from '@/components/PageMeta'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Container } from '@/components/Container'
import { EVENT } from '../../../event'
import { GUIDES } from '../../../guides'

const GUIDE_CARDS = [
  ['speakers', 'Speaker pack', 'Your slot, tech checks, travel, promoting your talk and the day itself.'],
  ['sponsors', 'Sponsor pack', 'Who comes, packages, stands, deadlines and how to book.'],
  ['volunteers', 'Volunteer guide', 'The day, where help is needed, the code of conduct and who to call.'],
]

export default function Guides() {
  return (
    <>
      <PageMeta
        path="/guides"
        title={`Guides - ${EVENT.edition}`}
        description={`Speaker, sponsor and volunteer guides for ${EVENT.edition}.`}
        noindex={!GUIDES.published}
      />
      <Header />
      <main className="bg-white py-16 dark:bg-techmids-night sm:py-24">
        <Container>
          <p className="font-semibold uppercase tracking-wide text-brand-900 dark:text-brand-100">
            {EVENT.edition} · {EVENT.date}
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold tracking-tighter text-gray-900 dark:text-white sm:text-5xl">
            Guides
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-500 dark:text-gray-300">
            Everything you need to know if you&apos;re speaking, sponsoring or volunteering.
          </p>
          <ul className="mt-12 grid gap-6 sm:grid-cols-3">
            {GUIDE_CARDS.map(([slug, title, body]) => (
              <li key={slug}>
                <Link
                  href={`/guides/${slug}`}
                  className="group block h-full rounded-2xl bg-gray-50 p-6 ring-1 ring-gray-200 hover:ring-brand-500 dark:bg-techmids-coal dark:ring-gray-700"
                >
                  <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white">{title}</h2>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">{body}</p>
                  <p className="mt-4 font-semibold text-gray-900 underline decoration-brand-500 decoration-2 dark:text-white">
                    Read the guide →
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </main>
      <Footer />
    </>
  )
}
