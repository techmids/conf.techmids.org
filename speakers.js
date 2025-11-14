import AndyCarter from "./public/speakers/AndyCarter.jpeg"
import BeckiFloyd from "./public/speakers/BeckiFloyd.jpeg"
import CarlyRichmond from "./public/speakers/CarlyRichmond.jpeg"
import ChrisMiller from "./public/speakers/ChrisMiller.jpeg"
import CynthiaAkiotu from "./public/speakers/CynthiaAkiotu.jpeg"
import DanBeglin from "./public/speakers/DanBeglin.jpeg"
import DileepMarway from "./public/speakers/DileepMarway.jpeg"
import DanielTallentire from "./public/speakers/DanielTallentire.jpeg"
import EliHolderness from "./public/speakers/EliHolderness.jpeg"
import GuyBarker from "./public/speakers/GuyBarker.jpeg"
import IndyPahal from "./public/speakers/IndyPahal.jpg"
import JamesHolland from "./public/speakers/JamesHolland.jpeg"
import JimSeconde from "./public/speakers/JimSeconde.jpeg"
import JoshuaMo from "./public/speakers/JoshuaMo.jpeg"
import LenaPismeny from "./public/speakers/LenaPismeny.jpeg"
import MatheusGuimares from "./public/speakers/MatheusGuimares.jpg"
import MaxWoolf from "./public/speakers/MaxWoolf.jpeg"
import RicardoSueiras from "./public/speakers/RicardoSueiras.jpeg"
import RichardBrough from "./public/speakers/RichardBrough.jpeg"
import SalmaAlamNaylor from "./public/speakers/SalmaAlamNaylor.jpeg"
import ShaunLawrence from "./public/speakers/ShaunLawrence.jpeg"
import SiJobling from "./public/speakers/SiJobling.jpeg"
import StuartClark from "./public/speakers/StuartClark.jpeg"
import StuartLangridge from "./public/speakers/StuartLangridge.jpeg"
import TomCamp from "./public/speakers/TomCamp.jpeg"
import TonyEdwards from "./public/speakers/TonyEdwards.jpeg"
import OliverDavies from "./public/speakers/OliverDavies.png"

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
            "From Apps to Agents: The Next Wave of Digital Transformation",
        description: (
            <>We’ve moved from monoliths to microservices, from on-prem to the cloud and, with each wave of digital transformation, we have changed how we design, build, and scale systems. Today, we’re entering a new era: the shift from traditional apps to intelligent, autonomous agents. Let's explore what this shift means in practice, how it impacts software architecture, and why it’s not just about AI, but about a new model of software thinking. Join me for practical insights, some laughs, and a fresh look at the future of intelligent software.</>
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
    // "StuartClark": {
    //     name: "Stuart Clark",
    //     jobTitle: "Senior Developer Advocate @ Spotify",
    //     bio: (
    //         <>
    //             <p>Stuart is a sought-after speaker, TEDx presenter, and champion for sustainable software. He’s passionate about the impact of software and AI on the climate and empowers developers to build a more sustainable future. As a leading expert in programmability and DevOps, he frequently graces industry stages worldwide, sharing his knowledge and inspiring others. He lives in Lincoln, England, with his wife, Natalie, and their son, Maddox. He plays guitar and rocks an impressive two-foot beard while drinking coffee. You can find him on social media @bigevilbeard</p>    
    //         </>
    //     ),
    //     talkTitle:
    //         "Scale or Fail as Spotify's Growth Exposed the Abstraction Paradox",    
    //     description: (
    //         <>At Spotify, serving 675M users, hyper-growth in 2014 created system fragmentation that made onboarding engineers difficult. Our abstractions oversimplified complexity, hindering incident response. We learned effective abstraction teaches complexity rather than hiding it.</>),
    //     image: StuartClark,
    //     linkedin: "https://www.linkedin.com/in/stuarteclark/",
    //     website: "https://bigevilbeard.github.io/",
    //     sessionType: "Talk",
    //     speakerCard: false,
    //     speakerCardImage: "",
    // },
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
    "TonyEdwards": {
        name: "Tony Edwards",
        jobTitle: "Mobile App Developer",
        bio: (
            <>
                <p>
                    Tony is a software engineering, event organising, university lecturing geek at heart. A broad range of tech and business skills mix to help businesses and individuals meet their goals... usually over a cuppa. On any given day he might be engineering cross platform software, scaffolding a marketing strategy, crafting written content, educating the next generation, or inspiring the one after that. With a background in community events management, a multi award winning career in the education sector, and a long history of making a fool of himself, Tony’s sessions are sure to engage the audience and spark conversation. You’ll certainly remember this talk!
                </p>
            </>
        ),
        talkTitle:
            "Beats, Rhymes, & Neural Nets",
        description: (
            <>The Web Speech API has been the undisputed champion of in browser speech recognition since it’s release in 2012. Backed by Google API’s, it’s allowed developers to achieve near realtime recognition, transcription, and text to speech synthesis for more than a decade.
            <br></br>
            <br></br>
            In recent years, a venture backed contender has appeared, threatening to take the crown away from our beloved browser APIs. Whisper promises to be the most accurate, most tolerant, and quickest way to transcribe speech. But does this stand true when its applied to the humble web browser?
            <br></br>
            <br></br>
            In this battle of the ages, Tony sets out to pit Whisper against the Browser in search of the best option in helping write rap lyrics. Following an introduction to the two tech stacks, Tony will iterate through a series of tests to see which one is most suited to the world of Hip-Hop, leading to a crescendo you will never forget.</>
        ),
        image: TonyEdwards,
        linkedin: "https://www.linkedin.com/in/tonyedwardspz/",
        website: "https://tonyedwardspz.co.uk/",
        sessionType: "Talk",
        speakerCard: false,
        speakerCardImage: "",
    },
        "TonyEdwards": {
        name: "Tony Edwards",
        jobTitle: "Mobile App Developer",
        bio: (
            <>
                <p>
                    Tony is a software engineering, event organising, university lecturing geek at heart. A broad range of tech and business skills mix to help businesses and individuals meet their goals... usually over a cuppa. On any given day he might be engineering cross platform software, scaffolding a marketing strategy, crafting written content, educating the next generation, or inspiring the one after that. With a background in community events management, a multi award winning career in the education sector, and a long history of making a fool of himself, Tony’s sessions are sure to engage the audience and spark conversation. You’ll certainly remember this talk!
                </p>
            </>
        ),
        talkTitle:
            "Beats, Rhymes, & Neural Nets",
        description: (
            <>The Web Speech API has been the undisputed champion of in browser speech recognition since it’s release in 2012. Backed by Google API’s, it’s allowed developers to achieve near realtime recognition, transcription, and text to speech synthesis for more than a decade.
            <br></br>
            <br></br>
            In recent years, a venture backed contender has appeared, threatening to take the crown away from our beloved browser APIs. Whisper promises to be the most accurate, most tolerant, and quickest way to transcribe speech. But does this stand true when its applied to the humble web browser?
            <br></br>
            <br></br>
            In this battle of the ages, Tony sets out to pit Whisper against the Browser in search of the best option in helping write rap lyrics. Following an introduction to the two tech stacks, Tony will iterate through a series of tests to see which one is most suited to the world of Hip-Hop, leading to a crescendo you will never forget.</>
        ),
        image: TonyEdwards,
        linkedin: "https://www.linkedin.com/in/tonyedwardspz/",
        website: "https://tonyedwardspz.co.uk/",
        sessionType: "Talk",
        speakerCard: false,
        speakerCardImage: "",
    },
    "StuartLangridge": {
        name: "Stuart Langridge",
        jobTitle: "Founder @ Kryogenix Consulting",
        bio: (
            <>
                <p>
                    
                </p>
            </>
        ),
        talkTitle:
            "The mazy web she whirls: starting Open Web Advocacy",
        description: (
            <>
            <p> 
                There is an organisation called OWA. There is a muse called the Lady of Shalott. They both believe in opening the web. And both need your help. If you’ve ever wondered why you are half-sick of drop-shadow(), or why the web is cracked from side to side… your loyal knight and true is here.            </p>
            <br></br>
            <br></br>
            <p>
                Open Web Advocacy are a group of web developers who have come together to work on opening the web. We've worked with government regulators in the UK, EU, USA, Australia, Japan, and others, and we've seen (and are continuing to see) change and regulation _against_ browser and platform vendors locking down and hindering the open web, and _for_ ensuring that anyone can publish an app with the web without having to ask permission, just as the web has always promised. I am one of the founder members of OWA; here I'll talk about how we started, the successes we've had, how you can help, and what the hell the Lady of Shalott has to do with all of this.
            </p>
            </>
        ),
        image: StuartLangridge,
        linkedin: "https://www.linkedin.com/in/stuartlangridge/",
        website: "https://www.kryogenix.org/",
        sessionType: "Talk",
        speakerCard: false,
        speakerCardImage: "",
    },
    "ShaunLawrence": {
        name: "Shaun Lawrence",
        jobTitle: "Principal Software Engineer @ TinySoft Ltd",
        bio: (
            <>
                <p>
                    Shaun is an avid gamer, learner and experimenter, these combined with a profession in software development make for some really fun journeys.

                    Father to two amazing children and many, many unfinished side projects.

                    Shaun is a Microsoft MVP, speaker and published author.
                </p>
            </>
        ),
        talkTitle:
            "If .NET Brewed Beer",
        description: (
            <>
            Come along and learn all about my favourite recipe for brewing beer; writing some .NET code, throw in some relatively cheap IoT devices, mix in some raw ingredients and wait for a great tasting brew.
            It would be fast, efficient and run directly on the low powered devices controlling it!
          
           <br></br>
           <br></br>
            Come along and learn all about my journey into brewing beer, automating the process through the use of a Raspberry Pi/Meadow board. We will cover how to use common techniques to build on a low powered device and targeted towards machine control.
            This session is great for anyone looking to get into developing for IoT devices using .NET - a framework that we are known for and love.
            <br></br>
            <br></br>
          
            I love a good IPA, what do you like?
            </>
        ),
        image: ShaunLawrence,
        linkedin: "https://www.linkedin.com/in/shaun-lawrence-53a0099/",
        website: "https://x.com/bijington?lang=en",
        sessionType: "Talk",
        speakerCard: false,
        speakerCardImage: "",
    },
    "BeckiFloyd": {
        name: "Becki Floyd",
        jobTitle: "UX Designer @ Voxpopme",
        bio: (
            <>
                <p>
                    I’ve lived both sides of the speed challenge. I started out solving complex problems at Citizens Advice and later worked in digital roles at the NHS, where projects could take months to move forward. Now I work in a fast-paced AI team at Voxpopme, where development happens in days and UX needs to keep up.

                    Since joining, I’ve completely reshaped my process to stay user-led without slowing down product teams. I run real research, gather voice-led feedback, prototype with tools like Replit, and feed insights straight into design.
                </p>
            </>
        ),
        talkTitle:
            "UX in 2025: Designing at the Speed of AI-Driven Development",
        description: (
            <>
            
            In 2025, developers are shipping faster than ever with AI. I’ll show you how I gather user feedback in the morning and design smarter flows by the afternoon. UX can still lead, even when the code is flying out the door.

            This talk shows what UX looks like in a world where developers are building at AI speed. I’ll walk through the process I now follow to gather user feedback in the morning and turn it into working flows by the afternoon. I’ll show how async video research, natural language insight, and tools like Replit help me stay in sync with fast-moving dev teams. This is not about cutting corners. It’s about staying close to users while keeping pace with the work.

            <br></br>
            <br></br>

            <h4 style={{"font-weight": "bold"}}>You’ll leave with a process you can use to:</h4>
            <ul>
                <li>- Gather user feedback in hours, not weeks</li>
                <li>- Turn real feedback into intuitive user journeys</li>
                <li>- Prototype and iterate alongside developers</li>
                <li>- Keep UX relevant and user-led, even in AI-powered teams</li>
            </ul>
            <br></br>
            This is how UX works now. Come see it in action.

            </>
        ),
        image: BeckiFloyd,
        linkedin: "https://www.linkedin.com/in/nass84",
        website: "https://www.beckifloyd.com/",
        sessionType: "Talk",
        speakerCard: false,
        speakerCardImage: "",
    },
    "RichardBrough": {
        name: "Richard Brough",
        jobTitle: "CTO @ Blue Beck Ltd",
        bio: (
            <>
                <p>
                    Richard is the CTO at Blue Beck Ltd, an experienced software professional focussed on Machine Learning and Apps with a passion for Open Source AI and a strong interest in novel ways Machine Learning can be used on locally on low power devices. His background is in backend service and mobile development, going back to when the first releases of the Android and iOS SDKs became available, and older devices before that, having started his career at RARE as a console game developer.
                </p>
            </>
        ),
        talkTitle:
            "A llama sets up a lemonade stall",
        description: (
            <>
            We created a Model Context Protocol (MCP) server game about running a soft drinks business, designed to look to a Large Language Model like a real business, not a game. This is the story of what happened when different LLMs were connected to it and prompted to do bad things.
            <br></br>
            <br></br>
            Tool use by LLMs has increased dramatically recently, especially with the rise of MCP.   The number of anecdotes and papers about unexpected or misaligned tool use has also been growing.  We will take a look at some of these, along with how we created our MCP game and how different LLMs interacted with it when prompted in different ways.
            </>
        ),
        image: RichardBrough,
        linkedin: "https://www.linkedin.com/in/richard-n-brough/",
        website: "https://x.com/RichardNBrough",
        sessionType: "Talk",
        speakerCard: false,
        speakerCardImage: "",
    },
    "RicardoSueiras": {
        name: "Ricardo Sueiras",
        jobTitle: "Dev Advocate @ AWS",
        bio: (
            <>
                <p>
                    A highly experienced technologist and change agent with an track record specializing in innovation, Cloud and Open Source. I am enthusiastic, passionate, articulate, creative and unconventional - an evangelist that seeks to accelerate the adoption of new technologies.
                </p>
            </>
        ),
        talkTitle:
            "Build without limits - zero to shipped in 20 minutes",
        description: (
            <>
                In this zero slides session, I will start with a blank IDE and I will walk through successful strategies in how to use AI Coding Assistants so that you can feel in control and get more out of these next generation developer tools.
               
                <br></br><br></br>
               
                This session is about understanding both how to use AI coding assistants, passing on tips that will make developers more successful. It is also a lesson in setting expectations - helping developers know what they can and cannot expect them to do. Spoiler - our jobs as developers are VERY safe!
            </>
        ),
        image: RicardoSueiras,
        linkedin: "https://www.linkedin.com/in/ricardosueiras",
        website: "https://x.com/ricardo_sueiras",
        sessionType: "Talk",
        speakerCard: false,
        speakerCardImage: "",
    },
    "CynthiaAkiotu": {
        name: "Cynthia Akiotu",
        jobTitle: "Cloud Security Architect",
        bio: (
            <>
                <p>
                    Cynthia is a Cybersecurity Architect and Identity Specialist with deep expertise in Identity & Access Management (IAM), data governance, and Zero Trust implementation. Her work centres on securing environments where AI agents, autonomous models, and machine identities are rapidly expanding the attack surface. With experience across diverse sectors, Cynthia has led projects on secure cloud adoption, privileged access management, insider risk mitigation, and identity governance for AI-driven environments. Driven by a commitment to secure innovation, she champions identity governance as a foundation for trust in AI-native ecosystems.

"
                </p>
            </>
        ),
        talkTitle:
            "Securing AI Agents Before They Secure Your Stack",
        description: (
            <>
            Securing AI agents before they secure your stack. AI agents are becoming part of every developer’s workflow. generating code, integrating APIs, and automating tasks. But with great power comes hidden risk: when agents gain access to API keys, tokens, or credentials, they can unintentionally act like insider threats.

            <br></br>

            <h4 style={{"font-weight": "bold"}}>In this talk, you will learn:</h4>
            <ul>
                <li> - Real-world examples of AI agents exposing sensitive data or misusing privileges.</li>
                <li> - The hidden risks of giving agents unchecked access in your stack.</li>
                <li> - The developer’s role in securing secrets inside codebases and pipelines.</li>
                <li> - Practical guardrails that let you innovate with AI while keeping systems safe.</li>
            </ul>
            <br></br>
            Whether you are coding in Golang, building .NET apps, or experimenting with AI-driven workflows, this session will give you the mindset and tools to secure AI agents without slowing AI agents aren’t just tools, they are part of your team. It’s time to secure them like one.

            </>
        ),
        image: CynthiaAkiotu,
        linkedin: "https://www.linkedin.com/in/cynthia-akiotu/",
        website: "",
        sessionType: "Talk",
        speakerCard: false,
        speakerCardImage: "",
    },
    "DanBeglin": {
        name: "Dan Beglin",
        jobTitle: "Lead Developer @ Griffiths Waite",
        bio: (
            <>
                <p>
                    Dan is currently Lead Developer at Griffiths Waite, based in Birmingham. He focuses on providing technical solutions to the Financial Services industry and building software development teams that don’t hate their job. Dan generally works with Typescript, OracleDB and Azure. Outside of work, his particular interests are catching pokemon, woodwork and trying new whiskeys.
                </p>
            </>
        ),
        talkTitle:
            "What's Actually in Your 30-Year-Old Legacy Database? How We Used AST and Javascript to Find Out",
        description: (
            <>        
            Every company has a haunted database—ours was 30 years old, undocumented, and everything depended on it. We cracked it open with an AST parser, building a dependency map of procedures, tables, and views. Learn how compiler techniques can turn legacy chaos into something you can work with.
            <br></br>
            <br></br>
            Behind every enterprise application stack hides a database that’s been evolving for decades. It started as a few well-structured tables, but years of stored procedures, cursors, replication rules, and “temporary fixes” have turned it into an undocumented dependency web. Migrating away is risky, yet the entire organisation depends on it and its painful to work with.
            <br></br>
            <br></br>
            We faced this exact challenge with a 30-year-old Oracle database at the heart of the business. All our microservices depended on it, migration programs had stalled, and no one could say with certainty which tables or procedures were truly in use.
            <br></br>
            <br></br>
            Our approach was to treat the database like source code. Using Abstract Syntax Trees (ASTs) and Typescript, we built a recursive parsing engine that could: • Extract and catalog procedures and functions directly from the database. • Analyse procedure calls, views, cursors, and table usage. • Construct a dependency graph to visualise critical business logic.
            <br></br>
            <br></br>
            The result was a living map of the system that allowed us to really get what we were using under the hood and reduce our dependancies safely
            <br></br>
            <br></br>
            This talk walks through the architecture of the parser, how we optimised it for PL/SQL code, and how we’ve expanded the same method to other languages. You’ll learn how compiler techniques actually work and how you can use them against your own codebases - and then what you could do with what you discover.
            <br></br>
            <br></br>
            If you’ve ever been blocked by a “black box” legacy database, you’ll leave with practical strategies, open-source tools, and proof that even a 30-year-old Oracle system can be demystified.

            </>
        ),
        image: DanBeglin,
        linkedin: "https://www.linkedin.com/in/dan-beglin/",
        website: "https://medium.com/@smarthomedan",
        sessionType: "Talk",
        speakerCard: false,
        speakerCardImage: "",
    },
    "GuyBarker": {
        name: "Guy Barker",
        jobTitle: "Technical Accessibility Enthusiast",
        bio: (
            <>
                <p>
                    Guy worked for more than twenty years as a developer at Microsoft, with most of his time focused on accessibility. In the Windows Accessibility Team he worked on the Narrator screen reader, Magnifier, On-Screen Keyboard, and UI Automation, the API that powers all accessibility in Windows. He later worked in Apps teams, again focusing on the accessibility of those apps, and finally as an accessibility consultant helping product teams across Microsoft. In his own time, Guy explored many accessibility-related topics, building free experimental assistive technology tools and soliciting feedback.
                </p>
            </>
        ),
        talkTitle:
            "Empowering All Your Users: Simple Steps for Building Accessible App Experiences",
        description: (
            <>
                No-one should be blocked from employment, communication, creativity, or enjoyment due to constraints in the apps they use. Never has it been easier for devs to build accessible apps which fully support everyone, so learn some simple steps which have incredible impact!
                <br></br>
                <br></br>
                Today a few simple design and dev considerations can make the difference between an app being usable and unusable for many people. Many UI frameworks support apps being built to empower all users, regardless of how those users interact with their devices. In this talk, I’ll demo a .NET MAUI app specifically designed to highlight considerations around accessibility, including some of the app’s features impacting the experience for blind and partially sighted users, and users who use voice input or switch input. As examples of the sorts of things I’ll demo with the accessible .NET MAUI app, here are Playing Accessible Solitaire with the iOS VoiceOver screen reader on an iPad mini, The Accessible Solitaire game using voice control on a Windows 11 laptop and an iPad mini, and The Accessible Solitaire on iPad being played with a switch device. While this app is built using .NET MAUI, the principles around accessibility apply to any app.
                <br></br>
                <br></br>
                The app I’ll be demoing is the Accessible Solitaire app, freely available at the Apple, Google, and Microsoft Stores, and will show how one simple .NET MAUI property can make or break the usability of an app. The app code is publicly available for reference. While the app itself may seem quite basic, one user who’s blind has said that with the app, he’s completed a game of solitaire for the first time in his life. With .NET MAUI, the steps for supporting everyone on iOS, Android, and Windows is not the complicated part of building your app.
                <br></br>
                <br></br>
                I worked as a dev at Microsoft for more than twenty years, focusing mainly in the area of accessibility. Over that period in my own time I built a variety of apps exploring the accessibility of current tech, and shared all my learnings, most recently at Barker’s Articles. These articles include some thoughts on great questions raised at the .NET MAUI Day in London earlier in 2025, Q&A from a .NET MAUI Community Standup.
                <br></br>
                <br></br>
                After the talk, you’ll be able to consider how you can deliver more usable experiences for more people with your own apps!
            </>
        ),
        image: GuyBarker,
        linkedin: "",
        website: "",
        sessionType: "Talk",
        speakerCard: false,
        speakerCardImage: "",
    },
    "JimSeconde": {
        name: "Jim Seconde",
        jobTitle: "Senior Developer Advocate @ Vonage",
        bio: (
            <>
                <p>
                    A trained actor with a curious background: from Theatre Studies, to Q/A, to Business Intelligence development, to full stack web development, I am the resident specialist PHP Developer Advocate at Global Cloud Communications giant Vonage. I founded Birmingham, UK’s current PHP usergroup BrumPHP, hosted the Fusion Meetup Series, and organised the TechMids Developer Conference. I mentor, write and speak on PHP, JavaScript, DevOps, DevRel and tech culture. I pretended to be a DJ on the way.
                </p>
            </>
        ),
        talkTitle:
            "CLIs Aren't As Easy As You Might Think",
        description: (
            <>
            
            It's built in the muscle memory - you do the same commands over and over each day as part of your job. Designing a CLI tool is probably quite simple, right? Erm, no. Making a CLI for thousands of other developers to use every day takes a lot of thought. We're going to look at the art of the CLI.
            <br></br>
            <br></br>
            This talk was written by Chuck Reeves and I earlier this year: Chuck realised that, when writing the new version of the company CLI, developers have to make a mountain of decisions that have tech debt repercussions for years if shortcutted. Which way round do arguments go? I like shiny emojis, I'll put those in to make an accessibility disaster. It also gives a chance to show some of the absolutely bizarre everyday things we are doing as developers in our day-to-day, because Alex in 1982 had to make a decision on terminal command orders.
            <br></br>
            <br></br>
            In this talk, while I amuse the audience with examples of _terrible_ design choices that for some reason include me talking about a failed 2008 video game that has the best ending ever, an energy drink that shouldn't exist and me standing and pointing at a coffee shop putting out weird signs. While it's fun to laugh at bad stuff, it's time to use those examples of how to write _good_ CLIs that are consumed by developers. After all, if we're all going to supposedly be prompt engineers, we should probably learn how to sanitise our inputs.
            <br></br>
            <br></br>
            </>
        ),
        image: JimSeconde,
        linkedin: "https://uk.linkedin.com/in/secondej",
        website: "https://developer.vonage.com/en/blog/authors/james-seconde",
        sessionType: "Talk",
        speakerCard: false,
        speakerCardImage: "",
    },
    "DileepMarway": {
        name: "Dileep Marway",
        jobTitle: "Director of Engineering @ PebblePad",
        bio: (
            <>
                <p>
                    With over 19 years of technical expertise and strong commercial and operational skills, I focus on delivering measurable business results. I set strategic vision and effectively communicate across all levels to build consensus and achieve corporate goals. As a leader, I cultivate teams based on trust, empowerment, and continuous learning. Outside of work I’m an avid Aston Villa fan and love making lego!
                </p>
            </>
        ),
        talkTitle:
            "Turning Tension into Teamwork - With a Little Help from AI ",
        description: (
            <>
                Turning team conflict into your biggest strength. I reveal how to embrace disagreements for innovation and growth - plus, how AI can coach you to handle tough moments, build trust, and unlock higher performance at every level.
                <br></br>
                <br></br>
                What if conflict in your team wasn’t a problem, but rather an advantage? Even the best teams clash, but those who embrace conflict constructively innovate faster and build stronger bonds. In this talk, I’ll show how to turn difficult conversations into breakthroughs, and how AI can act as your on-demand coach, helping you practise the skills you need to handle those tough moments.
                <br></br>
                <br></br>
                In my 19 years leading engineering teams, I’ve learned that conflict isn’t the enemy, rather complacency is.
                <br></br>
                <br></br>
                I’ll open with a scenario most engineers recognise: a project kick off where voices rise, bias colours judgment, and frustration takes the wheel. In moments like these, many leaders default to avoiding tension. But that’s a missed opportunity, because when managed well, conflict can fuel innovation, trust, and high performance.
                <br></br>
                <br></br>
                We’ll explore the “Collusion Cycle” - how tiny misunderstandings spiral into major friction, and I’ll share the proven techniques I’ve used to break that cycle:
                <br></br>
                <br></br>
                By the end, attendees will walk away with five practical tips - blending human emotional intelligence with AI’s coaching potential. Ultimately to turn team tension into collaboration and higher performance.
            </>
        ),
        image: DileepMarway,
        linkedin: "https://www.linkedin.com/in/dileepmarway",
        website: "https://www.aston.ac.uk/eps/student-blogs/dileep-marway",
        sessionType: "Talk",
        speakerCard: false,
        speakerCardImage: "",
    },
    "JamesHolland": {
        name: "James Holland",
        jobTitle: "Technology Innovation @ Palo Alto Networks",
        bio: (
            <>
                <p>
                    James is a technology enthusiast and cybersecurity professional based in the West Midlands. He’s a CISSP-certified specialist with a career in IT and information security that started in 2003, having tackled everything from design and architecture to support and technical pre-sales. He is currently part of the Technology Innovation team at Palo Alto Networks, where he focuses on building the future of security operations.

                    His recent work includes leading the security infrastructure for the world-renowned Black Hat conferences, evolving the use of generative AI in cybersecurity for projects related to purple teaming and detection engineering, and he’s a strong advocate for automation.

                    When not immersed in his day job, he enjoys public speaking and has presented at many events. You’ll also find him running, hiking, sometimes snowboarding, and occasionally working on his guitar skills. And yes, he does STILL own too many t-shirts.
                </p>
            </>
        ),
        talkTitle:
            "The Stack that Secures the Stack: A Deep Dive into Automating Black Hat's Next Gen SOC",
        description: (
            <>
                Pull back the curtain on the security infrastructure of Black Hat, the world’s most renowned security conference. Learn how we built a globally consistent, automated NOC and SOC that achieved zero downtime, democratised IaC and PaC, and revolutionised our approach to event operations.
                <br></br>
                <br></br>
                Behind every major conference is a complex, often unseen, technology stack. For a security-focused event like Black Hat, this stack itself is a critical target, requiring a resilient, scalable, and automated security posture. In this talk, we’ll pull back the curtain on the operational and security infrastructure of the Black Hat conferences. We will explore the journey from a collection of ad-hoc systems to a globally consistent, single-config architecture that empowers us to manage operations with unprecedented efficiency. This is a story of how we built a stack that not only supports the event, but actively secures it, demonstrating how a strategic approach to automation and platform consolidation can revolutionise operations.
            </>
        ),
        image: JamesHolland,
        linkedin: "",
        website: "",
        sessionType: "Talk",
        speakerCard: false,
        speakerCardImage: "",
    },
    "ChrisMiller": {
        name: "Chris Miller",
        jobTitle: "Software Engineer @ PHP Architect",
        bio: (
            <>
                <p>
                    In 1983, Christopher was introduced to computers by his dad, at the tender age of 3. now, over 40 years later, he has been working in the industry for over 20 years making an impact across multiple sectors of the industry. Starting with launching the first web development company in Staffordshire, Christopher dealt with the web – when the web was little more than just pretty text. He established the websites for many different businesses in their first inception, before moving onto web applications a little while later. He has worked with a large number of languages, specialising in supporting businesses to grow standards for their code base, and now he is ready to share his processes with the world.
                </p>
            </>
        ),
        talkTitle:
            "The Gift of Beginner's Mind: Why Getting Older in Tech Isn't About Keeping Up",
        description: (
            <>
            In tech, youth and shiny tools steal the spotlight—but experience brings wisdom. This talk is for developers feeling pressured to constantly reinvent themselves. It reframes experience as a powerful asset and reminds us: staying curious, not just current, is what keeps us truly relevant. 

            <br></br>
            <br></br>
            Tech culture worships youth, celebrates the latest frameworks, and makes us feel like dinosaurs if we haven't mastered the newest JavaScript library. But what if experience isn't about knowing everything—it's about knowing what matters? 
            
            <br></br>
            <br></br>
            This talk is for every developer who has felt the pressure to constantly reinvent themselves to stay relevant. It's about recognizing the wisdom that comes with experience while maintaining the curiosity that makes us great developers. Age isn't the enemy of innovation—it's the foundation of wisdom.

            <br></br>
            <h4 style={{"font-weight": "bold"}}>Key Themes:</h4>
            <ul>
                <li>- Reframing experience as an asset, not a liability</li>
                <li>- The unique value that comes with having seen multiple technology cycles</li>
                <li>- Maintaining curiosity and learning ability throughout your career</li>
                <li>- Mentoring and knowledge transfer as core skills</li>
                <li>- Building confidence in your accumulated wisdom</li>
            </ul>
            </>
        ),
        image: ChrisMiller,
        linkedin: "https://www.linkedin.com/in/ccmiller2018/",
        website: "https://christophermiller.tech/",
        sessionType: "Talk",
        speakerCard: false,
        speakerCardImage: "",
    },
    "EliHolderness": {
        name: "Eli Holderness",
        jobTitle: "Research Software Advocate @ Bennett Institute",
        bio: (
            <>
                <p>
                    Eli is a software engineer, conference speaker, and professional problem-solver who works at the Bennett Institute as a research software advocate. They spend their work time making researchers’ lives easier with code and documentation, and by connecting them with the right knowledge. They spend their non-work time knitting, travelling, and catching up on their functionally-infinite reading list.
                </p>
            </>
        ),
        talkTitle:
            "You Shall Not Password: Modern Authentication for Web Apps",
        description: (
            <>
            Once upon a time, your users would log into a web service with a username and password. But now we've got a bewildering array of options - SSO, MFA, passwordless, and more. Learn how to keep your users safe as we discuss the good, the bad and the ugly of modern authentication mechanisms for the Web.
            <br></br>
            <br></br>
            In the good old days, your users would log into a web app with a username and password. But now people expect an alphabet soup of SSO, 2FA, OAuth, OIDC, SAML, FIDO2, OTP... What do they all mean - and why do they matter? Why is central authentication useful? What does two-factor authentication really protect us from, and what's still wide open? How can you decide whether or not to trust an identity provider to keep your and your users' secrets? Learn how to keep your users safe as we discuss the good, the bad and the ugly of modern authentication mechanisms for the Web.
            <br></br>
            <br></br>
            This talk is aimed at anyone passingly familiar with web development, with an interest in security, or who simply wants to know what’s really going on when you ‘sign in with Google’.
            </>
        ),
        image: EliHolderness,
        linkedin: "https://www.linkedin.com/in/eli-holderness-4890b886/",
        website: "https://www.bennett.ox.ac.uk/about-us/eli-holderness/",
        sessionType: "Talk",
        speakerCard: false,
        speakerCardImage: "",
    },
    "AndyCarter": {
        name: "Andy Carter",
        jobTitle: "Technical Team Lead @ Evoluted",
        bio: (
            <>
                <p>
                    Andy is a Technical Team Lead at Sheffield based Web agency, Evoluted. With over two decades of coding experience, he now uses that passion and insight to support others; helping people develop their skills and promoting best practices.

Away from the work, Andy runs Street Art Sheffield, documenting the Steel City’s incredible murals and running the occasional street art tour.
                </p>
            </>
        ),
        talkTitle:
            "Ulysses versus The Very Hungry Caterpillar",
        description: (
            <>
            As AI becomes more prevalent in our industry, it’s more important than ever to recognise the value of true craftsmanship. In this talk, we’ll draw insights from two literary classics to explore why writing clean, thoughtful code still matters.
            <br></br>
            <br></br>
            As developers, we spend a significant proportion of our time reading code. The quality of that code can really impact how easily we understand and follow what it does. Poor code can be costly!
            <br></br>
            <br></br>
            Taking two literary classics we will explore the challenges of complex code from the reader’s perspective. We will also look at the benefits simple code can bring.
            <br></br>
            <br></br>
            With people increasingly utilising AI as part of their developer-toolkit, it’s important we examine the quality of our work. We need to embrace our creativity and write code that tell’s a simple and eloquent story.
            </>
        ),
        image: AndyCarter,
        linkedin: "https://www.linkedin.com/in/drandycarter/",
        website: "https://andycarter.dev/",
        sessionType: "Talk",
        speakerCard: false,
        speakerCardImage: "",
    },
    "OliverDavies": {
        name: "Oliver Davies",
        jobTitle: "Drupal Developer, Consultant and Speaker",
        bio: (
            <>Oliver is a Software Developer and Drupal expert with 18 years experience. He specialises in code quality, automated testing and test-driven development, is a Linux enthusiast and an advocate for open source software.</>
        ),
        talkTitle:
             "Nix for PHP Developers (and everyone else)",
        description: (
            <>Nix is a package manager with more than 120,000 packages, an operating system with more than 20,000 options, and a build tool for creating reproducible and reliable software that works the same for everyone, every time.
            <br></br>
            In this talk, Oliver will explain what Nix is, show how to create development shells for PHP (or anything else) that mean you no longer need to use containers or virtual machines, and how to package applications that are easy to deploy and distribute.
            <br></br>
            Note the slides and code examples are focus on PHP, but the same concepts and tools apply to other programming languages. You don't need to be a PHP Developer to learn from this talk.</>),
        image: OliverDavies,
        website: "https://www.oliverdavies.uk/",
        sessionType: "Talk",
        speakerCard: false,
        speakerCardImage: "",
    },
    "DanielTallentire": {
        name: "Daniel Tallentire",
        jobTitle: "Engineering Manager @ The Citation Group",
        bio: (
            <>
                <p>
                    I’m an Engineering Manager at Citation Group. I build software, teams and systems to giving the best opportunities for success.

I have 18 years of experience working in both SaaS & on-prem software companies. I helped shape product and technical direction both as a software engineer, manager and director.

I focus on working out what the next most important problem to solve is, then solving that. To do this I have reorganized teams, built new products, spent weeks on-site with customers, hired and grown staff, created new internal systems. I do this with an emphasis on making life better for those who will be on the journey too – the customers, the engineers who I support, and our other internal teams.
                </p>
            </>
        ),
        talkTitle:
            "Jar-gone... how to talk tech to non-techies",
        description: (
            <>
            
            "Jar-gone” helps engineers ditch jargon, tell compelling stories, and connect. I’ll share experiences and tips to make your communication clearer and truly impactful. Transform from that engineer who confuses everyone to the one who gets called when clarity on technical decisions is needed.
            <br></br>
            <br></br>
            Your system is down. Support are struggling with the phone calls. The big boss demands answers. You know exactly what the problem is, but as you explain, eyes glaze over. The more detail you provide, the more frustrated you sense they are becoming. Have you been there too?
            <br></br>
            <br></br>
            Every day around the world, brilliant engineers solve complex problems worth millions. Yet when explaining those solutions, we might as well be speaking Klingon.
            <br></br>
            <br></br>
            This isn't dumbing things down. It's about wielding communication as a superpower that transforms careers, prevents disasters, and builds bridges between engineering and the rest of the business.
            <br></br>
            <br></br>      
            <h4 style={{"font-weight": "bold"}}>In this practical, story-driven talk, you'll discover:</h4>
            <ul>
                <li>- Why smart people sound confusing – and the three mental traps that make us difficult to understand</li>
                <li>- The SOAR framework adapted for technical communication – the same structure that wins interviews now helps you explain any technical concept</li>
                <li>- Battle-tested metaphors that help understanding – from "technical debt as credit cards" to "APIs as restaurant menus"</li>
                <li>- My 2-minute explanation template that works for everything from bug reports to board presentations</li>
            </ul>
            <br></br>    
            Drawing from 15+ years across startups, scale-ups, and enterprises, I'll share the communication patterns that separate engineers who get stuck from those who become indispensable.
            </>
        ),
        image: DanielTallentire,
        linkedin: "https://www.linkedin.com/in/danieltallentire/",
        website: "",
        sessionType: "Talk",
        speakerCard: false,
        speakerCardImage: "",
    },
    "SiJobling": {
        name: "Si Jobling",
        jobTitle: "Engineering Manager @ Rightmove",
        bio: (
            <>
                <p>
                    I'm Si Jobling, an Engineering Manager at Rightmove with over 20 years in tech and a background spanning ASOS, Alibaba, and Yahoo. I started my career at West Midlands Fire Service where I also engaged with the local community through our monthly Multipack meetups and hosting events with ASOS at Custard Factory. I've led teams through complex delivery, cultural shifts, and burnout recovery. I created the PETALS framework to help teams reflect more honestly and consistently on their wellbeing, and it's now used by over 100 active teams across multiple organisations.
                </p>
            </>
        ),
        talkTitle:
            "Burndown Charts bs Burnt-Out Teams: A people-first approach to improving psychological safety in tech",
        description: (
            <>
                Your sprint velocity looks great; your burndown chart's on target. But half your team is quietly overwhelmed, two are looking for new jobs, and retros feel like a box-ticking exercise.

                In this talk, we'll explore why traditional delivery metrics don't tell the whole story, and how burnout, disengagement, and disconnection can hide in plain sight. You'll learn about PETALS, a lightweight, people-first framework used by tech teams around the world to spot early signs of team strain and build psychologically safe, high-trust environments.

                Expect real-world stories, simple tools, and an honest look at what makes teams thrive, or quietly unravel. Whether you're part of a team or lead one, this talk will give you practical ways to start better conversations, before the people behind the code burn out.
            </>
        ),
        image: SiJobling,
        linkedin: "https://www.linkedin.com/in/sijobling/",
        website: "https://petals.team/",
        sessionType: "Talk",
        speakerCard: false,
        speakerCardImage: "",
    },
    "IndyPahal": {
        name: "Indy Pahal",
        jobTitle: "IT Director @ SOCOTEC UK",
        bio: (
            <>
                <p>
                    I'm an experienced Tech Leader, having gone through the journey myself and mentored multiple people going from technical roles to more management and leadership roles.
                </p>
            </>
        ),
        talkTitle:
            "Leadership and Management for Techies",
        description: (
            <>Many brilliant software developers eventually find themselves asking: what's next? For some, the natural step is to move into leadership or management—but the leap isn't as straightforward as it seems. My talk is designed to help technical professionals explore this transition, understand what it really means, and decide if leadership is the path they want to take.

</>
        ),
        image: IndyPahal,
        linkedin: "https://www.linkedin.com/in/indy-pahal-76328075/",
        website: "",
        sessionType: "Talk",
        speakerCard: false,
        speakerCardImage: "",
    },

    // "LenaPismeny": {
    //     name: "Lena Pismeny",
    //     jobTitle: "Senior DevOps Engineer",
    //     bio: (
    //         <>
    //             <p>
    //                 Lena is a Senior DevOps and DevSecOps Engineer with over 12 years of experience designing secure, scalable, cloud-native infrastructure. I specialize in automating cloud environments (AWS, GCP), infrastructure as code (Terraform, CloudFormation), Configuration management (Ansible, Puppet), and building robust CI/CD pipelines (Jenkins, GitLab). I enjoy building things from scratch, improving team velocity, and ensuring security is embedded in every stage of the delivery process. I bring a strong mix of hands-on engineering and cross-functional collaboration across security, legal, and development teams.
    //             </p>
    //         </>
    //     ),
    //     talkTitle:
    //         "Steps and Struggles: My Journey Through Tech, Disability, and Immigration",
    //     description: (
    //         <>
    //             What happens when a DevOps engineer with deep AWS and security expertise is forced to start over—this time with vision loss, limited mobility, and in a foreign country?
    //             <br></br>    
    //             <br></br>    

    //             This talk isn’t just about technology—it’s about grit, identity, and adaptation. Before moving to the Netherlands, I had already lost much of my vision. Over the past year, walking long distances and climbing stairs has also become difficult. Yet through it all, I’ve rebuilt my tech career from the ground up—drawing on my expertise in cloud infrastructure, DevOps, and security to stay in the game.
    //             <br></br>    
    //             <br></br>    

    //             I’ll share the raw, real story of navigating a new country and industry while my body demanded new ways of working. From accessibility gaps in tech to the emotional toll of “just pushing through,” this talk brings a rare perspective on resilience, inclusion, and thriving when nothing is easy. Whether you come for the cloud or the human story behind it, you’ll leave with fresh insight into what adaptability really looks like in tech.
    //         </>
    //     ),
    //     image: LenaPismeny,
    //     linkedin: "https://www.linkedin.com/in/laenaren/",
    //     website: "",
    //     sessionType: "Talk",
    //     speakerCard: false,
    //     speakerCardImage: "",
    // },

    //     "": {
    //     name: "",
    //     jobTitle: "",
    //     bio: (
    //         <>
    //             <p>
                    
    //             </p>
    //         </>
    //     ),
    //     talkTitle:
    //         "TBC",
    //     description: (
    //         <></>
    //     ),
    //     image: ,
    //     linkedin: "",
    //     website: "",
    //     sessionType: "Talk",
    //     speakerCard: false,
    //     speakerCardImage: "",
    // },
}
