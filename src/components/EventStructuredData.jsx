import Head from 'next/head'
import {EVENT, AVAILABLE_INFORMATION} from "../../event";
import {Sessions} from "../../speakers";
import {TICKETS, unexpiredReleases} from "../../tickets";
import {SITE_URL, canonicalUrl} from "@/components/PageMeta";

// Turns schedule times like "08:30AM" or "17:15PM" into "08:30"
function to24Hour(time) {
    const [, h, m, meridiem] = time.match(/(\d{1,2}):(\d{2})\s*(AM|PM)?/i)
    let hour = Number(h)
    if (meridiem?.toUpperCase() === 'PM' && hour < 12) hour += 12
    if (meridiem?.toUpperCase() === 'AM' && hour === 12) hour = 0
    return `${String(hour).padStart(2, '0')}:${m}`
}

// UK local time: GMT in winter, BST between the last Sundays of March and October
function ukOffset(isoDate) {
    const [year] = isoDate.split('-').map(Number)
    const lastSunday = (month) => {
        const d = new Date(Date.UTC(year, month + 1, 0))
        return new Date(Date.UTC(year, month, d.getUTCDate() - d.getUTCDay()))
    }
    const day = new Date(`${isoDate}T12:00:00Z`)
    return day >= lastSunday(2) && day < lastSunday(9) ? '+01:00' : '+00:00'
}

export function EventStructuredData() {
    if (EVENT.dateTbc) return null

    const data = {
        '@context': 'https://schema.org',
        '@type': 'Event',
        name: EVENT.edition,
        description: `TechMids Conf is Birmingham's community-driven, all day, full stack tech conference on ${EVENT.date}.`,
        url: canonicalUrl('/'),
        image: [`${SITE_URL}/launch.jpg`],
        // Until the schedule is published only the day is given
        startDate: EVENT.isoDate,
        endDate: EVENT.isoDate,
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        // Until the venue is announced only the city is given
        location: {
            '@type': 'Place',
            name: 'Birmingham',
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Birmingham',
                addressCountry: 'GB',
            },
        },
        organizer: {
            '@type': 'Organization',
            name: 'TechMids',
            url: 'https://techmids.org',
        },
    }

    // Start and end times come from the schedule
    if (AVAILABLE_INFORMATION.scheduleAvailable) {
        const offset = ukOffset(EVENT.isoDate)
        data.startDate = `${EVENT.isoDate}T${to24Hour(EVENT.startTime)}:00${offset}`
        data.endDate = `${EVENT.isoDate}T${to24Hour(EVENT.endTime)}:00${offset}`
    }

    // Capacity is listed with the venue, as on the site (see VenueInfo)
    if (AVAILABLE_INFORMATION.locationAvailable) {
        data.location = {
            ...data.location,
            name: `${EVENT.venue}, ${EVENT.address}`,
            address: {
                ...data.location.address,
                streetAddress: EVENT.streetAddress,
                postalCode: EVENT.postalCode,
            },
        }
        data.maximumAttendeeCapacity = EVENT.capacity
    }

    if (EVENT.onSale || EVENT.soldOut) {
        data.offers = unexpiredReleases().map((release) => ({
            '@type': 'Offer',
            name: release.title,
            url: EVENT.ticketLink,
            price: release.price.toFixed(2),
            priceCurrency: TICKETS.currency,
            validFrom: release.onSaleFrom,
            validThrough: release.onSaleUntil,
            availability: EVENT.soldOut ? 'https://schema.org/SoldOut' : 'https://schema.org/InStock',
        }))
    }

    if (AVAILABLE_INFORMATION.speakersAvailable) {
        data.performer = Object.entries(Sessions).map(([key, speaker]) => ({
            '@type': 'Person',
            name: speaker.name,
            url: canonicalUrl(`/speakers/${key}`),
        }))
    }

    return (
        <Head>
            <script
                key="event-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(data)}}
            />
        </Head>
    )
}
