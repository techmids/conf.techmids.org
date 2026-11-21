import React from "react";
import {Speakers} from "@/components/Speakers";
import {PageMeta} from "@/components/PageMeta";
import {Header} from "@/components/Header";
import {EVENT, AVAILABLE_INFORMATION} from "../../../event";
import {Sponsors} from "@/components/Sponsors";
import {Footer} from "@/components/Footer";

export const SpeakersPage = () => {
    return (
        <>
            <PageMeta
                path="/speakers"
                title={`Speakers - ${EVENT.edition}`}
                description={`The speaker lineup for ${EVENT.edition}, Birmingham's community-driven tech conference on ${EVENT.date}.`}
            />
            <Header/>
            <main>
                {AVAILABLE_INFORMATION.speakersAvailable && <Speakers/>}
                <Sponsors/>
            </main>
            <Footer/>
        </>
    )
}

export default SpeakersPage;
