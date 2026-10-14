import Head from 'next/head'

export const SITE_URL = 'https://conf.techmids.org'

// Canonical URL for a route. The homepage is "/" and every other page has no
// trailing slash, matching the URLs that scripts/postbuild.mjs puts in the sitemap.
export function canonicalUrl(path = '/') {
    return path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`
}

export function PageMeta({path, title, description, image = `${SITE_URL}/launch.jpg`, noindex = false}) {
    const url = canonicalUrl(path)
    return (
        <Head>
            {title && <title>{title}</title>}
            {description && <meta key="description" name="description" content={description}/>}
            {noindex && <meta key="robots" name="robots" content="noindex"/>}
            <link key="canonical" rel="canonical" href={url}/>
            <meta key="og:site_name" property="og:site_name" content="TechMids Conf"/>
            <meta key="og:type" property="og:type" content="website"/>
            <meta key="og:url" property="og:url" content={url}/>
            {title && <meta key="og:title" property="og:title" content={title}/>}
            {description && <meta key="og:description" property="og:description" content={description}/>}
            <meta key="og:image" property="og:image" content={image}/>
        </Head>
    )
}
