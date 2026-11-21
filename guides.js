// Facts for the speaker pack, sponsor pack and volunteer guide at /guides.
//
// Everything about the event itself (date, venue, times, screens, tickets, this year's
// sponsors, the code of conduct) is read from event.js, schedule.js and tickets.js, so it
// never needs repeating here. This file only holds what those files don't say.
//
// A value of null means "not decided yet": the page shows a TBC marker in its place.
// Fill a value in and the marker goes away. Write values as plain sentences.

export const GUIDES = {
    // While false, the guides are noindex (so they stay out of search and the sitemap)
    // and aren't linked from the footer. Share the links directly until the TBCs are filled.
    published: false,

    // Taken from the sponsor section of the home page
    contactEmail: 'techmidsconf@gmail.com',

    speakers: {
        // Confirmed by the organisers: TechMids doesn't cover travel or accommodation
        travelCovered: false,
        // How a speaker books or joins a tech check, e.g. 'Reply to your speaker email to book a 15 minute slot on ...'
        techCheck: null,
        // When speakers should arrive and where they check in, e.g. 'By 08:30 at the registration desk'
        arrival: null,
        // How much of the 45 minute slot is the talk, and whether there's Q&A
        talkLength: null,
        // Whether talks are filmed or photographed, and what happens to the footage
        recording: null,
        // Whether speakers need a ticket, or are on the door list
        ticket: null,
        // Who to find on the day if something goes wrong
        dayContact: null,
    },

    sponsors: {
        // One entry per tier, in order. `price` and `includes` are null until decided.
        // The tier names match event.js.
        tiers: [
            { key: 'headline', name: 'Headline', price: null, includes: null, available: null },
            { key: 'gold', name: 'Gold', price: null, includes: null, available: null },
            { key: 'silver', name: 'Silver', price: null, includes: null, available: null },
            { key: 'bronze', name: 'Bronze', price: null, includes: null, available: null },
        ],
        // Extras that can be bought on their own (lanyards, coffee, the social...). [] if none.
        addOns: null,
        // How many passes each tier gets for stand staff, or a single sentence covering it
        staffPasses: null,
        // Stand size, table, chairs, power
        stand: null,
        // When sponsors can set up and must pack down
        setup: null,
        // Whether deliveries can be sent to the venue, and how to label them
        deliveries: null,
        // Booking, payment and logo deadlines
        deadlines: null,
        // Audience numbers you're happy to share (past attendance, job roles, social reach)
        audience: null,
    },

    volunteers: {
        // What time volunteers arrive, and when the briefing is
        arrival: null,
        // Who leads volunteers on the day, and how to reach them
        lead: null,
        // First aid and safeguarding contacts on the day
        firstAid: null,
        // Who handles code of conduct reports on the day
        conductContact: null,
        // How volunteers get their TechMids t-shirt
        tshirt: null,
        // Breaks, food and drink for volunteers
        food: null,
        // What volunteers get (ticket, talks they can watch, the social...)
        perks: null,
        // How to sign up as a volunteer
        signUp: null,
    },
}
