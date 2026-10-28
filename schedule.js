/* 
const openingWelcomeStart = '09:15AM'
const openingWelcomeEnd = '09:35AM'

const session1Start = '09:40AM'
const session1End = '10:00AM'

const session2Start = '10:05AM'
const session2End = '10:25AM'

const morningBreakStart = '10:25AM'
const morningBreakEnd = '10:55AM'

const session3Start = '11:00AM'
const session3End = '11:20AM'

const session4Start = '11:25AM'
const session4End = '11:45AM'

const lunchStart = '11:50AM'
const lunchEnd = '12:50PM'

const session5Start = '12:55PM'
const session5End = '13:15PM'

const session6Start = '13:20PM'
const session6End = '13:40PM'

const session7Start = '13:45PM'
const session7End = '14:05PM'

const afternoonBreakStart = '14:05PM'
const afternoonBreakEnd = '14:35PM'

const session8Start = '14:40PM'
const session8End = '15:00PM'

const session9Start = '15:05PM'
const session9End = '15:25PM'

const closingRemarksStart = '15:30PM'
const closingRemarksEnd = '15:50PM'

const conferenceSchedule = {
    room: "The ICC",
    timeOfDay: 'Overall Schedule',
    date: '2024-10-25',
    summary: '09:00 - 16:00 GMT',
    dayName: "Day 1",
    timeSlots: [
        {
            name: 'Registration',
            description: 'Registration',
            start: '08:00AM',
            end: '09:10AM',
        },
        {
            name: 'Event organisers',
            description: 'Opening Welcome',
            start: openingWelcomeStart,
            end: openingWelcomeEnd,
        },
        {
            name: 'Morning Sessions',
            description: 'Morning Sessions',
            start: session1Start,
            end: lunchStart,
        },
        {
            name: 'Lunch',
            description: 'Lunch',
            start: lunchStart,
            end: session5Start,
        },
        {
            name: 'Afternoon Sessions',
            description: 'Afternoon Sessions',
            start: session5Start,
            end: closingRemarksStart,
        },
        {
            name: 'Event organisers',
            description: 'Closing Remarks',
            start: closingRemarksStart,
            end: closingRemarksEnd,
        }
    ]
}


const mainHall = {
    room: "The Colosseum",
    timeOfDay: 'The Colosseum',
    date: '2024-10-25',
    summary: '09:00 - 16:00 GMT',
    dayName: "Day 1",
    timeSlots: [
        {
            name: 'Event organisers',
            description: 'Opening Welcome',
            start: openingWelcomeStart,
            end: openingWelcomeEnd,
        },
        {
            session: ['CarlyRichmond'],
            start: session1Start,
            end: session1End,
        },
        {
            session: ['MaxWoolf'],
            start: session2Start,
            end: session2End,
        },
        {
            name: 'Coffee, Snacks, Sponsors, Chat!',
            description: 'Morning Break',
            start: morningBreakStart,
            end: morningBreakEnd,
        },
        {
            session: ['RyanHardwick'],
            start: session3Start,
            end: session3End,
        },
        {
            session: ['MatthiasPatzold','KevinMaingi'],
            start: session4Start,
            end: '11:35AM',
        },
        {
            session: ['MikolajMaciejak'],
            start: '11:35AM',
            end: session4End,
        },
        {
            name: 'Lunch',
            description: 'Lunch',
            start: lunchStart,
            end: lunchEnd,
        },
        {
            session: ['AndrewFitzpatrick'],
            start: session5Start,
            end: session5End,
        },
        {
            session: ['AmeenAlade'],
            start: session6Start,
            end: session6End,
        },
        {
            session: ['DanielTallentire'],
            start: session7Start,
            end: session7End,
        },
        {
            name: 'Coffee, Snacks, Sponsors, Chat!',
            description: 'Afternoon Break',
            start: afternoonBreakStart,
            end: afternoonBreakEnd,
        },
        {
            session: ['AbdiTimer'],
            start: session8Start,
            end: session8End,
        },
        {
            session: ['DominicCooperWootton'],
            start: session9Start,
            end: session9End,
        },
        {
            name: 'Event organisers',
            description: 'Closing Remarks',
            start: closingRemarksStart,
            end: closingRemarksEnd,
        }
    ]
}

const stageA = {
    room: "The Agora",
    timeOfDay: 'The Agora',
    date: '2024-10-25',
    summary: '09:00 - 16:00 GMT',
    dayName: "Day 1",
    timeSlots: [
        {
            session: ['SteveWade'],
            start: session1Start,
            end: session1End,
        },
        {
            session: ['AbbyBangser'],
            start: session2Start,
            end: session2End,
        },
        {
            name: 'Coffee, Snacks, Sponsors, Chat!',
            description: 'Morning Break',
            start: morningBreakStart,
            end: morningBreakEnd,
        },
        {
            session: ['PaulDragoonis'],
            start: session3Start,
            end: session3End,
        },
        {
            session: ['PhillipMarks'],
            start: session4Start,
            end: session4End,
        },
        {
            name: 'Lunch',
            description: 'Lunch',
            start: lunchStart,
            end: lunchEnd,
        },
        {
            session: ['JoshuaMo'],
            start: session5Start,
            end: session5End,
        },
        {
            session: ['KathrynLupin'],
            start: session6Start,
            end: session6End,
        },
        {
            session: ['StuartHarrison'],
            start: session7Start,
            end: session7End,
        },
        {
            name: 'Coffee, Snacks, Sponsors, Chat!',
            description: 'Afternoon Break',
            start: afternoonBreakStart,
            end: afternoonBreakEnd,
        },
        {
            session: ['SimonGurney'],
            start: session8Start,
            end: session8End,
        },
        {
            session: ['JamesPrince'],
            start: session9Start,
            end: session9End,
        },
    ]
}

const stageOne = {
    room: "The Forum",
    timeOfDay: 'The Forum',
    date: '2024-10-25',
    summary: '09:00 - 16:00 GMT',
    dayName: "Day 1",
    timeSlots: [
        {
            name: 'To be announced',
            description: 'To be announced',
            start: session1Start,
            end: session1End,
        },
        {
            session: ['CallumWhyte'],
            start: session2Start,
            end: session2End,
        },
        {
            name: 'Coffee, Snacks, Sponsors, Chat!',
            description: 'Morning Break',
            start: morningBreakStart,
            end: morningBreakEnd,
        },
        {
            session: ['SimonEmms'],
            start: session3Start,
            end: session3End,
        },
        {
            session: ['JacobBlackburn'],
            start: session4Start,
            end: session4End,
        },
        {
            name: 'Lunch',
            description: 'Lunch',
            start: lunchStart,
            end: lunchEnd,
        },
        {
            session: ['BeckettLeclair'],
            start: session5Start,
            end: session5End,
        },
        {
            session: ['ChristopherMiller'],
            start: session6Start,
            end: session6End,
        },
        {
            session: ['MarkSimpson'],
            start: session7Start,
            end: session7End,
        },
        {
            name: 'Coffee, Snacks, Sponsors, Chat!',
            description: 'Afternoon Break',
            start: afternoonBreakStart,
            end: afternoonBreakEnd,
        },
        {
            session: ['BeckiFloyd'],

            start: session8Start,
            end: session8End,
        },
        {
            session: ['LauraHyatt'],
            start: session9Start,
            end: session9End,
        },
    ]
}

export const Schedule = {
    conferenceSchedule: {
        day1: conferenceSchedule,
    },
    mainHall: {
        day1: mainHall,
    },
    stageA: {
        day1: stageA,
    },
    stageOne: {
        day1: stageOne,
    },
}
*/

