import React from "react";
import {Speakers} from "@/components/Speakers";
import Head from "next/head";
import {Header} from "@/components/Header";
import {EVENT, AVAILABLE_INFORMATION} from "../../../event";
import {Sponsors} from "@/components/Sponsors";
import {Footer} from "@/components/Footer";

export const SpeakersPage = () => {
    return (
        <>
            <Head>
                <title>TechMids Conf - Birmingham's community-driven tech conference</title>
                <meta
                    name="description"
                    content="Our Speaker lineup"
                />
            </Head>
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
