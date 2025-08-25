'use client'

import { useEffect, useRef, useCallback } from 'react'
import EmblaCarousel from 'embla-carousel'
import { allImages } from '../../constants'
import { ChevronIcon } from '../icons'

const claimsData = [
  {
    img: allImages.claimDog.src,
    title: 'Lump removal surgery',
    subtitle: '1 year-old Miniature Daschund',
    vetBill: '$1,754',
    claimed: '$1,403',
  },
  {
    img: allImages.claimCat.src,
    title: 'Chronic Kidney disease diagnosis and treatment',
    subtitle: '8 year-old Domestic Shorthair',
    vetBill: '$2,508',
    claimed: '$2,257',
  },
  {
    img: allImages.claimDog2.src,
    title: 'Cruciate Ligament rupture surgery',
    subtitle: '3 year-old Golden Retriever',
    vetBill: '$4,838',
    claimed: '$4,264',
  },
]

export default function ClaimsSlider() {
  const emblaRef = useRef<HTMLDivElement>(null)
  const emblaApi = useRef<ReturnType<typeof EmblaCarousel> | null>(null)

  useEffect(() => {
    if (!emblaRef.current) return

    emblaApi.current = EmblaCarousel(emblaRef.current, {
      loop: true,
      align: 'start',
      slidesToScroll: 1,
      dragFree: false,
      containScroll: 'trimSnaps',
      skipSnaps: false,
      dragThreshold: 10,
      inViewThreshold: 0.7,
    })

    return () => {
      emblaApi.current?.destroy()
    }
  }, [])

  const scrollPrev = useCallback(() => {
    if (emblaApi.current) emblaApi.current.scrollPrev()
  }, [])

  const scrollNext = useCallback(() => {
    if (emblaApi.current) emblaApi.current.scrollNext()
  }, [])

  return (
    <section className="max-w-7xl mx-auto my-6 sm:my-12 px-5 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-2" data-aos="fade-up">
        Pet insurance claims <span className="text-primary">made easy</span>
      </h2>
      <p className="text-gray-500 text-base sm:text-xl" data-aos="fade-up" data-aos-duration="600">
        We’re proud to back Aussie pets when it matters most.
      </p>

      <div className="relative max-w-6xl mx-auto mt-12">
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex items-stretch transition-transform duration-500">
            {claimsData.map((item, i) => (
              <div
                key={i}
                className="embla__slide flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.333%] h-full px-0 sm:px-3"
              >
                <div
                  className="group rounded-lg overflow-hidden border border-primary bg-white h-full"
                  data-aos="flip-left"
                  data-aos-delay={i * 100}
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                    />
                  </div>

                  <div className="bg-pink-100 p-6 text-left min-h-[126px]">
                    <h3 className="text-lg font-bold line-clamp-2">{item.title}</h3>
                    <p className="line-clamp-1">{item.subtitle}</p>
                  </div>

                  <div className="flex text-white text-sm font-semibold">
                    <div className="max-w-[140px] text-left p-4 flex-1 bg-gray-700">
                      <p className="font-normal mb-1 text-lg">Vet bill</p>
                      <p className="text-xl font-bold">{item.vetBill}</p>
                    </div>
                    <div className="flex-1 p-4 bg-primary text-left">
                      <p className="font-normal mb-1 text-lg">Claimed with Knose</p>
                      <p className="text-xl font-bold">{item.claimed}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={scrollPrev}
          className="absolute left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg focus:outline-none p-2 sm:p-3 rounded-full hover:bg-gray-50 transition-colors"
          aria-label="Previous claims"
        >
          <ChevronIcon className="w-4 h-4 sm:w-5 sm:h-5 rotate-90 [&>path]:fill-primary" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg focus:outline-none p-2 sm:p-3 rounded-full hover:bg-gray-50 transition-colors"
          aria-label="Next claims"
        >
          <ChevronIcon className="w-4 h-4 sm:w-5 sm:h-5 -rotate-90 [&>path]:fill-primary" />
        </button>
      </div>
    </section>
  )
}
