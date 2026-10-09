import { OVERALL_END, OVERALL_START} from "schedule"

export const EVENT = {
    date: '27th November 2026',
    dateTbc: false,
    title: 'TechMids Conf',
    year: '2026',
    venue: 'Everyman Cinema',
    address: 'Mailbox, Birmingham',
    startTime: OVERALL_START,
    endTime: OVERALL_END,
    ticketLink: 'https://ti.to/tech-events-birmingham/techmids-conf-2026',
    onSale: true, //swap to true to embed ticket widget
    soldOut: false,
    titoId: 'tech-events-birmingham/techmids-conf-2026',
    CFPLink: "https://forms.gle/mhQxq1BuJFiqzxS6A",
    CFPOpen: false,
    speakersTBC: true,
    capacity: 250,
    tagline: "",
    get edition() {
    return `${this.title} ${this.year}`;
  }
}

//  Marks what information is available on the website
export const AVAILABLE_INFORMATION = {
    scheduleAvailable: false,
    locationAvailable: true, 
    speakersAvailable: true,
    sponsorsAvailable: true,
}

export const sponsorTiers = {
    headline: {
        name: "Headline Sponsor",
        sponsors: [
            {
                name: "Goldman Sachs",
                image: "/sponsors/GoldmanSachs.png",
                url: "https://www.goldmansachs.com/"
            }
        ]
    },
    silver: {
        name: "Silver Sponsors",
        sponsors: []
    },
    bronze: {
        name: "Bronze Sponsors",
        sponsors: []
    },
}
