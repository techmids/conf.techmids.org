import Image from "next/image";
import {sponsorTiers} from "../../event";
const imageDimensions = {
    width: 200,
    height: 200
}

export function SponsorTiers() {
    function printSponsors(tier, sponsors, imageFactor =1) {
        if (sponsors?.length === 0) {
            return null
        }
        return (
            <div className="py-4">
                <p className="text-center text-base font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-300">
                    {tier} Sponsor{sponsors.length > 1 ? "s": null}
                </p>
                <div className="mx-auto max-w-[70%] mt-2 flex flex-wrap justify-evenly grid-cols-3 gap-0.5" >
                    {/* The logos are drawn for a light background, so in dark mode each keeps a white tile */}
                    {sponsors.map((sponsor) => (
                        <div key={sponsor.name} className="flex justify-center items-center p-4 dark:m-2 dark:rounded-2xl dark:bg-white">
                            <a
                                href={sponsor.url}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Image
                                    width={imageDimensions.width * imageFactor}
                                    height={imageDimensions.height * imageFactor}
                                    src={sponsor.image}
                                    alt={sponsor.name}
                                />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    return (
        <div className="mt-12 mb-8 bg-white dark:bg-techmids-night">
            {printSponsors("Headline", sponsorTiers.headline.sponsors, 2)}
            {printSponsors("Gold", sponsorTiers.gold.sponsors, 1.75)}
            {printSponsors("Silver", sponsorTiers.silver.sponsors, 1.5)}
            {printSponsors("Bronze", sponsorTiers.bronze.sponsors, 0.75)}

        </div>
    )
}
