import 'focus-visible'
import '@/styles/tailwind.css'
// Site styles. Every rule is scoped to .tm-site; Tailwind stays for the few older pages (flyer, feedback, sharing).
import '@/new/tokens.css'
import '@/new/site.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
