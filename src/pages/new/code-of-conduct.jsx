import { Layout } from '@/new/Layout'
import { Eyebrow } from '@/new/ui'
import { EVENT } from '../../../event'

// Wording is unchanged from src/components/CodeOfConduct.jsx
export default function CodeOfConductPage() {
  return (
    <Layout
      path="/code-of-conduct"
      title="Code of Conduct - TechMids Conf"
      description={`TechMids Conf is an all day, full stack conference on ${EVENT.date} Come along for a day of inspiring talks, social chatter and fun.`}
    >
      <article className="tm-wrap tm-article">
        <Eyebrow route="/code-of-conduct">Code Of Conduct</Eyebrow>
        <h1 className="tm-h1 tm-h1-page">The Quick Version</h1>
        <div className="tm-prose tm-prose-lg">
          <p>
            All attendees, speakers, sponsors, and volunteers at TechMids Conf
            are required to agree with the following code of conduct.
          </p>
          <p>
            Organizers will enforce this code throughout the event.
          </p>
          <p>
            We are expecting cooperation from all participants to help ensure a
            safe environment for everybody.
          </p>
          <p>
            Our conference is dedicated to providing a harassment-free
            conference experience for everyone, regardless of gender, gender
            identity and expression, age, sexual orientation, disability,
            physical appearance, body size, race, ethnicity, religion (or lack
            thereof), or technology choices.
          </p>
          <p>
            We do not tolerate harassment of conference participants in any
            form.
          </p>
          <p>
            Sexual language and imagery is not appropriate for any conference
            venue, including talks, workshops, parties, Twitter, and other
            online media.
          </p>
          <p>
            Conference participants violating these rules may be sanctioned or
            expelled from the conference without a refund at the discretion of
            the conference organizers.
          </p>
          <h2 className="tm-h2">The Less Quick Version</h2>

            <p>
              Harassment includes offensive verbal comments related to gender,
              gender identity and expression, age, sexual orientation,
              disability, physical appearance, body size, race, ethnicity,
              religion, technology choices, sexual images in public spaces,
              deliberate intimidation, stalking, following, harassing
              photography or recording, sustained disruption of talks or other
              events, inappropriate physical contact, and unwelcome sexual
              attention. Participants asked to stop any harassing behavior are
              expected to comply immediately.
            </p>
            <p>
              Sponsors are also subject to the anti-harassment policy. In
              particular, sponsors should not use sexualized images, activities,
              or other material. Booth staff (including volunteers) should not
              use sexualized clothing/uniforms/costumes, or otherwise create a
              sexualized environment.
            </p>
            <p>
              If a participant engages in harassing behavior, the conference
              organizers may take any action they deem appropriate, including
              warning the offender or expulsion from the conference with no
              refund.
            </p>
            <p>
              If you are being harassed, notice that someone else is being
              harassed, or have any other concerns, please contact a member of
              conference staff immediately.
            </p>
            <p>
              Conference staff can be identified by a TechMids t-shirt.
              Conference staff will be happy to help participants contact
              hotel/venue security or local law enforcement, provide escorts, or
              otherwise assist those experiencing harassment to feel safe for
              the duration of the conference. We value your attendance.
            </p>
            <p>
              We expect participants to follow these rules at conference and
              workshop venues and conference-related social events.
            </p>
            <p>
              The TechMids Conf Code of Conduct is based on{' '}
              <a href="https://confcodeofconduct.com">
                confcodeofconduct.com.
              </a>
            </p>
        </div>
      </article>
    </Layout>
  )
}
