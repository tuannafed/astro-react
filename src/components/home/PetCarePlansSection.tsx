import { sectionImages } from '../../constants'

export default function PetCarePlansSection() {
  const plans = [
    {
      title: 'Dog & Puppy Insurance',
      image: sectionImages.insuranceDog.src,
      href: '#',
    },
    {
      title: 'Cat & Kitten Insurance',
      image: sectionImages.insuranceCat.src,
      href: '#',
    },
    {
      title: 'Routine Care Plans',
      image: sectionImages.insuranceDog2.src,
      href: '#',
    },
  ]

  return (
    <section className="max-w-7xl mx-auto py-6 sm:py-12">
      <div className="bg-blue-light sm:rounded-2xl p-6 sm:px-12 sm:py-20 mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2" data-aos="fade-up">
          <span className="text-pink-600">Extensive pet care coverage</span>{' '}
          <span className="text-gray-800">for your dogs and cats</span>
        </h2>
        <p className="text-gray-500 text-base sm:text-lg mb-10" data-aos="fade-up" data-aos-duration="600">
          Choose the best plan for your pet&apos;s needs
        </p>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          {plans.map((plan, idx) => (
            <div className="relative rounded-xl w-full max-w-[496px] overflow-hidden">
              <a href={plan.href} key={idx} className="block shadow-lg mx-auto group">
                <img
                  src={plan.image}
                  alt={plan.title}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <p className="text-white text-left font-bold text-lg absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary-700 via-primary-500 to-transparent px-6 pb-5 pt-16">
                  {plan.title}
                  <span className="ml-2 h-6 align-sub text-2xl inline-block transform group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                </p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
