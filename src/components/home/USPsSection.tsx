import { useState } from 'react'
import clsx from 'clsx'

// Tabs config
const tabs = [
  {
    title: 'No sub-limits or hidden cost',
    contentType: 'image',
    imageSrc: '',
    description:
      'Because you deserve simple, straightforward pet insurance coverage with no sub-limits to hold you back. With us, you know what you are covered for.',
    link: {
      label: 'Read more about sub-limits',
      href: '#',
    },
  },
  {
    title: 'Up to $25K annual limit with flexible and customisable options',
    contentType: 'text',
    description:
      'Secure up to $25,000 in coverage annually. Customise your options to perfectly suit your budget and pet’s needs.',
  },
  {
    title: 'Quick and easy claims',
    contentType: 'text',
    description:
      'Our claim process is designed for speed and simplicity. Most claims are processed within 5 business days.',
  },
  {
    title: 'Australian-based customer care',
    contentType: 'text',
    description: 'Speak directly with our friendly, knowledgeable customer support team – all based in Australia.',
  },
  {
    title: 'Free & unlimited help 24/7',
    contentType: 'text',
    description: 'Access support from registered vet nurses 24/7 – anytime, anywhere, as often as you need.',
  },
  {
    title: 'One of the most awarded pet insurance in Australia',
    contentType: 'text',
    description: 'We’ve been consistently recognised with awards for value, quality and customer satisfaction.',
  },
]

function CheckIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={`w-4 h-4 ${className}`} viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
    </svg>
  )
}

function ChevronIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary-700">
      <path
        fill="currentColor"
        d="M9.29 6.71L13.17 10.59L9.29 14.47L10.7 15.88L16.59 10L10.7 4.11L9.29 5.53L13.17 9.41L9.29 6.71Z"
      />
    </svg>
  )
}

export default function USPsSectionTabs() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Heading center */}
      <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-10 text-center">
        Why Insure with <span className="text-primary-500">Knose</span>?
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Tab headers */}
        <div role="tablist" aria-label="Why Knose" className="space-y-3">
          {tabs.map((tab, index) => {
            const isActive = index === activeTab
            return (
              <button
                key={index}
                role="tab"
                aria-selected={isActive}
                aria-controls={`tabpanel-${index}`}
                id={`tab-${index}`}
                onClick={() => setActiveTab(index)}
                className={clsx(
                  'w-full flex items-center justify-between px-5 py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 border focus:outline-none',
                  isActive
                    ? 'bg-pink-100 text-primary-700 border-pink-500 shadow'
                    : 'bg-gray-100 text-dark border-transparent hover:border-gray-300'
                )}
              >
                <span>{tab.title}</span>
                {isActive && <ChevronIcon />}
              </button>
            )
          })}
        </div>

        {/* Tab panel */}
        <div
          role="tabpanel"
          id={`tabpanel-${activeTab}`}
          aria-labelledby={`tab-${activeTab}`}
          className="rounded-2xl w-full transition-all duration-300 ease-in-out"
        >
          {tabs[activeTab].contentType === 'image' ? (
            <div className="bg-[#C2007A] text-white p-6 sm:p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">{tabs[activeTab].title}</h3>
              <p className="text-sm sm:text-base mb-4">
                {tabs[activeTab].description}{' '}
                {tabs[activeTab].link && (
                  <a
                    href={tabs[activeTab].link!.href}
                    className="underline font-semibold hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {tabs[activeTab].link!.label} ↗
                  </a>
                )}
              </p>
              <img
                src={tabs[activeTab].imageSrc}
                alt="Comparison Table"
                className="w-full h-auto object-contain border border-white rounded-lg"
              />
              <p className="text-xs italic mt-3 text-center">
                An example of a pet insurance cover for an Australian dog with tick paralysis
              </p>
            </div>
          ) : (
            <div className="bg-gray-50 border border-gray-200 p-6 sm:p-8 rounded-xl shadow-sm">
              <div className="flex items-start gap-3 mb-2">
                <div className="bg-success rounded-full p-1">
                  <CheckIcon className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-1">{tabs[activeTab].title}</h3>
                  <p className="text-sm sm:text-base text-gray-700">{tabs[activeTab].description}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