export const OVERALL_START = '08:30AM'
export const OVERALL_END = '17:15PM'

// Event Metadata
const eventDate = '2026-11-27'
const eventOpenAndEndTime = `${OVERALL_START} - ${OVERALL_END} GMT`

// Conference 2026 Overall Times
const registrationStart = '08:30AM';
const registrationEnd = '09:30AM';

const morningSessionStart = '09:30AM';
const morningSessionEnd = '12:00PM';

const lunchStart = '12:00PM';
const lunchEnd = '13:00PM';

const afternoonSessionStart = '13:00PM';
const afternoonSessionEnd = '14:30PM';

const afternoonBreakStart = '14:30PM';
const afternoonBreakEnd = '15:00PM';

const lateAfternoonSessionStart = '15:00PM';
const lateAfternoonSessionSessionEnd = '17:15PM';

// singular session times
const session1Start = '09:45 AM'
const session1End = '10:30 AM'

const session2Start = '10:30 AM'
const session2End = '11:15 AM'

const session3Start = '11:15 AM'
const session3End = '12:00 PM'

const session4Start = '13:00 PM'
const session4End = '13:45 PM'

const session5Start = '13:45 PM'
const session5End = '14:30 PM'

const session6Start = '15:00 PM'
const session6End = '15:45 PM'

