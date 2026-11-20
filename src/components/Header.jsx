import { ButtonLink } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import {EVENT, AVAILABLE_INFORMATION} from "../../event";

// Follows the device setting until the toggle is used; after that the choice is kept on this device.
// The class itself is set before paint by the script in _document.jsx.
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

  // Pressed styling comes from the dark class, not state, so it is right before React loads
  return (
    <button
      type="button"
      aria-pressed={dark}
      onClick={toggle}
      className="inline-flex items-center gap-1.5 rounded-full border border-brand-600/60 px-3 py-0.5 hover:border-brand-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 dark:border-brand-500 dark:bg-brand-500 dark:text-black"
    >
      <svg aria-hidden="true" viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-current">
        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
      </svg>
      Dark mode
    </button>
  )
}

export function Header() {
  return (
    <header className="relative z-50 pb-11 lg:pt-11 bg-techmids-black">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
          <a href="/">
            <Logo className="h-12 w-auto" />
          </a>
        </div>
        <div className="order-first -mx-4 flex flex-auto basis-full overflow-x-auto whitespace-nowrap border-b border-brand-600/40 py-4 font-mono text-sm text-brand-500 sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
          <div className="mx-auto flex flex-col items-center space-x-4 px-4 sm:flex-row">
            <p>
              <time>{EVENT.date}</time>
            </p>
            <svg
              aria-hidden="true"
              className="invisible h-1.5 w-1.5 overflow-visible fill-current stroke-current sm:visible"
            >
              <path
                d="M3 0L6 3L3 6L0 3Z"
                strokeWidth={2}
                strokeLinejoin="round"
              />
            </svg>
            <p>Tech Mids</p>
          </div>
        </div>
        <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
          {EVENT.onSale ? (
          <ButtonLink
            href={EVENT.ticketLink}
            rel="noopener"
            target="_blank"
          >
            Get your ticket now
          </ButtonLink>
            ) : null}
        </div>
      </Container>
      <nav aria-label="Main" className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 px-4 font-mono text-sm text-brand-500">
        {AVAILABLE_INFORMATION.scheduleAvailable && (
          <Link href="/schedule" className="underline-offset-4 hover:underline">Schedule</Link>
        )}
        {AVAILABLE_INFORMATION.speakersAvailable && (
          <Link href="/speakers" className="underline-offset-4 hover:underline">Speakers</Link>
        )}
        <ThemeToggle />
      </nav>
    </header>
  )
}
