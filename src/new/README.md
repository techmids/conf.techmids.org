# The conference site

A ground-up rebuild of the conference site using the [TechMids brand guide](https://techmids.github.io/branding/).
It was previewed at `/new` and went live at the root in November 2026. Old `/new/...` links forward to the live
pages (see `scripts/postbuild.mjs`).

- **Content is shared, not copied.** Pages read `event.js`, `schedule.js`, `speakers.js` and `tickets.js`, plus the
  meetup, gallery, testimonial and past-event lists exported from `src/components`. Update content in those files.
- **Picks carry over.** The schedule keeps the browser storage key and share-link format of the previous site.

| File | What it is |
| --- | --- |
| `tokens.css` | Brand tokens, scoped to `.tm-site`. Copy of `assets/techmids-tokens.css` in techmids/branding |
| `site.css` | All styles. Classes are prefixed `tm-`, written phone first |
| `ui.jsx` | Brand components: Wordmark, BlockLogo, Tag, Button, Badge, Eyebrow, Section |
| `Layout.jsx` | Page shell: meta, header, footer, theme toggle |
| `ScheduleBoard.jsx` | The three-track schedule and "My day" |
| `data.js`, `usePicks.js` | Helpers over the content files; picks and the on-the-day clock |

Pages live in `src/pages/`. `flyer`, `feedback` and `sharing` are older pages that still use the Tailwind
components in `src/components`.


## Previewing a future redesign

Set `BASE` in `data.js` to a sub-path such as `/next` and put the pages under `src/pages/next/`. Every page is then
`noindex, nofollow`, shows a preview strip and is left out of `sitemap.xml`.
