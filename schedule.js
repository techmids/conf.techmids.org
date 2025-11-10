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
    summary: '09:00 - 16:00 BST',
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
    summary: '09:00 - 16:00 BST',
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
    summary: '09:00 - 16:00 BST',
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
    summary: '09:00 - 16:00 BST',
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
const eventDate = '2025-10-14'
const eventOpenAndEndTime = `${OVERALL_START} - ${OVERALL_END} BST`

// Conference 2025 Overall Times
const registrationStart = '08:30AM';
const registrationEnd = '09:30AM';

const morningSessionStart = '09:30AM';
const morningSessionEnd = '12:00PM';

const lunchStart = '12:00PM';
const lunchEnd = '13:00PM';

const afternoonSessionStart = '13:00PM';
const afternoonSessionEnd = '15:00PM';

const afternoonBreakStart = '15:00PM';
const afternoonBreakEnd = '15:30PM';

const lateAfternoonSessionStart = '15:30PM';
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

const session6Start = '14:30 PM'
const session6End = '15:15 PM'

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
    description: 'Registration',
    start: registrationStart,
    end: registrationEnd,
}

const welcome = {
    name: 'Welcome',
    description: 'Welcome to TechMids Conf 2025!',
    start: '09:30AM',
    end: '09:45AM',
}

const openingKeynote = {
    name: 'Matheus Guimarães',
    description: 'Opening Keynote from Matheus Guimarães @ AWS - talk details TBC',
    start: session1Start,
    end: session1End,
    session: ['MatheusGuimares'],
}

const closingKeynote = {
    session: ['SalmaAlamNaylor'],
    start: session8Start,
    end: session8End,
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

const socialStart = '17:30 PM'
const socialEnd = 'LATE'

const social = {
    name: 'Post-Conference Social 🎉',
    description: 'Chats, drinks, and a generally fab time!',
    start: socialStart,
    end: socialEnd,
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
        social
    ]
}


const richardBrough = {
    name: 'Richard Brough',
    description: 'A llama sets up a lemonade stall',
    start: session1Start,
    end: session1End,
    session: ['RichardBrough'],
}

const joshuaMo = {
    name: 'Joshua Mo',
    description: 'Why is Rust taking over the Python ecosystem?',
    start: session2Start,
    end: session2End,
    session: ['JoshuaMo'],
}

const cynthiaAkiotu = {
    name: 'Cynthia Akiotu',
    description: 'Securing AI Agents Before They Secure Your Stack',
    start: session3Start,
    end: session3End,
    session: ['CynthiaAkiotu'],
}

const indyPahal = {
    name: 'Indy Pahal',
    description: 'Leadership and Management for Techies',
    start: session4Start,
    end: session4End,
    session: ['IndyPahal'],
}

const carlyRichmond = {
    name: 'Carly Richmond',
    description: 'OTel You It\'s Not Just for Backend!',
    start: session5Start,
    end: session5End,
    session: ['CarlyRichmond'],
}

const andyCarter = {
    name: 'Andy Carter',
    description: 'Ulysses versus The Very Hungry Caterpillar',
    start: session6Start,
    end: session6End,
    session: ['AndyCarter'],
}

const stuartLangridge = {
    name: 'Stuart Langridge',
    description: 'The mazy web she whirls: starting Open Web Advocacy',
    start: session7Start,
    end: session7End,
    session: ['StuartLangridge'],
}

const shaunLawrence = {
    name: 'Shaun Lawrence',
    description: 'If .NET brewed beer',
    start: session8Start,
    end: session8End,
    session: ['ShaunLawrence'],
}

const screen1Schedule = {
    room: "Screen 1",
    timeOfDay: 'Screen 1',
    date: eventDate,
    summary: eventOpenAndEndTime,
    dayName: "Day 1",
    timeSlots: [
        welcome,
        richardBrough,
        joshuaMo,
        cynthiaAkiotu,
        lunch,
        indyPahal,
        carlyRichmond,
        afternoonBreak,
        andyCarter,
        stuartLangridge,
        shaunLawrence,
    ]
}


const danielTallentire = {
    name: 'Daniel Tallentire',
    description: 'Jar-gone... how to talk tech to non-techies',
    start: session1Start,
    end: session1End,
    session: ['DanielTallentire'],
}

