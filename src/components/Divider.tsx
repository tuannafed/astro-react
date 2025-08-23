import { cn } from '../utils/cn'

export default function Divider({ className, lineClassName }: { className?: string; lineClassName?: string }) {
  return (
    <div className={cn('w-full flex justify-center mb-5', className)}>
      <div className={cn('w-[60%] bg-gray-light h-[2px]', lineClassName)} />
    </div>
  )
}
