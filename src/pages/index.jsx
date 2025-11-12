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
                <title>TechMids Conf - A community-driven tech conference</title>
                <meta
                    name="description"
                    content={`TechMids Conf is an all day, full stack conference on ${EVENT.date} Come along for a day of inspiring talks, social chatter and fun.`}
                />
                <meta name="image" property="og:image" content="https://conf.techmids.io/launch.jpg"/>
                <meta name="google-site-verification" content="2y4-3KQkzYOn2-fx1oSZ-8AMc9gwySoCQJlji4Q1yp0" />
                <meta name="google-site-verification" content="QbrP8JrBjruuQ7UVZ5OfaVbT7ewQlygk6zAk0hTy01I" />
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
