import CarlyRichmond from "./public/speakers/CarlyRichmond.jpeg"
import JoshuaMo from "./public/speakers/JoshuaMo.jpeg"
import MatheusGuimares from "./public/speakers/MatheusGuimares.jpg"
import MaxWoolf from "./public/speakers/MaxWoolf.jpeg"
import SalmaAlamNaylor from "./public/speakers/SalmaAlamNaylor.jpeg"
import StuartClark from "./public/speakers/StuartClark.jpeg"
import TomCamp from "./public/speakers/TomCamp.jpeg"

export const Sessions = {
    "MatheusGuimares": {
        name: "Matheus Guimarães",
        jobTitle: "Senior Developer Advocate, UK/IR @ AWS",
        bio: (
            <>
                <p>
                    Matheus Guimarães, known online as @codingmatheus, is a .NET and microservices specialist, international keynote speaker, and Senior Developer Advocate at AWS. With over 20 years of software development experience, starting as a junior video game programmer when C++ dominated and becoming an early .NET adopter, he has progressed through roles including developer, tech lead, architect, CTO, and startup founder. He has helped companies ranging from startups to global enterprises like Novartis, McLaren, Dewalt, PRS For Music, and Coca Cola modernize and scale their systems, leading digital transformations and designing cloud-native architectures with a hands-on, people-first approach. Today, he shares his expertise with developers worldwide through talks, blogs, videos, and whiteboard sessions, having delivered keynotes and presentations at conferences across the globe while remaining passionate about helping others grow in the technology industry.
                </p>
            </>
        ),
        talkTitle:
            "TBC",
        description: (
            <></>
        ),
        image: MatheusGuimares,
        linkedin: "https://www.linkedin.com/in/codingmatheus/",
        website: "https://codingmatheus.com/",
        sessionType: "Keynote",
        speakerCard: false,
        speakerCardImage: "",
    },
    "SalmaAlamNaylor": {
        name: "Salma Alam-Naylor",
        jobTitle: "Head of Dev Ed @ Nordcraft",
        bio: (
            <>
                <p>I write code for your entertainment. I help developers build cool stuff by writing blog posts, making videos, coding live on the internet, and publishing open source projects. After a career as a music teacher and comedian, I transitioned to technology in 2014, working as a front end developer and tech lead for startups, agencies and global e-commerce, moving to Developer Experience and Developer Education in 2021. Active in the developer community, I am a GitHub Star, a former Microsoft MVP for Developer Technologies (2021-2025), winner of the Jamstack Conf Community Creator Award 2021, and a partnered Twitch streamer. I also make videos on YouTube about tech and the history of The Internet.</p>
            </>
        ),
        talkTitle:
            "An Introduction to the World Wide Web for Very Senior Programmers",
        description: (
            <>As we witness the much-anticipated release of HTML 2.0, there is no better time to surf the World Wide Web. But how did we get here? And what may the future hold? And why are we still writing HTML documents using text in 1995?</>
        ),
        image: SalmaAlamNaylor,
        linkedin: "https://www.linkedin.com/in/whitep4nth3r/",
        website: "https://whitep4nth3r.com/",
        youtube: "https://www.youtube.com/whitep4nth3r",
        sessionType: "Keynote",
        speakerCard: false,
        speakerCardImage: "",
    },
        "TomCamp": {
        name: "Tom Camp (AKA @Zoinkwiz)",
        jobTitle: "Freelance Software Engineer",
        bio: (
            <>
                <p>Tom Camp is a developer relations engineer and freelancer with a background in realtime APIs. Being involved in game dev as a side quest for a decade, he is a committed gamer and occasional streamer, doing both under the pseudonym @Zoinkwiz. He is the creator and maintainer of Quest Helper, the most-downloaded community plugin for Old School RuneScape, one of the world’s largest and most iconic MMORPGs.</p>    
            </>
        ),
        talkTitle:
            "One Small Favour: Growing a Gaming Plugin from Personal Project to 700k Weekly Users and a Thriving Open Source Community",
        description: (
            <>I’ll share how personal frustration with an in-game quest led to building a plugin that now helps 700k players weekly. I’ll cover helping developers contribute to the project, providing end-user support, and handling spicy controversies - all with some fun stories sprinkled in along the way.</>
        ),
        image: TomCamp,
        linkedin: "https://www.linkedin.com/in/thomascamp333/",
        website: "https://github.com/Zoinkwiz/quest-helper",
        sessionType: "Talk",
        speakerCard: false,
        speakerCardImage: "",
    },
    "StuartClark": {
        name: "Stuart Clark",
        jobTitle: "Senior Developer Advocate @ Spotify",
        bio: (
            <>
                <p>Stuart is a sought-after speaker, TEDx presenter, and champion for sustainable software. He’s passionate about the impact of software and AI on the climate and empowers developers to build a more sustainable future. As a leading expert in programmability and DevOps, he frequently graces industry stages worldwide, sharing his knowledge and inspiring others. He lives in Lincoln, England, with his wife, Natalie, and their son, Maddox. He plays guitar and rocks an impressive two-foot beard while drinking coffee. You can find him on social media @bigevilbeard</p>    
            </>
        ),
        talkTitle:
            "Scale or Fail as Spotify's Growth Exposed the Abstraction Paradox",    
        description: (
            <>At Spotify, serving 675M users, hyper-growth in 2014 created system fragmentation that made onboarding engineers difficult. Our abstractions oversimplified complexity, hindering incident response. We learned effective abstraction teaches complexity rather than hiding it.</>),
        image: StuartClark,
        linkedin: "https://www.linkedin.com/in/stuarteclark/",
        website: "https://bigevilbeard.github.io/",
        sessionType: "Talk",
        speakerCard: false,
        speakerCardImage: "",
    },
        "MaxWoolf": {
        name: "Max Woolf",
        jobTitle: "Staff Backend Engineer @ GitLab",
        bio: (
            <>
                <p>"Max Woolf is a local software engineer with 13 years of professional experience at companies of all sizes. He currently works at GitLab on the API team as a Staff Backend Engineer and spends a lot of his time either writing, or improving SQL queries. Outside of work he runs Friends of Cotteridge Park, mentors junior software engineers, likes climbing up mountains and is a semi-reasonable pianist."</p>
            </>
        ),
        talkTitle:
            "Why Your Production Database Hates You (And How to Fix It)",    
        description: (
            <>
            Remember when your database had a few thousand records and everything was fast? “We’ll deal with indexes later.” Yeah, those days are over. Your application has actual, real, data now. Megabytes became gigabytes. Gigabytes became terabytes, and before you knew it, 20% of engineering time is spent tracking down and fixing slow database queries.
            <br />
            <br />
            At GitLab scale, a missing index isn’t just “oh, that’s a bit slow”, it’s “oh, that doesn’t work.” I learned this the hard way, and now I’m here to save you from the same panic-inducing experience. Lots of folks know that indexes can fix these issues; but knowing the right index to use in the right place is a skill in itself. This talk is your beginner-level crash course in PostgreSQL indexing that actually matters in production. We’re talking real-world scenarios where the difference between a good index and a bad index is measured in user happiness (and your stress levels).
            <br />
            <h4 style={{"font-weight": "bold"}}>What You’ll Actually Learn:</h4>
            <ul>
                <li>- B-tree Index Mastery: The one index type that’ll solve 95% of your problems (and how to use it right)</li>
                <li>- Composite Index Strategy: Why column order can make or break your query performance</li>
                <li>- Partial Index Magic: Index only what you need and watch your database thank you</li>
                <li>- Query Plans Demystified: The best way to verify what your database is doing</li>
            </ul>
            <h4 style={{"font-weight": "bold"}}>You’ll Leave With:</h4>
            <ul>
                <li>- The ability to read query plans like a database detective</li>
                <li>- Index design patterns that scale from day one</li>
                <li>- Diagnostic techniques to spot problems before they become fires</li>
            </ul>
            <br/>
            No fluff, nor theory you’ll never use. Just the indexing knowledge that turns “why is everything slow?” into “how did I make it so fast?”
            </>),
        image: MaxWoolf,
        linkedin: "https://www.linkedin.com/in/maxcodes/",
        website: "https://max.woolf.io",
        sessionType: "Talk",
        speakerCard: false,
        speakerCardImage: "",
    },
        "JoshuaMo": {
        name: "Joshua Mo",
        jobTitle: "DevRel Engineer @ Playgrounds Analytics Inc.",
        bio: (
            <>
                <p>Joshua is currently a DevRel Engineer who is working at the intersection of Rust & AI with Playgrounds Analytics Inc. I am part of the core maintainer team for Rig, an agentic AI framework written in Rust. I also regularly give talks on Rust, as well as other subjects. My primary area of work also involves WebAssembly (via wasm-bindgen) and I am currently spearheading a project to make Rig usable from JavaScript via WebAseembly.</p>    
            </>
        ),
        talkTitle:
            "Why is Rust taking over the Python ecosystem?",    
        description: (
            <>Python is the undisputed king of data science, scripting, and rapid prototyping. But behind the scenes, Rust is rapidly reshaping the Python ecosystem by powering performance-critical tools that Python alone struggles to handle efficiently. Many Rust-powered tools like uv, ruff and polars are becoming the new default for those in the know - and for good reason.
            <br></br>
            <br></br>
            <b>In this talk, we will cover:</b>
            <br></br>
            - Why Rust is the go-to for speed-ups in Python tooling & more
            <br></br>
            - How the Rust-Python bridge works: PyO3, Maturin & FFI
            <br></br>
            - Practical tips for writing Rust-Python extension that just work
            <br></br>
            - Real-world examples and use cases</>
            ),
        image: JoshuaMo,
        linkedin: "https://www.linkedin.com/in/joshua-mo-4146aa220/",
        website: "https://joshmo.ooo/",
        sessionType: "Talk",
        speakerCard: false,
        speakerCardImage: "",
    },
    "CarlyRichmond": {
        name: "Carly Richmond",
        jobTitle: "Developer Advocate Lead @ Elastic",
        bio: (
            <>
                <p>Carly is Developer Advocate Lead at Elastic, based in London, UK. Before joining Elastic in 2022, she spent over 10 years working as a technologist at a large investment bank, specialising in Frontend Web development and agility. She is an agile evangelist, UI enthusiast, and regular blogger. In her spare time, she enjoys cooking, photography, drinking tea and chasing after her young son.</p>
            </>
        ),
        talkTitle:
            "OTel You It's Not Just for Backend! ",
        description: (
            <>
            <h2>Background</h2>
            Before joining Elastic as a Developer Advocate, I spent over 10 years working for a bank as a frontend engineer. I have felt the pain of trying to diagnose issues and errors in UIs using logs and diving into minified JavaScript code.

            In that time, the state of DevOps and SRE has established many practices to help developers instrument their applications to identify unexpected behaviour and performance issues. These practices are generally, backend focused. By combining backend tracing with frontend tracing and metrics, we can better understand how our application behaves and where the issue lies.
            <br></br>
            <h2>Outline</h2>
            I will discuss the state of OTel for frontend instrumentation, specifically:

            Communication of the OTel SDKs that can be used for web, and a mention that client telemetry for web is experimental.
            Examples showing how front-to-back tracing can be achieved using OpenTelemetry web instrumentation combined with backend OTel instrumentation.
            An example of how to build a custom instrumentation using OTel web and Core Web Vitals JS library to gain performance insights using industry standard metrics.

            <br></br>
            <h2>Target Audience</h2>
            I believe the following individuals would be interested in this talk:

            UI Developers interested in observing their applications and unsure how to instrument their applications or the tools currently available.
            SRE engineers looking to monitor frontends as part of a wide system-estate.
            More experienced frontend engineers or designers looking for tools to measure application performance as a regular best practice compared to ad-hoc profiling of web applications.
            Tech leads and team leads looking for ways to be alerted to potential application issues and behaviours that impact the user experience.
            
            <br></br>
            <h2>Resources</h2>
            Sample code: https://github.com/carlyrichmond/otel-record-store Blog: https://www.elastic.co/observability-labs/blog/web-frontend-instrumentation-with-opentelemetry"
        </>
        ),
        image: CarlyRichmond,
        linkedin: "https://www.linkedin.com/in/carly-richmond/",
        website: "https://carlyrichmond.com/",
        sessionType: "Talk",
        speakerCard: false,
        speakerCardImage: "",
    },
}
