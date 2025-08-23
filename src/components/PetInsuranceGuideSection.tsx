'use client'
import { useState } from 'react'
import { ChevronIcon } from './icons/ChevronIcon'

const faqs = [
  'What are the Standard and Additional Coverage Options?',
  'Are there Sub-Limits on Common Conditions?',
  'What are Benefit Percentage and Annual Limits?',
  'What is the Claims Process?',
  'What are Exclusions (or Waiting Periods)?',
]

export default function PetInsuranceGuideSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-blue-light py-12 px-6">
      <div className="max-w-[670px] mx-auto" data-aos="fade-up">
        <h2 className="text-xl font-bold text-center mb-8 sm:mb-6">
          Pet Insurance Guide – Key Considerations When Choosing a Plan
        </h2>

        <p className="text-justify font-normal">
          <strong>What does Knose Pet Insurance cover?</strong> We’ve got your back for accidents, injuries, illnesses,
          and even essential euthanasia. You can also add optional extras like dental illness, behavioural conditions,
          and specialised therapies to suit your pet’s unique needs.{' '}
          <a
            href="https://www.knose.com.au/pet-insurance-cover"
            target="_blank"
            className="underline decoration-primary"
          >
            Check our full cover ↗
          </a>
        </p>
      </div>
      <div className="max-w-[814px] mx-auto mt-12 sm:mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2.5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-md px-5 pt-3 pb-4 cursor-pointer shadow-sm hover:shadow-md transition"
              onClick={() => toggle(index)}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex justify-between items-center gap-4">
                <h3 className="flex-1font-semibold text-xs">{faq}</h3>
                <ChevronIcon
                  className={`shrink-0 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </div>

              {openIndex === index && (
                <div className="mt-3 text-sm text-gray-700">
                  <p>This is the content for: {faq}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
