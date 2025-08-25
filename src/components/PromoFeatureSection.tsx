import { allImages, iconImages } from '../constants'
import Divider from './Divider'
import GroupActionButton from './GroupActionButton'

export default function PromoFeatureSection() {
  return (
    <section className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-[64px] py-6 sm:py-[50px] flex flex-col items-center sm:flex-row-reverse gap-10 sm:gap-[100px]">
      <div className="flex-1 px-5 sm:px-0">
        <Divider className="mb-8 sm:mb-5" />
        <h2 className="text-lg sm:text-xl font-bold mb-5" data-aos="fade-up">
          A Simple and Transparent Cover for <span className="text-primary">Your Peace of Mind</span>
        </h2>

        <ul className="space-y-8" data-aos="fade-up" data-aos-duration="600">
          {[
            {
              title: 'Customisable Plans',
              description:
                'Choose your annual cover level up to $25,000, benefit percentage, and excess to suit your budget.',
            },
            {
              title: 'No Sub-limits on Vet Bills',
              description: 'We don’t cap individual treatment costs within your annual limit.',
            },
            {
              title: 'Fast, Easy Claims',
              description: 'Submit claims online and get reimbursed quickly.',
            },
            {
              title: '24/7 Pet Health Advice',
              description: 'Get free, unlimited access to expert support anytime, anywhere.',
            },
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-4">
              <img src={iconImages.checkIconPink.src} alt="Icon" className="w-6 h-6 shrink-0 mt-1" />
              <div className="flex-1">
                <span className="font-bold text-lg sm:text-xl">{item.title} •</span>
                <span className="ml-1">{item.description}</span>
              </div>
            </li>
          ))}
        </ul>

        <GroupActionButton className="mt-12" requestClassName="hidden sm:flex" />
      </div>

      <div className="relative shrink-0 sm:max-w-[356px]" data-aos="zoom-in" data-aos-duration="700">
        <img
          src={allImages.promoFeature.src}
          alt="Pet insurance promo feature"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  )
}
