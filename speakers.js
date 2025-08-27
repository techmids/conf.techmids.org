import MatheusGuimares from "./public/speakers/MatheusGuimares.jpg"
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
}
