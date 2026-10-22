import React from "react";
import {Speakers} from "@/components/Speakers";
import {PageMeta} from "@/components/PageMeta";
import {Header} from "@/components/Header";
import {Sponsors} from "@/components/Sponsors";
import {Footer} from "@/components/Footer";

export const SpeakersPage = () => {
    return (
        <>
            <PageMeta
                path="/sharing"
                title="TechMids Conf - Birmingham's community-driven tech conference"
                description="Our Speaker lineup"
                noindex
            />
            <Header/>
            <main>
                <Speakers sharing={true}/>
            </main>
            <Footer/>
        </>
    )
}

export default SpeakersPage;
