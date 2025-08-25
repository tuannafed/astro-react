import { sectionImages } from '../../constants'

export default function ResourcesSection() {
  const resources = [
    {
      title: 'Why pet insurance is important',
      href: 'https://www.knose.com.au/blog/why-is-pet-insurance-important-in-australia',
    },
    {
      title: 'How to compare pet insurance plans',
      href: 'https://www.knose.com.au/blog/how-to-compare-pet-insurance-plans',
    },
    {
      title: 'How to settle a claim',
      href: 'https://www.knose.com.au/wp-content/uploads/2023/02/Knose_Claims_Process_fixed.pdf',
    },
    {
      title: 'How to manage veterinary costs',
      href: 'https://www.knose.com.au/blog/how-to-deal-with-vet-costs-in-australia',
    },
    {
      title: 'Puppy Handbook for Pet Owners',
      href: 'https://files.knose.com.au/puppy-handbook-guide.pdf?_ga=2.248500807.1310364576.1755758595-1043865526.1755758594',
    },
    {
      title: 'Pet Insurance FAQs',
      href: 'https://www.knose.com.au/faqs-and-resources',
    },
  ]

  return (
    <section className="max-w-7xl mx-auto pt-10 sm:my-12">
      <div className="bg-blue-light sm:rounded-2xl px-5 py-10 sm:p-12 mx-auto flex flex-col sm:flex-row gap-6">
        <h2 className="text-3xl flex-1 sm:text-4xl font-bold leading-tight" data-aos="fade-up">
          Pet
          <br className="hidden sm:block" /> Insurance <span className="text-primary">Resources</span>
        </h2>

        <div className="relative rounded-xl w-full max-w-[496px] overflow-hidden">
          <a
            href="https://www.knose.com.au/blog/knose-pet-insurance-explained"
            target="_blank"
            rel="noopener noreferrer"
            className="block shadow-lg mx-auto group"
          >
            <img
              src={sectionImages.malePet.src}
              alt="Male Pet"
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
            />
            <p className="text-white text-left font-bold text-lg absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary-600 via-primary-500 to-transparent px-6 pb-5 pt-14">
              Knose Pet Insurance Explained
              <span className="ml-2 h-6 align-top text-2xl inline-block transform group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </p>
          </a>
        </div>

        <div className="space-y-4 flex-1 sm:px-3 sm:py-4" data-aos="fade-up">
          <ul className="space-y-2">
            {resources.map((item, i) => (
              <li key={i}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-dark hover:underline transition-colors duration-200 text-base"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>

          <div className="pt-4">
            <a
              href="https://www.knose.com.au/faqs-and-resources"
              target="_blank"
              rel="noopener noreferrer"
              className="border-[2px] border-cyan-dark text-cyan-dark font-semibold px-5 py-2 rounded-full hover:bg-cyan-dark hover:text-white transition-all duration-300"
            >
              View All Resources
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
