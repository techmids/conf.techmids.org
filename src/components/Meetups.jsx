// `url` is optional: the logo links to it when it is set
export const meetups = [
  {
    name: 'Fusion Events',
    image: '/meetups/fusion-events.png',
    url: 'https://meetup.thefusionhub.co.uk/',
  },
  {
    name: 'Brum PHP',
    image: '/meetups/brum-php.png',
    url: 'https://www.meetup.com/brumphp/',
  },
  {
    name: 'BrumJS',
    image: '/meetups/brum-js.png',
    url: 'https://www.meetup.com/brum_js/',
  },
  {
    name: 'Golang Birmingham',
    image: '/meetups/golang.png',
    url: 'https://www.meetup.com/golang-birmingham/',
  },
  {
    name: '#YouEqualTech Midlands',
    image: '/meetups/you-equal-tech.png',
    url: 'https://www.meetup.com/you-equal-tech-midlands/',
  },
  {
    name: 'BrumAI',
    image: '/meetups/brumai.png',
    url: 'https://www.meetup.com/brum-ai/',
  },
  {
    name: 'ManageOps',
    image: '/meetups/manageops.png',
    url: 'https://www.meetup.com/manageops/',
  },
  {
    name: 'Birmingham .NET User Group',
    image: '/meetups/net.png',
    url: 'https://www.meetup.com/birmingham-dotnet-and-xamarin-user-group/',
  },
  { name: 'codebar',
    image: '/meetups/codebar.png',
    url: 'https://codebar.io/birmingham',
  },
  {
    name: 'Code Your Future',
    image: '/meetups/code-your-future.png',
    url: 'https://codeyourfuture.io/',
  },
  {
    name: 'Angular Birmingham',
    image: '/meetups/angular.png',
  },
  {
    name: 'CSS Birmingham University',
    image: '/meetups/css.png',
    url: 'https://cssbham.com/',
  },
    {
      name: 'OWASP Birmingham',
        image: '/meetups/owasp.png',
    },
    {
      name: 'Hack the Midlands',
        image: '/meetups/htm.png',
        url: 'https://hackthemidlands.com/',
    },
    {
      name: 'Women in Tech',
        image: '/meetups/women-in-tech.png',
    }
]

export function Meetups() {
  return (
      <div className="mt-10 bg-white dark:bg-techmids-night">
        <div className="mx-auto max-w-6xl py-12 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
            <h2 className="mb-16 text-center font-display text-4xl font-medium tracking-tighter text-brand-900 dark:text-brand-100 sm:text-5xl">
              Backed by your favourite meetups and organisations
            </h2>
          </div>
          {/* Many of these logos are dark on transparent, so in dark mode the grid keeps a white panel */}
          <div className="grid grid-cols-2 items-center gap-4 sm:grid-cols-4 lg:grid-cols-8 dark:rounded-3xl dark:bg-white dark:px-4 dark:text-black">
            {meetups.map((meetup, index) => (
                <div
                    className="col-span-1 flex justify-center py-8 backdrop-opacity-10"
                    id={meetup.name}
                    key={index}
                >
                  {meetup.url ? (
                      <a href={meetup.url} target="_blank" rel="noopener noreferrer" title={meetup.name}>
                        <img className="h-16" src={meetup.image} alt={meetup.name} />
                      </a>
                  ) : (
                      <img
                          className="h-16"
                          src={meetup.image}
                          alt={meetup.name}
                          title={meetup.name}
                      />
                  )}
                </div>
            ))}
            <div className="col-span-1 flex justify-center py-8 backdrop-opacity-10">
              <p className="text-center">... and more</p>
            </div>
          </div>
        </div>
      </div>
  )
}