const session7Start = '15:45 PM'
const session7End = '16:30 PM'

const session8Start = '16:30 PM'
const session8End = '17:15 PM'

// Keynotes and global sessions
const placeholder = (name, startTime, endTime) => ({
    name: name,
    description: 'To be announced',
    start: startTime,
    end: endTime,
})

const registration =  {
    name: 'Registration',
    description: 'Doors open - registration and mingling',
    start: registrationStart,
    end: registrationEnd,
}

const welcome = {
    name: 'Welcome',
    description: 'Welcome to TechMids Conf 2026!',
    start: '09:30AM',
    end: '09:45AM',
}

// Breaks 
const lunch = {
    name: 'Lunch',
    description: 'Grab some food 🍔, perhaps even some popcorn 🍿',
    start: lunchStart,
    end: lunchEnd,
}

const afternoonBreak = {
    name: 'Afternoon Break',
    description: 'Coffee, Snacks, Sponsors, Chat!',
    start: afternoonBreakStart,
    end: afternoonBreakEnd,
}

const conferenceSchedule = {
    room: "The Everyman Cinema",
    timeOfDay: 'Overall Schedule',
    date: eventDate,
    summary: eventOpenAndEndTime,
    dayName: "Day 1",
    timeSlots: [
        registration,
        welcome,
        {
            name: 'Morning Sessions',
            description: 'Talks whilst you\'re full of energy ⚡',
            start: morningSessionStart,
            end: morningSessionEnd,
        },
        lunch,
        {
            name: 'Afternoon Sessions',
            description: 'Talks whilst you\'re full of food 🍔',
            start: afternoonSessionStart,
            end: afternoonSessionEnd,
        },
        afternoonBreak,
        {
            name: 'Late Afternoon Sessions',
            description: 'Talks whilst you\'re full of... caffeine? ☕',
            start: lateAfternoonSessionStart,
            end: lateAfternoonSessionSessionEnd,
        },
    ]
}


const faithSodipe = {
    name: 'Faith Sodipe',
    description: 'You Don\'t Need Kubernetes: How We Scaled Our API Layer Without the Infrastructure Theatre',
    start: session1Start,
    end: session1End,
    session: ['FaithSodipe'],
}

const eriolFox = {
    name: 'Eriol Fox',
    description: 'Designing for security and privacy: Design lessons from human rights and civic technology',
    start: session3Start,
    end: session3End,
    session: ['EriolFox'],
}

const stefanCornea = {
    name: 'Stefan Cornea',
    description: 'A practical example of how routing and ETAs actually work',
    start: session2Start,
    end: session2End,
    session: ['StefanCornea'],
}

const robertCurran = {
    name: 'Robert Curran',
    description: 'Everything We Stopped Owning (And the One Thing We Never Did)',
    start: session4Start,
    end: session4End,
    session: ['RobertCurran'],
}

const edaEren = {
    name: 'Eda Eren',
    description: 'Forgetting Machines: AI Coding Tools and Skill',
    start: session5Start,
    end: session5End,
    session: ['EdaEren'],
}

const matheusGuimaraes = {
    name: 'Matheus Guimarães',
    description: 'Talk details TBC',
    start: session6Start,
    end: session6End,
}

const steveWade = {
    name: 'Steve Wade',
    description: 'The Killer Question: How One Sentence Can Transform Your Engineering Career',
    start: session7Start,
    end: session7End,
    session: ['SteveWade'],
}

const liamWestley = {
    name: 'Liam Westley',
    description: 'The Secret Life of Programmers',
    start: session8Start,
    end: session8End,
    session: ['LiamWestley'],
}

const screen1Schedule = {
    room: "Screen 1",
    timeOfDay: 'Screen 1',
    date: eventDate,
    summary: eventOpenAndEndTime,
    dayName: "Day 1",
    timeSlots: [
        welcome,
        faithSodipe,
        stefanCornea,
        eriolFox,
        lunch,
        robertCurran,
        edaEren,
        afternoonBreak,
        matheusGuimaraes,
        steveWade,
        liamWestley,
    ]
}


