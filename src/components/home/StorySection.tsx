import { allImages, iconImages, logoImages, sectionImages } from '../../constants'

export default function StorySection() {
  return (
    <section className="max-w-6xl mx-auto py-12 px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-[40px] font-bold" data-aos="fade-up">
          <span className="text-pink-600">Discover</span> <span className="text-gray-800">our story</span>
        </h2>
        <p className="text-gray-500 mt-3 text-base sm:text-lg" data-aos="fade-up" data-aos-duration="600">
          Our purpose is to make Australian pets the healthiest and happiest in the world.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row-reverse gap-8 sm:gap-[64px] px-3">
        <div className="space-y-4 flex-1 text-left" data-aos="fade-up" data-aos-duration="700">
          <ul className="space-y-1">
            {[
              'Pet care should be simple, easy and convenient.',
              'Prevention is better than cure, but understand accidents and illness do happen.',
              'Everyone should have access to, and be able to afford great pet care.',
              'In the power and importance of local independent veterinary clinics.',
              'Every customer, vet, pet owner and supplier should be treated with care and respect.',
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <img src={iconImages.checkIconPink.src} alt="Check" className="w-5 h-5 mt-1" />
                <p className="sm:text-lg font-normal">{text}</p>
              </li>
            ))}
          </ul>

          <a href="#" className="inline-block mt-1 text-lg text-primary hover:underline">
            Read more about our story
          </a>

          <div className="flex flex-col gap-3 mt-2">
            <img src={logoImages.partnerLogo.src} alt="ProductReview" className="w-[70%]" />
            <img src={allImages.productReviewLgIcon.src} alt="ProductReview" className="w-[84%]" />
            <p className="text-sm text-gray-500">Rated 4.6 on ProductReview and Google Reviews as of February 2025</p>
          </div>
        </div>

        <div className="max-w-[408px] w-full" data-aos="fade-up" data-aos-duration="800">
          <img src={sectionImages.discover.src} alt="Discover" className="w-full rounded-[18px]" />
        </div>
      </div>
    </section>
  )
}
