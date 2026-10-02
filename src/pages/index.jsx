import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Meetups } from '@/components/Meetups'
import { Sponsors } from '@/components/Sponsors'
import { Images } from '@/components/Images'
import {EVENT, AVAILABLE_INFORMATION} from "../../event";
import Testimonials from "@/components/Testimonials";
import {Speakers} from "@/components/Speakers";
import {Schedule} from "@/components/Schedule";

export default function Home() {
    return (
        <HomePageWrapper>
            <Hero/>            
            <Images/>
            {AVAILABLE_INFORMATION.speakersAvailable && <Speakers/>}
            {AVAILABLE_INFORMATION.scheduleAvailable && <Schedule id="schedule"/>}
            <Testimonials/>
            <Sponsors/>
            <Meetups/>
        </HomePageWrapper>
    )
}


const HomePageWrapper = ({children}) => {
    return <>
            <Head>
                <title>TechMids Conf - Birmingham's community-driven tech conference</title>
                <meta
                    name="description"
                    content={`TechMids Conf is an all day, full stack conference on ${EVENT.date} Come along for a day of inspiring talks, social chatter and fun.`}
                />
                <link rel="canonical" href="https://conf.techmids.org/" />
                {/* Open Graph / Social Media cards */}
                <meta property="og:site_name" content="TechMids Conf" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://conf.techmids.org/" />
                <meta property="og:title" content="TechMids Conf 2026" />
                <meta property="og:description" content="Birmingham's community-driven tech conference." />
                <meta property="og:image" content="https://conf.techmids.org/launch.jpg"/>

                <script dangerouslySetInnerHTML={
                    {
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-PZHC3QJT');`,
                    }
                }/>
            </Head>
            <Header />
        <main>
            {children}
        </main>
        <Footer />
    </>
}