const beckiFloyd = {
    name: 'Becki Floyd',
    description: 'From Hackathon to Parliament: Using Research and AI to Fix How Councils House People (Case study session)',
    start: session1Start,
    end: session1End,
    session: ['BeckiFloyd'],
}

const andyCarter = {
    name: 'Andy Carter',
    description: 'Building without barriers: a11y for backend engineers',
    start: session7Start,
    end: session7End,
    session: ['AndyCarter'],
}

const goldmanSachsTalk = {
    name: 'Goldman Sachs',
    description: 'Talk from our sponsor Goldman Sachs - talk details TBC',
    start: session3Start,
    end: session3End,
}

const cliffAgius = {
    name: 'Cliff Agius',
    description: 'Using the ESP32 and DotNET NanoFramework to secure Aircraft',
    start: session4Start,
    end: session4End,
    session: ['CliffAgius'],
}

const steveHeyes = {
    name: 'Steve Heyes',
    description: 'How to lead with hope when it all feels hopeless',
    start: session5Start,
    end: session5End,
    session: ['SteveHeyes'],
}

const mikeIrving = {
    name: 'Mike Irving',
    description: '.NET, IoT and Hedgehogs!',
    start: session2Start,
    end: session2End,
    session: ['MikeIrving'],
}

const colindaLatour = {
    name: 'Colinda Latour',
    description: 'Love in the Machine: The Human Upgrade Tech Is Missing',
    start: session6Start,
    end: session6End,
    session: ['ColindaLatour'],
}

const shaunLawrence = {
    name: 'Shaun Lawrence',
    description: 'Choose your own adventure',
    start: session8Start,
    end: session8End,
    session: ['ShaunLawrence'],
}

const screen2Schedule = {
    room: "Screen 2",
    timeOfDay: 'Screen 2',
    date: eventDate,
    summary: eventOpenAndEndTime,
    dayName: "Day 1",
    timeSlots: [
        welcome,
        beckiFloyd,
        mikeIrving,
        goldmanSachsTalk,
        lunch,
        cliffAgius,
        steveHeyes,
        afternoonBreak,
        colindaLatour,
        andyCarter,
        shaunLawrence,
    ]
}


const goldmanSachsKeynote = {
    name: 'Goldman Sachs',
    description: 'Keynote from our sponsor Goldman Sachs - talk details TBC',
    start: session1Start,
    end: session1End,
}

const martinReynolds = {
    name: 'Martin Reynolds',
    description: 'Who Approved This PR? Oh Right, Nobody Did.',
    start: session3Start,
    end: session3End,
    session: ['MartinReynolds'],
}

const eliHolderness = {
    name: 'Eli Holderness',
    description: 'Language Games',
    start: session2Start,
    end: session2End,
    session: ['EliHolderness'],
}

const tonyEdwards = {
    name: 'Tony Edwards',
    description: 'How to be a Hip-Hop MC. . . P',
    start: session4Start,
    end: session4End,
    session: ['TonyEdwards'],
}

const stevenTrotter = {
    name: 'Dr Steven Trotter',
    description: 'TUI or not TUI, that is the question',
    start: session5Start,
    end: session5End,
    session: ['StevenTrotter'],
}

const jimSeconde = {
    name: 'Jim Seconde',
    description: 'Slop-Driven Development',
    start: session6Start,
    end: session6End,
    session: ['JimSeconde'],
}

const kevlinHenney = {
    name: 'Kevlin Henney',
    description: 'Wibbly-Wobbly, Timey-Wimey Stuff',
    start: session7Start,
    end: session7End,
    session: ['KevlinHenney'],
}

const jessRose = {
    name: 'Jess Rose',
    description: 'Talk details TBC',
    start: session8Start,
    end: session8End,
}

const screen3Schedule = {
    room: "Screen 3",
    timeOfDay: 'Screen 3',
    date: eventDate,
    summary: eventOpenAndEndTime,
    dayName: "Day 1",
    timeSlots: [
        welcome,
        goldmanSachsKeynote,
        eliHolderness,
        martinReynolds,
        lunch,
        tonyEdwards,
        stevenTrotter,
        afternoonBreak,
        jimSeconde,
        kevlinHenney,
        jessRose,
    ]
}


export const Schedule = {
    conferenceSchedule: {
        day1: conferenceSchedule,
    },
    screen3: {
        day1: screen3Schedule,
    },
    screen2: {
        day1: screen2Schedule,
    },
    screen1: {
        day1: screen1Schedule,
    },
}
