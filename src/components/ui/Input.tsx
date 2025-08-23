import { forwardRef, type InputHTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'outline' | 'contained'
  label?: string
  error?: string
  helperText?: string
  labelClassName?: string
  containerClassName?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      className = '',
      labelClassName = '',
      containerClassName = '',
      variant = 'contained',
      ...props
    },
    ref
  ) => {
    const baseClasses = 'w-full px-4 py-2 border-[2px] rounded-md border-gray-300 transition-colors'
    const containerClasses = cn('space-y-2', containerClassName)
    const stateClasses =
      variant === 'outline'
        ? error
          ? 'border-red-300'
          : 'border-gray-300'
        : variant === 'contained'
          ? 'bg-white text-black focus:border-blue-light focus:shadow-sm'
          : ''

    const inputClasses = cn(`${baseClasses} ${stateClasses} ${className}`)
    const stateLabelClasses = variant === 'contained' ? 'text-white' : 'text-black'
    const labelClasses = cn('block', stateLabelClasses, labelClassName)

    return (
      <div className={containerClasses}>
        {label && (
          <label htmlFor={props.id} className={labelClasses}>
            {label}
          </label>
        )}
        <input ref={ref} className={cn(inputClasses, className)} {...props} />
        {error && <p className="text-sm text-red-500">{error}</p>}
        {helperText && !error && <p className="text-sm">{helperText}</p>}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input
