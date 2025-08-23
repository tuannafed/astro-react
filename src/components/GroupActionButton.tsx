import { iconImages } from '../constants'
import Button from './ui/Button'
import { cn } from '../utils/cn'

export default function GroupActionButton({
  className,
  requestClassName,
}: {
  className?: string
  requestClassName?: string
}) {
  return (
    <div className={cn(`flex flex-col ${className}`)} data-aos="fade-up" data-aos-duration="800">
      <div className="flex flex-col sm:flex-row items-start flex-wrap sm:gap-3">
        <div className="flex flex-col items-center sm:items-start w-full sm:w-auto">
          <Button className="rounded-xl">Get a 2 Minute Quote</Button>
          <div className="flex items-center text-xs font-normal mt-1">
            <img src={iconImages.checkIconGreen.src} alt="Icon" className="w-10 h-10" />
            <span>Promo applied!</span>
          </div>
        </div>

        <div
          className={cn(
            'flex pt-2.5 items-center justify-center sm:justify-start w-full sm:w-auto sm:flex-row gap-3',
            requestClassName
          )}
        >
          <span>or</span>
          <a
            href="#"
            className="text-sm font-bold underline decoration-secondary hover:text-primary hover:no-underline"
          >
            Request a Call Back
          </a>
        </div>
      </div>
    </div>
  )
}
