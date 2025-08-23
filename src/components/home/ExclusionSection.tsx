export default function ExclusionSection() {
  const data = [
    {
      title: 'Accidental Injuries',
      subtitle: '',
      period: '1-day',
      note: 'exclusion period*',
    },
    {
      title: 'Illnesses',
      subtitle: '',
      period: '14-day',
      note: 'exclusion period*',
    },
    {
      title: 'Dental Illness',
      subtitle: '(optional extra)',
      period: '14-day',
      note: 'exclusion period†',
    },
    {
      title: 'Behavioral Conditions',
      subtitle: '(optional extra)',
      period: '6 months',
      note: 'exclusion period',
    },
  ]

  return (
    <section className="max-w-desktop mx-auto py-12">
      <div className="bg-pink-100 py-12 sm:py-16 px-6 sm:px-12 sm:rounded-3xl text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">
          What are Knose’s <span className="text-primary">Exclusion (or Waiting) Periods?</span>
        </h2>
        <p className="sm:text-xl px-10" data-aos="fade-up" data-aos-duration="600">
          Knose’s exclusion periods are generally shorter than many competitors, especially for illnesses which have a
          14-day wait compared to the 30-day wait common with other brands.
        </p>

        <p className="font-semibold mt-8 mb-4" data-aos="fade-up" data-aos-duration="700">
          Here’s a summary of Knose Pet Insurance’s exclusion periods:
        </p>

        {/* Card grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {data.map((item, i) => (
            <div key={i} className="rounded-lg overflow-hidden shadow-md">
              <div className="bg-primary flex flex-col h-[84px] items-center justify-center text-white px-4 py-6">
                <p className="font-bold text-base">{item.title}</p>
                {item.subtitle && <p className="text-sm">{item.subtitle}</p>}
              </div>
              <div className="bg-white p-4 text-center">
                <p className="text-3xl font-bold">{item.period}</p>
                <p className="text-sm mt-1 font-normal">{item.note}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footnotes */}
        <p className="mt-6 text-gray-500" data-aos="fade-up" data-aos-duration="900">
          *Unless classified as Specified Conditions. Specified Conditions require a 6-month exclusion period. <br />†
          The exclusion period is 14 days for younger pets and 6 months for pets over 1 year old.
        </p>

        {/* CTA */}
        <a
          href="/"
          className="inline-block mt-8 bg-yellow-400 hover:opacity-80 transition text-lh font-bold rounded-full px-6 py-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get a Quote
        </a>
      </div>
    </section>
  )
}
