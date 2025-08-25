import { logoImages } from '../constants'

export default function AwardsSection() {
  return (
    <section className="bg-primary text-white px-5 pt-4 pb-8 sm:py-0">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-2 sm:gap-12 text-center lg:text-left">
        <div className="flex items-center justify-center gap-4 flex-wrap" data-aos="zoom-out">
          <img src={logoImages.partnerLogo.src} alt="Awards" className="w-[428px] object-contain" />
        </div>

        {/* Text content */}
        <div className="lg:max-w-xl">
          <h2 className="text-xl font-bold mb-4">One of the most awarded pet insurance in Australia †</h2>
          <p className="text-left">
            With over 104,000 claims processed and $34 million benefits paid , we’re proud to back Aussie pets when it
            matters most.
          </p>
        </div>
      </div>
    </section>
  )
}
