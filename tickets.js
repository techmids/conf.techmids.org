// To resync from https://checkout.tito.io/tech-events-birmingham/techmids-conf-2026.json
// The fields map onto event.releases[] in that response.


export const TICKETS = {
    lastChecked: '2026-10-14',
    currency: 'GBP',
    includes: [
        'Full access to the event - a full-day conference with multiple tracks of speakers',
        'Lunch and refreshments',
        'Access to the post-event social',
    ],
    releases: [
        {
            title: 'Early Bird',
            slug: 'early-bird',
            price: 50,
            onSaleFrom: '2026-06-02T12:00:00Z',
            onSaleUntil: '2026-08-31T12:00:00Z',
            maxPerPerson: 10,
        },
        {
            title: 'Standard Bird',
            slug: 'standard-bird',
            price: 75,
            // Price each when buying 1, 2, 3+ tickets in one order
            groupPrices: [75, 72.5, 70],
            onSaleFrom: '2026-09-01T12:00:00Z',
            onSaleUntil: '2026-10-16T12:00:00Z',
        },
        {
            title: 'Self-funded Bird',
            slug: 'self-funded-bird',
            price: 50,
            // Price each when buying 1, 2, 3, 4, 5+ tickets in one order
            groupPrices: [50, 47.5, 45, 42.5, 40],
            onSaleFrom: '2026-06-02T12:00:00Z',
            onSaleUntil: '2026-11-26T12:00:00Z',
            description: "For people attending off their own back, not buying on behalf of a company. Group orders get up to 20% off.",
        },
        {
            title: 'Student',
            slug: 'student',
            price: 20,
            onSaleFrom: '2026-06-02T12:00:00Z',
            onSaleUntil: '2026-11-26T12:00:00Z',
            description: "Student ID is checked on the door.",
        },
    ],
}

// Releases on sale now or later, as of the given time (build time, for a static export)
export function unexpiredReleases(now = new Date()) {
    return TICKETS.releases.filter((release) => now < new Date(release.onSaleUntil))
}
