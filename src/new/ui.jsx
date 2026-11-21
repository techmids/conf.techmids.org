// The small set of brand components the rebuilt site is made from.
// They only use classes from site.css, which only reads tokens from tokens.css,
// so this folder can be lifted into a shared package later without changes.

import Link from 'next/link'

const isExternal = (url = '') => /^(https?:|mailto:)/.test(url)

// The TechMids wordmark. Artwork unchanged from src/components/Logo.jsx; colour follows `color`.
export function Wordmark({ title = 'TechMids', ...props }) {
  return (
    <svg viewBox="0 0 295.32 152.71" role="img" aria-label={title} fill="currentColor" {...props}>
      <path d="M31.75,12.78,23.34,65.63H9.57L18,12.78H0L1.79,1.24H51.6L49.81,12.78Z" />
      <path d="M62.51,65.63,72.7,1.25h41.4l-1.79,11.54H84.68L82.35,27.45h23.43L104,38.54H80.56L78.06,54.1h29l-1.79,11.53Z" />
      <path d="M184.83,17.07a34.48,34.48,0,0,0-17.08-4.47c-14.49,0-24.86,11.09-24.86,23.88,0,9.93,6.53,17.79,17.79,17.79a45.54,45.54,0,0,0,19.4-4.47L178,62.59a48.83,48.83,0,0,1-20.3,4.29c-17.44,0-28.79-12.43-28.79-28.79C128.93,17.17,146.81,0,168.72,0c9,0,15.11,2.68,18.06,4.47Z" />
      <path d="M240.81,65.63l4.29-26.91H218.54l-4.29,26.91H200.48L210.67,1.25h13.77l-4.11,26h26.56l4.11-26h13.77L254.58,65.63Z" />
      <path d="M65,106.93l-1.34-2.5c-.27,2.06-.63,4-.89,6l-6.53,41.22H49.6L60,86.19h.09l22.62,37.56,34.61-37.56h.09L107,151.64h-6.62l6.53-41.22c.27-2,.63-3.93,1.07-6-1.16,1.43-2.86,3.31-4.29,5L81.17,133.67Z" />
      <path d="M138.3,151.64l10.19-64.38h6.8L145.1,151.64Z" />
      <path d="M176.4,151.64l10.19-64.38h17.79c17.26,0,29.33,10.55,29.33,27.45,0,22.35-18,36.93-39.17,36.93ZM192.49,93l-8.41,52.94h11.36c16.9,0,31.21-12.16,31.21-30.49,0-13.68-9.39-22.44-23.25-22.44H192.49Z" />
      <path d="M249.81,148.87l1.07-6.8a37.46,37.46,0,0,0,17.17,4.47c9.12,0,16.63-4.29,16.63-12.16,0-5.28-3.4-8.67-12.79-12.16-10.55-4-15.29-9-15.29-16.63,0-12.43,10.91-19.4,23.61-19.4a36.07,36.07,0,0,1,15.11,3.31l-1.07,6.62a32.65,32.65,0,0,0-14.75-3.76c-8.94,0-16,4.56-16,12,0,4.83,3,8.67,12.61,12.34,10.64,4,15.47,8.76,15.47,16.45,0,12.25-10.19,19.58-24.14,19.58A41.67,41.67,0,0,1,249.81,148.87Z" />
    </svg>
  )
}

// The yellow Block logo, optionally with a tilted Tag ("Conf" / "2026").
export function BlockLogo({ tag, tagLine, className = '' }) {
  return (
    <span className={`tm-lockup ${className}`}>
      <span className="tm-block">
        <Wordmark />
      </span>
      {tag && (
        <span className="tm-tag">
          {tag}
          {tagLine && <span className="tm-tag-line">{tagLine}</span>}
        </span>
      )}
    </span>
  )
}

export function Tag({ children, className = '' }) {
  return <span className={`tm-tag ${className}`}>{children}</span>
}

// Link or button, depending on whether it has an href.
export function Button({ href, variant = 'primary', size, className = '', children, ...props }) {
  const classes = `tm-btn tm-btn-${variant}${size ? ` tm-btn-${size}` : ''} ${className}`
  if (!href) {
    return (
      <button type="button" className={classes} {...props}>
        {children}
      </button>
    )
  }
  if (isExternal(href)) {
    return (
      <a href={href} className={classes} rel="noopener" target="_blank" {...props}>
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  )
}

export function Badge({ tone, solid, children }) {
  return (
    <span className={`tm-badge${solid ? ' tm-badge-solid' : ''}${tone ? ` tm-badge-${tone}` : ''}`}>
      {tone && <i aria-hidden="true" />}
      {children}
    </span>
  )
}

// Mono caption above a heading: a route-style chip plus a short label.
export function Eyebrow({ route, children }) {
  return (
    <p className="tm-eyebrow">
      {route && <span className="tm-eyebrow-route">{route}</span>}
      {children && <span>{children}</span>}
    </p>
  )
}

export function Section({ id, route, label, title, lede, tone, wide, children, className = '' }) {
  return (
    <section id={id} className={`tm-section${tone ? ` tm-section-${tone}` : ''} ${className}`}>
      <div className={`tm-wrap${wide ? ' tm-wrap-wide' : ''}`}>
        {(title || route) && (
          <header className="tm-section-head">
            {(route || label) && <Eyebrow route={route}>{label}</Eyebrow>}
            {title && <h2 className="tm-h2">{title}</h2>}
            {lede && <p className="tm-lede">{lede}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  )
}

export const Arrow = () => (
  <span className="tm-arrow" aria-hidden="true">
    →
  </span>
)
