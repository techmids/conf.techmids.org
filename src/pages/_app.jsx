import 'focus-visible'
import '@/styles/tailwind.css'
// Styles for the rebuilt site under /new. Every rule is scoped to .tm-site.
import '@/new/tokens.css'
import '@/new/site.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
