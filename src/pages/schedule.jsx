import { Layout } from '@/new/Layout'
import { ScheduleBoard } from '@/new/ScheduleBoard'
import { Eyebrow } from '@/new/ui'
import { shortDate } from '@/new/data'
import { EVENT, AVAILABLE_INFORMATION } from '../../event'
import { OVERALL_START, OVERALL_END } from '../../schedule'
import { clock } from '@/new/data'

export default function SchedulePage() {
  return (
    <Layout
      path="/schedule"
      current="Schedule"
      title="Schedule - TechMids Conf"
      description={`TechMids Conf is an all day, full stack conference on ${EVENT.date} Come along for a day of inspiring talks, social chatter and fun.`}
    >
      <section className="tm-pagehead">
        <div className="tm-wrap tm-wrap-wide">
          <Eyebrow route="/schedule">
            {shortDate()} · {clock(OVERALL_START)}–{clock(OVERALL_END)} · {EVENT.venue}
          </Eyebrow>
          <h1 className="tm-h1 tm-h1-page">{AVAILABLE_INFORMATION.scheduleAvailable ? 'Schedule' : 'Schedule Coming Soon'}</h1>
          {AVAILABLE_INFORMATION.scheduleAvailable && (
            <p className="tm-lede">
              Your day will be composed of 30-45 minute sessions including plenty of time to chat, network and
              move between talks. Three screens run side by side: tap <b>Pick</b> on the talks you want and
              they collect under <b>My day</b>.
            </p>
          )}
        </div>
      </section>
      {AVAILABLE_INFORMATION.scheduleAvailable && (
        <div className="tm-wrap tm-wrap-wide tm-schedule-wrap">
          <ScheduleBoard />
        </div>
      )}
    </Layout>
  )
}
