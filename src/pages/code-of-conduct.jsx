import { PageMeta } from '@/components/PageMeta'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { CodeOfConduct } from '@/components/CodeOfConduct'
import {EVENT} from "../../event";

export default function CoC() {
  return (
    <>
      <PageMeta
        path="/code-of-conduct"
        title="Code of Conduct - TechMids Conf"
        description={`TechMids Conf is an all day, full stack conference on ${EVENT.date} Come along for a day of inspiring talks, social chatter and fun.`}
      />
      <Header />
      <main>
        <CodeOfConduct />
      </main>
      <Footer />
    </>
  )
}
