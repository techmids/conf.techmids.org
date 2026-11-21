// Runs after `next build` against the static export in out/.
//
// 1. Archived sites in out/past/ (see link-to-the-past/) get a robots noindex
//    tag, so old editions don't compete with the current site in search results.
// 2. sitemap.xml is generated from every exported page that isn't archived,
//    a 404 page or marked noindex, so new pages (and every /speakers/[speaker]
//    page) are listed automatically. URLs match the canonical tags from
//    src/components/PageMeta.jsx.
// 3. The site was previewed at /new before it went live. Those links were
//    shared around, so each one now forwards to the same page at the root.

import fs from 'fs/promises'
import path from 'path'

const SITE_URL = 'https://conf.techmids.org'
const OUT_DIR = path.resolve(process.argv[2] ?? 'out')
const NOINDEX_PATTERN = /<meta[^>]+name="robots"[^>]+content="[^"]*noindex/i

async function htmlFiles(dir) {
    const entries = await fs.readdir(dir, {withFileTypes: true, recursive: true})
    return entries
        .filter((entry) => entry.isFile() && entry.name.endsWith('.html'))
        .map((entry) => path.join(entry.parentPath ?? entry.path, entry.name))
}

function urlFor(relativeFile) {
    const route = relativeFile
        .split(path.sep).join('/')
        .replace(/\.html$/, '')
        .replace(/(^|\/)index$/, '')
    return route ? `${SITE_URL}/${route}` : `${SITE_URL}/`
}

async function writeSitemap() {
    const urls = []
    for (const file of await htmlFiles(OUT_DIR)) {
        const relative = path.relative(OUT_DIR, file)
        if (relative.startsWith(`past${path.sep}`) || /^(404|500)\.html$/.test(relative)) continue
        if (NOINDEX_PATTERN.test(await fs.readFile(file, 'utf8'))) continue
        urls.push(urlFor(relative))
    }
    urls.sort((a, b) => (a === `${SITE_URL}/` ? -1 : b === `${SITE_URL}/` ? 1 : a.localeCompare(b)))

    const xml = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
        ...urls.map((url) => `  <url><loc>${url}</loc></url>`),
        '</urlset>',
        '',
    ].join('\n')
    await fs.writeFile(path.join(OUT_DIR, 'sitemap.xml'), xml)
    console.log(`postbuild: wrote sitemap.xml with ${urls.length} URLs`)
}

// Forward the old preview URLs (/new, /new/schedule, /new/speakers/x ...) to the live pages.
// GitHub Pages has no server redirects, so each one is a tiny noindex page that sends the browser on.
// Written before the sitemap, which skips them because they are noindex.
async function writePreviewRedirects() {
    const routes = ['/']
    for (const file of await htmlFiles(OUT_DIR)) {
        const relative = path.relative(OUT_DIR, file).split(path.sep).join('/')
        if (/^(past|sharing|new)\//.test(relative) || /^(404|500|index|new|flyer|feedback)\.html$/.test(relative)) continue
        routes.push(`/${relative.replace(/\.html$/, '').replace(/\/index$/, '')}`)
    }
    const page = (target) => `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>TechMids Conf</title>` +
        `<meta name="robots" content="noindex"><link rel="canonical" href="${SITE_URL}${target}">` +
        `<meta http-equiv="refresh" content="0; url=${target}">` +
        `<script>location.replace(${JSON.stringify(target)} + location.search + location.hash)</script>` +
        `</head><body><p><a href="${target}">TechMids Conf has moved here</a></p></body></html>\n`
    for (const route of routes) {
        const file = path.join(OUT_DIR, 'new', route === '/' ? 'index.html' : `${route.slice(1)}.html`)
        await fs.mkdir(path.dirname(file), {recursive: true})
        await fs.writeFile(file, page(route))
    }
    await fs.writeFile(path.join(OUT_DIR, 'new.html'), page('/'))
    console.log(`postbuild: wrote ${routes.length} redirects from /new`)
}

await writePreviewRedirects()
await writeSitemap()
