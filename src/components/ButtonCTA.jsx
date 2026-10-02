import { ButtonLink } from '@/components/Button'
import {EVENT, AVAILABLE_INFORMATION} from "../../event";
import Script from "next/script";
import { VenueInfo } from './VenueInfo';

export function ButtonCTA() {
    return (
      <>
        <Script
          src="https://js.tito.io/v2/with/inline"
          strategy="lazyOnload">
        </Script>
        <div className="my-4 grid gap-10 px-4">
          <div className="grid grid-cols-1 gap-10">
            {EVENT.onSale ? (
              <>
                <div className="my-10 grid grid-cols-1 gap-10">
                  <h1 className="font-display text-4xl font-bold tracking-tighter text-white sm:text-7xl">
                    <span className="block xl:inline">
                      Tickets are on sale now!
                    </span>
                  </h1>
                </div>
                <VenueInfo/>

                <tito-widget event={EVENT.titoId}></tito-widget>

                <ButtonLink
                  href={EVENT.ticketLink}
                  rel="noopener"
                  target="_blank"
                  className="w-full"
                >
                  Get your ticket for {EVENT.edition} now
                </ButtonLink>
              </>
            ) : null}
            {EVENT.soldOut ? (
              <>
                <div className="my-10 grid grid-cols-1 gap-10">
                  <h1 className="font-display text-4xl font-bold tracking-tighter text-white sm:text-7xl">
                    <span className="block xl:inline">We are SOLD OUT!</span>
                    <span className="font-display text-2xl font-bold tracking-tighter text-white sm:text-4xl">Check back later to see if we have any tickets available</span>
                  </h1>
                </div>
              </>
            ) : null}
          </div>
          {EVENT.CFPOpen && (
            <div className="my-10 grid grid-cols-1 gap-10">
              <div className="my-10 grid grid-cols-1 gap-10">
                <h1 className="font-display text-4xl font-bold tracking-tighter text-white sm:text-7xl">
                  <span className="block xl:inline">
                    Ready to take the stage?
                  </span>
                </h1>
              </div>
              <p className="mt-0.5 text-2xl font-semibold tracking-tight text-brand-700">
                Our Call for Proposals is now open! Apply now to present a talk at {EVENT.edition}
              </p>
              <ButtonLink
                href={EVENT.CFPLink}
                rel="noopener"
                target="_blank"
                className="w-full"
              >
                Submit to our CFP
              </ButtonLink>
            </div>
          )}

        </div>
      </>
    )
}
