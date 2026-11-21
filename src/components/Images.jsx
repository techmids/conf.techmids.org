export const images = [
  {
    "name": "1",
    "source": "/gallery/2025/1.jpg"
  },
  {
    "name": "3",
    "source": "/gallery/2025/3.jpg"
  },
  {
    "name": "26",
    "source": "/gallery/2025/26.jpg"
  },
  {
    "name": "57",
    "source": "/gallery/2025/57.jpg"
  },
  {
    "name": "168",
    "source": "/gallery/2025/168.jpg"
  },
  {
    "name": "178",
    "source": "/gallery/2025/178.jpg"
  },
  {
    "name": "183",
    "source": "/gallery/2025/183.jpg"
  },
  {
    "name": "207",
    "source": "/gallery/2025/207.jpg"
  },
  {
    "name": "205",
    "source": "/gallery/2025/205.jpg"
  },
  {
    "name": "213",
    "source": "/gallery/2025/213.jpg"
  },
  {
    "name": "234",
    "source": "/gallery/2025/234.jpg"
  },
  {
    "name": "248",
    "source": "/gallery/2025/248.jpg"
  },
  {
    "name": "256",
    "source": "/gallery/2025/256.jpg"
  },
  {
    "name": "272",
    "source": "/gallery/2025/272.jpg"
  },
  {
    "name": "336",
    "source": "/gallery/2025/336.jpg"
  },
  {
    "name": "345",
    "source": "/gallery/2025/345.jpg"
  },
  {
    "name": "367",
    "source": "/gallery/2025/367.jpg"
  },
  {
    "name": "404",
    "source": "/gallery/2025/404.jpg"
  },
  {
    "name": "414",
    "source": "/gallery/2025/414.jpg"
  },
  {
    "name": "449",
    "source": "/gallery/2025/449.jpg"
  }
]

export function Images() {
  return (
      <div key="This-Image" className="grid pt-4 px-4 grid-cols-3 md:grid-cols-5 gap-4">
        {images.map((image, index) => (
            <div key={image.alt}>
              <img className="h-auto max-w-full rounded-lg"
                   src={image.source} alt={image.alt} />
            </div>
        ))}
      </div>
  )
}