const beckiFloyd = {
    name: 'Becki Floyd',
    description: 'UX in 2025: Designing at the Speed of AI-Driven Development',
    start: session2Start,
    end: session2End,
    session: ['BeckiFloyd'],
}

const guyBarker = {
    name: 'Guy Barker',
    description: 'Empowering All Your Users: Simple Steps for Building Accessible App Experiences',
    start: session3Start,
    end: session3End,
    session: ['GuyBarker'],
}

const jimSeconde = {
    name: 'Jim Seconde',
    description: 'CLIs Aren\'t As Easy As You Might Think',
    start: session4Start,
    end: session4End,
    session: ['JimSeconde'],
}

const danBeglin = {
    name: 'Dan Beglin',
    description: 'What\'s Actually in Your 30-Year-Old Legacy Database? How We Used AST and Javascript to Find Out',
    start: session5Start,
    end: session5End,
    session: ['DanBeglin'],
}

// const lenaPismeny = {
//     name: 'Lena Pismeny',
//     description: 'Steps and Struggles: My Journey Through Tech, Disability, and Immigration',
//     start: session6Start,
//     end: session6End,
//     session: ['LenaPismeny'],
// }

const siJobling = {
    name: 'Si Jobling',
    description: 'Burndown Charts bs Burnt-Out Teams: A people-first approach to improving psychological safety in tech',  
    start: session6Start,
    end: session6End,
    session: ['SiJobling'],
}

const dileepMarway = {
    name: 'Dileep Marway',
    description: 'Turning Tension into Teamwork - With a Little Help from AI',
    start: session7Start,
    end: session7End,
    session: ['DileepMarway'],
}

const chrisMiller = {
    name: 'Chris Miller',
    description: 'The Gift of Beginner\'s Mind: Why Getting Older in Tech Isn\'t About Keeping Up',
    start: session8Start,
    end: session8End,
    session: ['ChrisMiller'],
}


const screen2Schedule = {
    room: "Screen 2",
    timeOfDay: 'Screen 2',
    date: eventDate,
    summary: eventOpenAndEndTime,
    dayName: "Day 1",
    timeSlots: [
        welcome,
        danielTallentire,
        beckiFloyd,
        guyBarker,
        lunch,
        jimSeconde,
        danBeglin,
        afternoonBreak,
        siJobling,
        dileepMarway,
        chrisMiller,
    ]
}


const maxWoolf = {
    name: 'Max Woolf',
    description: 'Why Your Production Database Hates You (And How to Fix It)',
    start: session2Start,
    end: session2End,
    session: ['MaxWoolf'],
}

const EliHolderness = {
    name: 'Eli Holderness',
    description: 'You Shall Not Password: Modern Authentication for Web Apps',
    start: session3Start,
    end: session3End,
    session: ['EliHolderness'],
}

const tonyEdwards = {
    name: 'Tony Edwards',
    description: 'Beats, Rhymes, & Neural Nets',
    start: session4Start,
    end: session4End,
    session: ['TonyEdwards'],
}

const tomCamp = {
    name: 'Tom Camp',
    description: 'One Small Favour: Growing a Gaming Plugin from Personal Project to 700k Weekly Users and a Thriving Open Source Community',
    start: session5Start,
    end: session5End,
    session: ['TomCamp'],
}

const jamesHolland = {
    name: 'James Holland',
    description: 'The Stack that Secures the Stack: A Deep Dive into Automating Black Hat\'s Next Gen SOC',
    start: session6Start,
    end: session6End,
    session: ['JamesHolland'],
}

// const stuartClark = {
//     name: 'Stuart Clark',
//     description: 'Scale or Fail as Spotify\'s Growth Exposed the Abstraction Paradox',
//     start: session7Start,
//     end: session7End,
//     session: ['StuartClark'],
// }

const ricardoSueiras = {
    name: 'Ricardo Sueiras',
    description: 'Build without limits - zero to shipped in 20 minutes',
    start: session4Start,
    end: session4End,
    session: ['RicardoSueiras'],
}

const screen3Schedule = {
    room: "Screen 3",
    timeOfDay: 'Screen 3',
    date: '2024-10-25',
    summary: eventOpenAndEndTime,
    dayName: "Day 1",
    timeSlots: [
        welcome,
        openingKeynote,
        maxWoolf,
        EliHolderness,
        lunch,
        tonyEdwards,
        tomCamp,
        afternoonBreak,
        jamesHolland,
        ricardoSueiras,
        closingKeynote,
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

