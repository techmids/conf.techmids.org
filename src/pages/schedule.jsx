import { PageMeta } from '@/components/PageMeta'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Schedule } from '@/components/Schedule';
import {EVENT, AVAILABLE_INFORMATION} from "../../event";
import { Sponsors } from '@/components/Sponsors';

export default function Covid() {
  
  return (
    <>
      <PageMeta
        path="/schedule"
        noindex={!AVAILABLE_INFORMATION.scheduleAvailable}
        title="Schedule - TechMids Conf"
        description={`TechMids Conf is an all day, full stack conference on ${EVENT.date} Come along for a day of inspiring talks, social chatter and fun.`}
      />
      <Header />
      <main id="Schedule">
        {AVAILABLE_INFORMATION.scheduleAvailable ? (
          <main>
            <h1 className="text-4xl font-bold text-center my-8">Schedule</h1>
            <Schedule/>
            <Sponsors/>
          </main>
        ) : (
          <h1 className="text-4xl font-bold text-center my-8">Schedule Coming Soon</h1>
        )}
        
        
      </main>
      <Footer />
    </>
  )
}
