export default function LandingAlertBar() {
  return (
    <>
      <div className="bg-alert-dark h-[54px] sm:h-[60px] flex items-center justify-center text-white font-medium px-4">
        <div data-aos="flip-down">Get 2 Months Free Pet Insurance Today!</div>
      </div>

      <div className="max-w-1200 mx-auto px-4 sm:px-0 mt-5 sm:mt-6">
        <div className="bg-alert-light rounded-md max-w-6xl mx-auto ">
          <div data-aos="zoom-in" data-aos-delay="100" className="text-center gap-3 px-5 py-4 sm:py-4.5 space-x-2">
            <span className="font-semibold text-secondary">Enjoy 15% OFF for Life!</span>
            <span className="font-normal">Exclusive for Pet Price Club’s Pet Owners</span>
            <span>
              <a href="#quote" className="underline font-semibold hover:text-primary-600 transition-colors">
                Get a Quote
              </a>{' '}
              to secure your offer (T&amp;C apply)
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
