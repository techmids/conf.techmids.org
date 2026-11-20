import { Head, Html, Main, NextScript } from 'next/document'

// Runs before the page paints, so the saved or device theme is in place from the first frame.
// The site is a static export: there is no server to render the right theme.
const themeScript = `(function(){try{var s=localStorage.getItem('theme');var d=s==='dark'||(s!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d)}catch(e){}})()`

import {Meta} from "next/dist/lib/metadata/generate/meta";
import Script from "next/script";

export default function Document() {
  return (
      <Html className="bg-white antialiased" lang="en">
          <Head>
              <script dangerouslySetInnerHTML={{ __html: themeScript }} />
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link
                  rel="preconnect"
                  href="https://fonts.gstatic.com"
                  crossOrigin="anonymous"
              />
              <link
                  rel="stylesheet"
                  href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=DM+Sans:wght@400;500;700&display=swap"
              />
          </Head>
          <body className="dark:bg-techmids-night dark:text-gray-100">
          <Main />
          <NextScript />
          <noscript
              dangerouslySetInnerHTML={{
                  __html: `<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PZHC3QJT"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>`,
              }}
          />
          </body>
      </Html>
  )
}
