import { OVERALL_END, OVERALL_START} from "schedule"

export const EVENT = {
    date: 'Friday 14th November 2025',
    title: 'TechMids Conf',
    venue: 'Everyman Cinema',
    address: 'Mailbox, Birmingham',
    startTime: OVERALL_START,
    endTime: OVERALL_END,
    ticketLink: 'https://ti.to/tech-events-birmingham/techmids-conf-2025',
    onSale: true, //swap to true to embed ticket widget
    soldOut: false,
    titoId: 'tech-events-birmingham/techmids-conf-2025',
    CFPLink: "https://www.papercall.io/techmids-conf-2025",
    CFPOpen: true,
    speakersTBC: true,
    capacity: 250,
    tagline: "",
}

//  Marks what information is available on the website
export const AVAILABLE_INFORMATION = {
    scheduleAvailable: true,
    locationAvailable: true, 
    speakersAvailable: true,
    sponsorsAvailable: true,
}

export const sponsorTiers = {
    headline: {
        name: "Headline Sponsor",
        sponsors: [
            {
                name: "Amazon Web Services",
                image: "/sponsors/AWS.svg",
                url: "https://aws.amazon.com/"
            }
        ]
    },
    silver: {
        name: "Silver Sponsors",
        sponsors: [
            {
                name: "AdvancedOne",
                image: "/sponsors/OneAdvanced.png",
                url: "https://www.oneadvanced.com/"
            }
        ]
    },
    bronze: {
        name: "Bronze Sponsors",
        sponsors: [
            {
                name: "Bluetel",
                image: "/sponsors/Bluetel.png",
                url: "https://www.bluetel.co.uk/"
            },
            {
                name: "Spinks",
                image: "/sponsors/Spinks.png",
                url: "https://www.wearespinks.com/"
            }
        ]
    },
}
