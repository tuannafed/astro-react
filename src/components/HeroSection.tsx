import GroupActionButton from './GroupActionButton'
import ReviewBox from './ReviewBox'
import HeroTitle from './landing/HeroTitle'
import { allImages } from '../constants'

export default function HeroSection({ variant }: { variant: 'landing' | 'home' | 'partner' }) {
  const title =
    variant === 'landing' ? (
      <HeroTitle />
    ) : variant === 'home' ? (
      'Award-winning† Pet Insurance in Australia'
    ) : (
      'Exclusive Pet Insurance Promo for Pet Price Club’s Pet Owners'
    )
  const image = variant === 'landing' ? allImages.heroAwardsLanding : allImages.heroAwardsLanding

  const description =
    variant === 'home' &&
    'Award-winning† pet insurance with optional extra benefits <br/> Pet care plans customised for vets and pet owners <br/> We’re pet specialists. It’s all we do!'

  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-[42px] py-5 sm:py-[50px] flex flex-col sm:flex-row-reverse items-center gap-10 sm:gap-[100px]">
      <div className="relative shrink-0 max-w-[410px]" data-aos="fade-in">
        <img src={image.src} alt="Pet insurance promo feature" />
      </div>

      <div className="space-y-7 sm:space-y-5">
        <div className="space-y-5 sm:px-7">
          <h1 className="text-center sm:text-left text-2xl sm:text-3xl font-bold leading-tight" data-aos="fade-up">
            {title}
          </h1>
          {!!description && (
            <p
              className="pl-6 font-normal"
              data-aos="fade-up"
              data-aos-duration="600"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}
          <p className="font-bold text-center sm:text-left" data-aos="fade-up" data-aos-duration="700">
            Join over 60,000 Insured Aussie Pets ⓘ
          </p>
          <GroupActionButton />
        </div>

        <ReviewBox />
      </div>
    </section>
  )
}
