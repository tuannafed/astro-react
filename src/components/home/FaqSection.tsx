import { useState } from 'react'
import { cn } from '../../utils/cn'

const faqs = [
  {
    question: 'What are the Standard and Additional Coverage Options?',
    answer:
      "Many insurers cover accidents and illnesses but may exclude dental, behavioural, or alternative treatments. Knose offers comprehensive coverage with optional add-ons like dental illness, behavioural conditions, and specialised therapies—so you can tailor your policy to your pet's unique needs.",
  },
  {
    question: 'What are Benefit Percentage and Annual Limits?',
    answer:
      'Some insurers lock you into a fixed reimbursement percentage or lower annual caps. With Knose, you choose your benefit percentage (70%, 80%, or 90%) and annual limit (up to $25,000), ensuring flexibility based on your budget and risk comfort level.',
  },
  {
    question: 'What are Exclusions (or Waiting Periods)?',
    answer:
      'All pet insurance policies come with exclusions, but Knose keeps it simple and transparent. Knose has a 1-day waiting period for accidental injuries, 14 days for illnesses, and 6 months for specified conditions, behavioural issues, and dental illnesses (14 days for pets under 1 year).',
  },
  {
    question: 'What are Excess and Co-Payments?',
    answer:
      'Knose allows you to choose your excess level ($0, $100, or $200 annually), giving you control over how much you pay out-of-pocket before insurance kicks in. Unlike some insurers that charge per claim excesses, Knose applies excess annually.',
  },
  {
    question: 'Does Pet Insurance Have Sub-Limits',
    answer:
      'Some insurers impose treatment-specific caps, such as limits on vet consultations or physiotherapy sessions. Knose has no sub-limits on standard vet treatments, meaning your total annual benefit applies to all covered treatments.',
  },
  {
    question: 'Are there Sub-Limits on Common Conditions?',
    answer:
      'While some policies limit how much you can claim for common conditions (like arthritis or skin allergies), Knose provides broader coverage with fewer sub-limits, giving you peace of mind.',
  },
  {
    question: 'What is the Claims Process?',
    answer:
      'Making a claim is a breeze. Log in to your Knose account and submit your claim online with a copy of the vet invoice. Your vet can also email the invoice to claims@knose.com.au. Most claims are processed within five (5) business days.',
  },
  {
    question: 'Do Premiums Increase?',
    answer:
      'As pets get older or veterinary costs rise, premiums may change. Knose keeps increases reasonable and transparent, notifying you ahead of time to ensure no surprises.',
  },
  {
    question: 'Can We Customise Our Policy?',
    answer:
      'Absolutely. Knose offers flexibility with options to tailor your policy to suit your pet’s needs and your budget — choose your annual limit, benefit percentage, and add-ons.',
  },
  {
    question: 'Are there Additional Benefits?',
    answer:
      'Knose offers extra value like optional wellness add-ons, behavioural therapy coverage, and dental illness protection to ensure your pet gets holistic care.',
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="max-w-7xl mx-auto py-6 sm:py-12">
      <div className="bg-blue-light sm:rounded-2xl py-10 px-5 sm:px-12 sm:py-20 mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-6" data-aos="fade-up">
            <span className="text-cyan-dark">Pet Insurance Guide</span>{' '}
            <span>– Key Considerations When Choosing a Plan</span>
          </h2>
          <p
            className="text-center text-gray-500 mb-8 text-base sm:text-lg max-w-xl mx-auto"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            These information snippets help pet owners understand how different insurers compare and where Knose stands
            out.
          </p>
        </div>

        <div
          className="bg-white rounded-2xl max-w-4xl mx-auto p-6 sm:p-10 shadow-sm divide-y divide-gray-200"
          data-aos="fade-up"
          data-aos-duration="700"
        >
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
                    'w-full cursor-pointer flex justify-between items-center gap-6 py-4 sm:py-6 text-left touch-manipulation transition-all duration-500 ease-in-out',
                    isOpen ? 'text-cyan-dark' : 'hover:text-cyan-dark'
                  )}
                >
                  <span className="font-bold flex-1 text-gray-700 text-sm sm:text-xl">{faq.question}</span>
                  <span
                    className={cn(
                      'w-3 h-3 shrink-0 transform transition-transform duration-100 border-t-2 -mt-1.5 border-r-2 border-gray-500',
                      isOpen ? '-rotate-45' : 'rotate-135'
                    )}
                  />
                </div>
                <div
                  id={`faq-content-${index}`}
                  className={cn(
                    'overflow-hidden transition-all duration-300 ease-in-out text-left',
                    isOpen ? 'max-h-96 opacity-100 pb-4 sm:pb-5' : 'max-h-0 opacity-0'
                  )}
                  aria-hidden={!isOpen}
                >
                  <div className="text-sm sm:text-base text-gray-600 leading-relaxed">{faq.answer}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
