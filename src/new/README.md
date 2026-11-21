# Rebuilt site (preview at /new)

A ground-up rebuild of the conference site using the [TechMids brand guide](https://techmids.github.io/branding/).
It is published alongside the current site at `/new` so it can be reviewed before anything changes for visitors.

- **Content is shared, not copied.** Pages read `event.js`, `schedule.js`, `speakers.js` and `tickets.js`, plus the
  meetup, gallery, testimonial and past-event lists exported from `src/components`. Update content once and both
  sites change.
- **Hidden from search.** Every page is `noindex, nofollow` and so is left out of `sitemap.xml`. `robots.txt` does
  not block `/new`, on purpose: a crawler has to be able to fetch a page to see its `noindex`.
- **Picks carry over.** The schedule uses the same browser storage key and share-link format as the current site.

| File | What it is |
| --- | --- |
| `tokens.css` | Brand tokens, scoped to `.tm-site`. Copy of `assets/techmids-tokens.css` in techmids/branding |
| `site.css` | All styles. Classes are prefixed `tm-`, written phone first |
| `ui.jsx` | Brand components: Wordmark, BlockLogo, Tag, Button, Badge, Eyebrow, Section |
| `Layout.jsx` | Page shell: meta, preview strip, header, footer, theme toggle |
| `ScheduleBoard.jsx` | The three-track schedule and "My day" |
| `data.js`, `usePicks.js` | Helpers over the content files; picks and the on-the-day clock |

Pages live in `src/pages/new/`.

## Going live

1. In `data.js` set `BASE` to `''`.
2. Move the files in `src/pages/new/` up to `src/pages/`, replacing the current pages.
3. Add the Google Tag Manager snippet and `EventStructuredData` from the current homepage to the new one.
4. Remove the `/new` alias step from `scripts/postbuild.mjs` and delete the old components that are no longer used.
