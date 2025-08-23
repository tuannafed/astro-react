import { iconImages } from '../constants'
import Divider from './Divider'

export default function ReviewBox() {
  return (
    <div className="bg-secondary-50 rounded-lg py-6 pl-5 pr-4 shadow-soft" data-aos="fade-up" data-aos-duration="900">
      <div className="flex flex-col sm:flex-row items-center gap-4 italic">
        <div className="flex flex-col justify-center items-center gap-2.5 sm:w-[200px] shrink-0">
          <img src={iconImages.productReviewIcon.src} alt="Product Review Logo" className="w-full" />
          <p className="text-xs sm:text-[10px] text-center sm:text-left">
            Rated 4.7 on ProductReview and 4.6 on <br className="block sm:hidden" /> Google Reviews as of July 2025
          </p>
        </div>

        <Divider className="flex sm:hidden my-0" lineClassName="bg-[#D2D1D1]" />

        <div className="flex-1 space-y-1 text-left">
          <p className="font-semibold">Very simple with super fast claim reimbursements which is what we love.</p>
          <p className="text-warning text-sm">★★★★★</p>
          <p className="text-xs text-secondary-300">
            Lisa C. - South East Queensland, QLD. <br />
            Source: ProductReview.com.au
          </p>
        </div>
      </div>
    </div>
  )
}
