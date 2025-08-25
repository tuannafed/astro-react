import { useState } from 'react'
import { cn } from '../utils/cn'

const faqs = [
  {
    question: 'What are the Standard and Additional Coverage Options?',
    answer: 'This is the content for: What are the Standard and Additional Coverage Options?',
  },
  {
    question: 'Are there Sub-Limits on Common Conditions?',
    answer: 'This is the content for: Are there Sub-Limits on Common Conditions?',
  },
  {
    question: 'What are Benefit Percentage and Annual Limits?',
    answer: 'This is the content for: What are Benefit Percentage and Annual Limits?',
  },
  {
    question: 'What is the Claims Process?',
    answer: 'This is the content for: What is the Claims Process?',
  },
  {
    question: 'What are Exclusions (or Waiting Periods)?',
    answer: 'This is the content for: What are Exclusions (or Waiting Periods)?',
  },
]

export default function PetInsuranceGuideSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-blue-light py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-[670px] mx-auto" data-aos="fade-up">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-gray-800">
          Pet Insurance Guide – Key Considerations When Choosing a Plan
        </h2>

        <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center">
          <strong className="text-gray-900">What does Knose Pet Insurance cover?</strong> We've got your back for
          accidents, injuries, illnesses, and even essential euthanasia. You can also add optional extras like dental
          illness, behavioural conditions, and specialised therapies to suit your pet's unique needs.{' '}
          <a
            href="https://www.knose.com.au/pet-insurance-cover"
            target="_blank"
            className="underline decoration-primary text-primary hover:text-primary-600 transition-colors font-medium"
          >
            Check our full cover ↗
          </a>
        </p>
      </div>
      <div className="max-w-[814px] mx-auto mt-12 sm:mt-10" data-aos="fade-up" data-aos-du="600">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 lg:gap-x-8 gap-y-3 items-start">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div key={index} className="group">
                <div
                  onClick={() => toggle(index)}
                  onTouchStart={() => toggle(index)}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${index}`}
                  className={cn(
                    'bg-white rounded-lg px-4 sm:px-5 py-4 cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300 touch-manipulation active:scale-[0.98]',
                    isOpen ? 'shadow-lg' : ''
                  )}
                >
                  <div className="flex justify-between items-start gap-3 sm:gap-4">
                    <h3 className="flex-1 font-semibold text-sm sm:text-base text-gray-800 leading-tight pr-2">
                      {faq.question}
                    </h3>

                    <span
                      className={cn(
                        'w-3 h-3 shrink-0 transform transition-transform duration-300 border-t-2 border-r-2 border-gray-500',
                        isOpen ? '-rotate-45 mt-1.5' : 'rotate-135'
                      )}
                    />
                  </div>

                  <div
                    id={`faq-content-${index}`}
                    className={cn(
                      'overflow-hidden transition-all duration-300 ease-in-out',
                      isOpen ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
                    )}
                    aria-hidden={!isOpen}
                  >
                    <div className="text-sm sm:text-base text-gray-600 leading-relaxed">{faq.answer}</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
