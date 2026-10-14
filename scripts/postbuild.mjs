// Runs after `next build` against the static export in out/.
//
// 1. Archived sites in out/past/ (see link-to-the-past/) get a robots noindex
//    tag, so old editions don't compete with the current site in search results.
// 2. sitemap.xml is generated from every exported page that isn't archived,
//    a 404 page or marked noindex, so new pages (and every /speakers/[speaker]
//    page) are listed automatically. URLs match the canonical tags from
//    src/components/PageMeta.jsx.

import fs from 'fs/promises'
import path from 'path'

const SITE_URL = 'https://conf.techmids.org'
const OUT_DIR = path.resolve(process.argv[2] ?? 'out')
const NOINDEX_TAG = '<meta name="robots" content="noindex"/>'
const NOINDEX_PATTERN = /<meta[^>]+name="robots"[^>]+content="[^"]*noindex/i

async function htmlFiles(dir) {
    const entries = await fs.readdir(dir, {withFileTypes: true, recursive: true})
    return entries
        .filter((entry) => entry.isFile() && entry.name.endsWith('.html'))
        .map((entry) => path.join(entry.parentPath ?? entry.path, entry.name))
}

async function noindexArchives() {
    const pastDir = path.join(OUT_DIR, 'past')
    let count = 0
    for (const file of await htmlFiles(pastDir).catch(() => [])) {
        const html = await fs.readFile(file, 'utf8')
        if (NOINDEX_PATTERN.test(html)) continue
        await fs.writeFile(file, html.replace(/<head([^>]*)>/i, `<head$1>${NOINDEX_TAG}`))
        count++
    }
    console.log(`postbuild: added noindex to ${count} archived pages`)
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
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
        ...urls.map((url) => `  <url><loc>${url}</loc></url>`),
        '</urlset>',
        '',
    ].join('\n')
    await fs.writeFile(path.join(OUT_DIR, 'sitemap.xml'), xml)
    console.log(`postbuild: wrote sitemap.xml with ${urls.length} URLs`)
}

await noindexArchives()
await writeSitemap()
