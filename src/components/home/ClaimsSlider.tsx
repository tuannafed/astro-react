'use client'

import { useEffect, useRef } from 'react'
import EmblaCarousel from 'embla-carousel'
import { allImages } from '../../constants'

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
    })

    const prevBtn = document.getElementById('prevBtn')
    const nextBtn = document.getElementById('nextBtn')

    prevBtn?.addEventListener('click', () => emblaApi.current?.scrollPrev())
    nextBtn?.addEventListener('click', () => emblaApi.current?.scrollNext())

    return () => {
      emblaApi.current?.destroy()
    }
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

        <span
          id="prevBtn"
          className="absolute left-4 sm:-left-4 top-1/2 -translate-y-1/2 z-10 hover:text-primary w-6 h-6 shrink-0 transform transition-transform duration-300 border-t-3 border-r-3 border-gray-500 -rotate-135 cursor-pointer"
        />
        <span
          id="nextBtn"
          className="absolute right-4 sm:-right-4 top-1/2 -translate-y-1/2 z-10 hover:text-primary w-5 h-5 shrink-0 transform transition-transform duration-300 border-t-3 border-r-3 border-gray-500 rotate-45 cursor-pointer"
        />
      </div>
    </section>
  )
}
