import {Header} from "@/components/Header";
import {Sponsors} from "@/components/Sponsors";
import {Footer} from "@/components/Footer";
import {Speaker} from "@/components/Speaker";
import {Sessions} from "../../../speakers";
import { useRouter } from 'next/router'
import {PageMeta} from "@/components/PageMeta";


export default function SpeakerPage({speaker}) {
    const router = useRouter()

    const speakerProfile = Sessions[speaker]

    if (!speakerProfile) {
        router.replace(`/speakers`)
        return <div></div>
    }

    const speakerCard = speakerProfile.speakerCard? `https://conf.techmids.org/speakers/card/${speakerProfile.name}.png` : 'https://conf.techmids.org/launch.jpg'

    return (
        <>
            <PageMeta
                path={`/speakers/${speaker}`}
                title={`TechMids Conf Speaker - ${speakerProfile.name}`}
                description={speakerProfile.talkTitle}
                image={speakerCard}
            />
            <Header/>
            <main>
                <Speaker speaker={speakerProfile}/>
                <Sponsors/>
            </main>
            <Footer/>
        </>
    )
}

export async function getStaticPaths() {
    const paths = Object.keys(Sessions).map((speaker) => ({
        params: { speaker },
    }))

    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const speaker = params.speaker
    return {
        props: {
            speaker,
        },
    }
}
