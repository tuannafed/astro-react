import { useState, useEffect, useMemo } from 'react'
import { allImages } from '../../constants'
import { ChevronIcon } from '../icons'

const testimonialsHero = {
  id: 1,
  name: 'Craig D.',
  source: 'Google Reviews',
  quote: '10/10 personalised service!',
  content: `In January, we brought a puppy (Bella) into our lives – she is beautiful! Recently she had a few gastro issues and subsequent vet visits. Knose Pet Insurance has been awesome. They acknowledged the claims immediately, and then followed up with personal emails advising us of the progress of our claims. We even received a message asking after Bella and a follow up to say how pleased they were that Bella is now doing well. Top class personalized service and a thorough explanation of the claim refunds. 10/10 guys!`,
}

const testimonials = [
  {
    id: 2,
    name: 'Marcelle',
    source: 'ProductReview.com.au',
    quote: 'Quick refund process',
    content: `Submitted a claim for the first time after 12 months of insurance and everything went smoothly. I received regular updates of the progress of my claim and the refund process was quick once the team had received all the information from the vet.`,
  },
  {
    id: 3,
    name: 'James',
    source: 'Reviews.io',
    quote: 'Affordable pet insurance with easy claims!',
    content: `Knose has been a great choice for pet insurance. The premiums are relatively affordable, claims are super easy to make by just uploading vet invoices, and the 24 hour phone that connects you with a vet nurse is a brilliant feature.`,
  },
  {
    id: 4,
    name: 'Laura',
    source: 'Reviews.io',
    quote: 'Amazing claims service',
    content: `We searched for quite sometime for pet insurance for our toy poodle puppy and we're so glad we found Knose's Dog Insurance. They have been amazing. I really appreciate how you can call them with any query you might have and speak to someone in Australia who is clear and concise. Easy to put a claim through and you're emailed throughout until your claim has been paid.`,
  },

  {
    id: 2,
    name: 'Marcelle',
    source: 'ProductReview.com.au',
    quote: 'Quick refund process',
    content: `Submitted a claim for the first time after 12 months of insurance and everything went smoothly. I received regular updates of the progress of my claim and the refund process was quick once the team had received all the information from the vet.`,
  },
  {
    id: 3,
    name: 'James',
    source: 'Reviews.io',
    quote: 'Affordable pet insurance with easy claims!',
    content: `Knose has been a great choice for pet insurance. The premiums are relatively affordable, claims are super easy to make by just uploading vet invoices, and the 24 hour phone that connects you with a vet nurse is a brilliant feature.`,
  },
  {
    id: 4,
    name: 'Laura',
    source: 'Reviews.io',
    quote: 'Amazing claims service',
    content: `We searched for quite sometime for pet insurance for our toy poodle puppy and we're so glad we found Knose's Dog Insurance. They have been amazing. I really appreciate how you can call them with any query you might have and speak to someone in Australia who is clear and concise. Easy to put a claim through and you're emailed throughout until your claim has been paid.`,
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(1)

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth >= 1024) {
          setCardsPerView(3)
        } else if (window.innerWidth >= 768) {
          setCardsPerView(2)
        } else {
          setCardsPerView(1)
        }
      }
    }

    handleResize()
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  const totalSlides = useMemo(() => Math.ceil(testimonials.length / cardsPerView), [cardsPerView])
  const visibleTestimonials = useMemo(
    () => testimonials.slice(currentIndex * cardsPerView, (currentIndex + 1) * cardsPerView),
    [currentIndex, cardsPerView]
  )

  return (
    <section className="bg-white py-12 sm:py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-4xl md:text-4xl font-bold mb-4 text-center" data-aos="fade-up">
          <span className="text-primary font-bold">Trusted by</span> Australian pet owners
        </h2>
        <p className="text-gray-500 mb-4 text-lg text-center" data-aos="fade-up" data-aos-duration="600">
          Real testimonials from those who know best—the pet owners themselves.
        </p>

        <div
          className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 my-6"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <p className="sm:text-xl">
            <span className="font-semibold">Excellent</span>
            <span className="text-warning mx-1">★★★★★</span>
            <span>
              <strong>4.6</strong> based on <strong>782</strong> Reviews
            </span>
          </p>
        </div>

        {/* Featured */}
        <div className="sm:px-10 py-6" data-aos="fade-up" data-aos-duration="800">
          <div className="bg-pink-100 rounded-3xl p-6 py-10 sm:p-14 flex flex-col lg:flex-row gap-8 sm:gap-14 items-center text-left">
            <div className="relative flex-1">
              <div className="text-primary absolute -top-10 text-[88px] font-['Arial']">“</div>
              <h3 className="text-xl sm:text-3xl font-bold mb-3 pt-10">{testimonialsHero.quote}</h3>
              <p className="text-lg font-normal">{testimonialsHero.content}</p>
              <div className="mt-4 font-semibold text-gray-500">
                — {testimonialsHero.name} <span className="text-warning ">★★★★★</span>
                <br />
                <span className="text-gray-500 font-normal italic">Source: {testimonialsHero.source}</span>
              </div>
            </div>
            <div className="w-full max-w-[380px] flex-shrink-0 rounded-lg overflow-hidden">
              <img src={allImages.dog.src} alt="dog" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          {totalSlides > 1 && (
            <>
              <button
                onClick={() => setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)}
                className="absolute left-0 top-1/2 -translate-y-1/2 text-xl z-10 bg-white shadow-md focus:outline-none p-2 rounded-full hover:bg-gray-50 transition-colors"
                aria-label="Previous testimonials"
              >
                <ChevronIcon className="w-5 h-5 rotate-90 [&>path]:fill-primary" />
              </button>

              <button
                onClick={() => setCurrentIndex((prev) => (prev + 1) % totalSlides)}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-xl z-10 bg-white shadow-md focus:outline-none p-2 rounded-full hover:bg-gray-50 transition-colors"
                aria-label="Next testimonials"
              >
                <ChevronIcon className="w-5 h-5 -rotate-90 [&>path]:fill-primary" />
              </button>
            </>
          )}

          {/* Cards */}
          <div className="flex items-stretch gap-4 sm:gap-6 px-4 sm:px-6 md:px-10">
            {visibleTestimonials.map((t, i) => (
              <div
                key={t.id}
                className="bg-gray-100 w-full rounded-3xl flex-1"
                data-aos="flip-left"
                data-aos-duration="800"
                data-aos-delay={i * 100}
              >
                <div className="p-4 sm:p-6 flex rounded-3xl flex-col h-full transition-all duration-300 hover:shadow-xl relative">
                  <div className="text-primary absolute -top-1 text-[60px] sm:text-[88px] font-['Arial']">“</div>
                  <h4 className="font-semibold text-lg sm:text-xl mb-3 pt-8 sm:pt-10">{t.quote}</h4>
                  <p className="font-normal mb-3 text-sm sm:text-base flex-grow">{t.content}</p>
                  <div className="font-semibold text-gray-500 text-sm sm:text-base">
                    — {t.name} <span className="text-warning">★★★★★</span>
                    <br />
                    <span className="text-gray-500 font-normal italic">Source: {t.source}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {totalSlides > 1 && (
            <div className="mt-6 flex justify-center gap-2">
              {Array.from({ length: totalSlides }, (_, i) => (
                <span
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
                    i === currentIndex ? 'bg-primary' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
