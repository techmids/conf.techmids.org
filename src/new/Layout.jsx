import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { PageMeta } from '@/components/PageMeta'
import { EVENT, AVAILABLE_INFORMATION } from '../../event'
import { BASE, href, shortDate } from './data'
import { BlockLogo, Button, Wordmark } from './ui'

const FONTS =
  'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,600;12..96,700;12..96,800&family=Martian+Mono:wght@400;500;600&display=swap'

// Uses the same html.dark class and localStorage key as the current site, so the
// choice carries between the two. The class is set before paint by _document.jsx.
function ThemeToggle() {
  const [dark, setDark] = useState(false)
  useEffect(() => {
    const root = document.documentElement
    setDark(root.classList.contains('dark'))
    const device = window.matchMedia('(prefers-color-scheme: dark)')
    const followDevice = (event) => {
      let saved = null
      try {
        saved = window.localStorage.getItem('theme')
      } catch {
        // No storage: keep following the device
      }
      if (saved) return
      root.classList.toggle('dark', event.matches)
      setDark(event.matches)
    }
    device.addEventListener?.('change', followDevice)
    return () => device.removeEventListener?.('change', followDevice)
  }, [])

  const toggle = () => {
    const next = !document.documentElement.classList.contains('dark')
    document.documentElement.classList.toggle('dark', next)
    setDark(next)
    try {
      window.localStorage.setItem('theme', next ? 'dark' : 'light')
    } catch {
      // Private browsing or storage full: the choice lasts until the page closes
    }
  }

  return (
    <button type="button" className="tm-theme" aria-pressed={dark} onClick={toggle}>
      <span className="tm-theme-light">Light</span>
      <span className="tm-theme-dark">Dark</span>
      <span className="tm-sr">Use dark mode</span>
    </button>
  )
}

function Header({ current }) {
  const links = [
    AVAILABLE_INFORMATION.scheduleAvailable && ['Schedule', href('/schedule')],
    AVAILABLE_INFORMATION.speakersAvailable && ['Speakers', href('/speakers')],
    ['Tickets', `${href()}#tickets`],
    ['Sponsors', `${href()}#sponsors`],
    ['Convince your boss', href('/how-to-convince-your-boss')],
  ].filter(Boolean)

  return (
    <header className="tm-header">
      <div className="tm-wrap tm-wrap-wide tm-header-row">
        <Link href={href()} className="tm-header-brand" aria-label={`${EVENT.edition} home`}>
          <Wordmark />
          <span className="tm-header-meta">
            <b>Conf {EVENT.year}</b>
            {!EVENT.dateTbc && <time dateTime={EVENT.isoDate}>{shortDate()}</time>}
          </span>
        </Link>
        <nav className="tm-nav" aria-label="Main">
          {links.map(([label, to]) => (
            <Link key={label} href={to} aria-current={current === label ? 'page' : undefined}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="tm-header-tools">
          <ThemeToggle />
          {EVENT.onSale && (
            <Button href={EVENT.ticketLink} size="sm">
              Get a ticket
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="tm-footer">
      <div className="tm-wrap tm-wrap-wide tm-footer-row">
        <Link href={href()} aria-label={`${EVENT.edition} home`}>
          <BlockLogo tag="Conf" tagLine={EVENT.year} className="tm-footer-logo" />
        </Link>
        <nav className="tm-footer-nav" aria-label="Footer">
          <Link href={href('/schedule')}>Schedule</Link>
          <Link href={href('/speakers')}>Speakers</Link>
          <Link href={href('/how-to-convince-your-boss')}>How to convince your boss</Link>
          <Link href={href('/code-of-conduct')}>Code of Conduct</Link>
          <Link href={href('/past-events')}>Past events</Link>
        </nav>
        <div className="tm-footer-meta">
          <p>
            Event organised by <a href="https://techmids.org/">TechMids</a>
          </p>
          <p>Copyright &copy; {new Date().getFullYear()} Tech Mids conf. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

// Every rebuilt page goes through this: brand fonts, noindex while it lives at /new, header and footer.
export function Layout({ path = '', title, description, image, current, children }) {
  const preview = BASE !== ''
  return (
    <div className="tm-site">
      <PageMeta
        path={`${BASE}${path}` || '/'}
        title={title}
        description={description}
        image={image}
        noindex={preview}
      />
      <Head>
        {/* Belt and braces while this is a preview: no indexing, and don't follow its links */}
        {preview && <meta key="robots" name="robots" content="noindex, nofollow" />}
        <link key="tm-fonts" rel="stylesheet" href={FONTS} />
      </Head>
      <a className="tm-skip" href="#main">
        Skip to content
      </a>
      {preview && (
        <p className="tm-preview" role="note">
          <span className="tm-badge tm-badge-solid">Preview</span>
          <span>
            A proposed redesign, not public yet. <a href="/">See the current site</a>
          </span>
        </p>
      )}
      <Header current={current} />
      <main id="main">{children}</main>
      <Footer />
    </div>
  )
}
