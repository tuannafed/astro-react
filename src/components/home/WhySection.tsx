import { useState } from 'react'
import clsx from 'clsx'
import { sectionImages } from '../../constants'
import { ChevronIcon } from '../icons'

// Tabs config
const tabs = [
  {
    title: 'Why Knose has no sub-limits',
    imageSrc: sectionImages.whyInsure,
    description:
      'Because you deserve  simple, straightforward pet insurance coverage with no sub-limits to hold you back. With us, <b>you know what you are covered for.</b> <a href="https://www.knose.com.au/blog/no-sub-limits-pet-insurance" target="_blank" rel="noopener noreferrer">Read more about sub-limits ↗</a>',
  },
  {
    title: 'Up to $25K annual limit with flexible and customisable options',
    imageSrc: sectionImages.whyInsure,
    description:
      'Secure up to $25,000 in coverage annually. Customise your options to perfectly suit your budget and pet’s needs.',
  },
  {
    title: 'Quick and easy claims',
    imageSrc: sectionImages.whyInsure,
    description:
      'Our claim process is designed for speed and simplicity. Most claims are processed within 5 business days.',
  },
  {
    title: 'Australian-based customer care',
    imageSrc: sectionImages.whyInsure,
    description: 'Speak directly with our friendly, knowledgeable customer support team – all based in Australia.',
  },
  {
    title: 'Free & unlimited help 24/7',
    imageSrc: sectionImages.whyInsure,
    description: 'Access support from registered vet nurses 24/7 – anytime, anywhere, as often as you need.',
  },
  {
    title: 'One of the most awarded pet insurance in Australia',
    imageSrc: sectionImages.whyInsure,
    description: 'We’ve been consistently recognised with awards for value, quality and customer satisfaction.',
  },
]

export default function WhySection() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Heading center */}
      <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-10 text-center" data-aos="fade-up">
        Why Insure with <span className="text-primary">Knose</span>?
      </h2>

      <div
        className="flex flex-col sm:flex-row gap-10 md:gap-20 items-start"
        data-aos="fade-up"
        data-aos-duration="600"
      >
        {/* Tab headers */}
        <div role="tablist" aria-label="Why Knose" className="space-y-3 md:max-w-1/3 w-full">
          {tabs.map((tab, index) => {
            const isActive = index === activeTab
            return (
              <div
                key={index}
                role="tab"
                aria-selected={isActive}
                aria-controls={`tabpanel-${index}`}
                id={`tab-${index}`}
                onClick={() => setActiveTab(index)}
                onTouchStart={() => setActiveTab(index)}
                className={clsx(
                  'w-full flex cursor-pointer items-center justify-between pl-5 pr-3 gap-4 py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 border focus:outline-none touch-manipulation',
                  isActive
                    ? 'bg-pink-100 text-primary border-primary shadow'
                    : 'bg-gray-100 text-dark border-transparent hover:border-primary active:border-primary active:bg-pink-50'
                )}
              >
                <span className="flex-1">{tab.title}</span>
                {isActive && <ChevronIcon className="w-6 h-6 shrink-0 -rotate-90 [&>path]:fill-primary" />}
              </div>
            )
          })}
        </div>

        {/* Tab panel */}
        <div
          role="tabpanel"
          id={`tabpanel-${activeTab}`}
          aria-labelledby={`tab-${activeTab}`}
          className="rounded-2xl w-full transition-all duration-300 ease-in-out flex-1"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <div className="bg-primary text-white p-6 sm:p-8 rounded-2xl text-center shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold my-2">{tabs[activeTab].title}</h3>
            <p
              className="text-sm sm:text-base mb-8 [&_a]:underline [&_a]:text-white [&_a]:hover:no-underline"
              dangerouslySetInnerHTML={{ __html: tabs[activeTab].description }}
            />
            <div className="w-full md:max-w-2/3 mx-auto">
              <img src={tabs[activeTab].imageSrc.src} alt="Comparison Table" className="w-full rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
