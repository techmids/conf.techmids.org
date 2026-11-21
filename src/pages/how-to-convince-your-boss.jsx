import { Layout } from '@/new/Layout'
import { Arrow, Button, Eyebrow } from '@/new/ui'
import { EVENT } from '../../event'

const TicketCta = () =>
  EVENT.onSale ? (
    <div className="tm-cta">
      <div>
        <h3 className="tm-h3">
          Tickets are <span className="tm-hl">on sale now!</span>
        </h3>
        <p>
          {EVENT.date} · {EVENT.venue}, {EVENT.address}
        </p>
      </div>
      <div>
        <Button href={EVENT.ticketLink}>
          Get your ticket for {EVENT.edition} now <Arrow />
        </Button>
      </div>
    </div>
  ) : null

// Wording is unchanged from src/pages/how-to-convince-your-boss.jsx
export default function HowToConvinceYourBoss() {
  return (
    <Layout
      path="/how-to-convince-your-boss"
      current="Convince your boss"
      title="How to convince your boss to send you to TechMids Conf"
      description="Our guide to making the business case for a day at TechMids Conf, Birmingham's community-driven tech conference."
    >
      <article className="tm-wrap tm-article">
        <Eyebrow route="/how-to-convince-your-boss">Our Guide</Eyebrow>
        <h1 className="tm-h1 tm-h1-page">How to convince your boss to send you to a conference</h1>
        <p className="tm-lede">
          You are part of a team building software solutions all day every day. How can you convince your boss
          to give you a day to attend this amazing conference?
        </p>
        <img className="tm-article-img" src="/how-to-convince-your-boss/venue.jpg" alt="" />
        <div className="tm-prose">
          <h2>
                                Talk business. There’s an ROI in attending a conference.
                            </h2>
                            <p>
                                When you approach your manager to ask for a day away from your desk to attend, know that you are not the
                                only one who benefits from spending a day watching talks and sipping free coffee.
                                Companies profit in many ways too – after all, their employees grow their knowledge, motivation and network!
                            </p>
                            <p>Companies are usually aware of this, and you might already have a conference budget in
                                your contract. Maybe your manager actively helps you to grow, and encourages you to
                                attend events. But not all of us get that support handed on a silver platter – so know
                                your arguments, and you can convince even the most skeptical boss.</p>

                            <h3>Training</h3>
                            <ul>
                                <li>Explain why you want to attend TechMids Conf, and what you plan to learn there.
                                    Mention any specific pain points your team might have: slow processes, knowledge
                                    gaps, lack of code quality; and point out how attending TechMids Conf would boost you
                                    and your team in tackling these issue</li>
                                <li>Offer to give a lunch talk about the conference and your most important take-aways,
                                    to share your learnings with the team. At the very minimum, plan to send a quick
                                    email to your team with a summary and some links to interesting tools or techniques
                                    you learned about.</li>
                                <li>Volunteer to write a blog post about your experience on the company blog. This is not
                                    only a good way to report back to your team, but it also publicly shows your company’s
                                    involvement and participation in community events.</li>
                            </ul>

                            <h3>Motivation and Inspiration</h3>
                            <p>
                                TechMids Conf brings together international experts on frontend, backend, agile, DevOps
                                and fullstack development, both on stage and within its audience. You get to learn from
                                them not only during talks, but also during breaks. Connecting, chatting and learning
                                from top-notch talent in the industry can be incredibly inspiring. You’ll find yourself
                                surrounded by a diverse group of people who work on the exact same problems you do and
                                you’ll return motivated and eager to apply your new learnings in your team. What boss
                                wouldn’t love to see some fresh energy?
                            </p>
                            <h3>Recruitment</h3>
                            <p>
                                Networking is your special skill? Offer to recruit at the event. Your company is
                                desperately looking for new talent? Great – there’s no better place to meet skilled
                                engineers than TechMids Conf. Offer to actively connect with people and let them know
                                how great working at your company is.
                            </p>
                            <h3>Promote your product</h3>
                            <p>
                                Your company sells a service or a product that is relevant to other developers? Show some
                                presence at TechMids Conf! You can raise awareness for your brand, get direct feedback from
                                your users, gain some new ones, and show that your company cares about its community.
                            </p>
        </div>
        <TicketCta />
        <img className="tm-article-img" src="/how-to-convince-your-boss/chairs.jpg" alt="" />
        <div className="tm-prose">
          <h2>Be prepared for a NO – and don’t give up</h2>
                    <p>You might hear one of the following:</p>
                    <p className="tm-said">
                        “We have no budget”
                    </p>
                    <p>
                        Don’t give up, and be prepared with the numbers. Calculate what the trip would cost,
                        and consider accommodation and travel costs if you need these covered. Keep in mind that
                        your company can most likely deduct tax from everything. Plus, the ticket is free!
                    </p>
                    <p>
                        Is this investment in your training worth it or not? Ask your boss why they think that it isn’t.
                    </p>
                    <p className="tm-said">
                        “We have no time”
                    </p>
                    <p>
                        Perhaps your management thinks that you can’t miss a day in the office, and that getting
                        stuff done is more important than professional education and improvement.
                    </p>
                    <p>
                        Be prepared with some hard facts: Remind them how many hours you wasted on solving a
                        problem recently. Is your code base a mess and hardly maintainable? Are your
                        designers complaining about super slow implementation of features?
                    </p>
                    <p>
                        The work hours you’ll miss by attending TechMids Conf will easily be gained back later!
                    </p>
                    <h2>But I already went to 10 conferences this year</h2>
                    <p>Great! We hope you got to attend some insightful events. Did you make sure to thank your
                        company for the opportunity, and report back on your learnings? If you did: Good job!
                        You are helping to build a company culture that values their employees’ learning and
                        growth. Why not take it one step further? Look around: Are there people in your team
                        who’d really benefit from attending TechMids Conf? Maybe they are not in a position to ask,
                        or are not experienced in negotiating like you are. Advocate for them! Point out to your
                        boss that your junior dev or frontend trainee could really benefit from the experience,
                        or be a mentor to your coworkers and share some tricks on how to successfully approach
                        your manager about conference tickets.
                    </p>
                    <h2>I’m my own boss</h2>
                    <p>Congratulations, then you only have to convince yourself! For freelancers, all of the
                        above reasons apply, too. We’d even argue that a conference like TechMids Conf is the
                        place to meet and connect with new clients.
                    </p>
        </div>
        <TicketCta />
      </article>
    </Layout>
  )
}
