import { forwardRef, type InputHTMLAttributes, useState } from 'react'
import { cn } from '../../utils/cn'

interface RadioOption {
  value: string
  label: string
  icon?: React.ReactNode
  disabled?: boolean
}

interface RadioGroupProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode
  error?: string
  helperText?: string
  options: RadioOption[]
  name: string
  direction?: 'horizontal' | 'vertical'
  defaultValue?: string
  value?: string
}

const RadioGroup = forwardRef<HTMLInputElement, RadioGroupProps>(
  (
    { label, error, helperText, options, name, direction = 'horizontal', defaultValue, value, onChange, ...props },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState(defaultValue || '')
    const directionClasses = direction === 'horizontal' ? 'flex flex-row gap-4' : 'flex flex-col gap-3'

    // Use controlled value if provided, otherwise use internal state
    const selectedValue = value !== undefined ? value : internalValue

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (value === undefined) {
        setInternalValue(e.target.value)
      }
      onChange?.(e)
    }

    return (
      <div className="space-y-2">
        {label && <label className="block text-white">{label}</label>}
        <div className={`${directionClasses} bg-gray-300 rounded-md p-2`}>
          {options.map((option) => {
            const isSelected = selectedValue === option.value
            return (
              <label
                key={option.value}
                className={`
                  group flex items-center font-semibold justify-center gap-1 px-5 py-1 rounded-md cursor-pointer transition-all duration-200
                  ${option.disabled ? 'opacity-50 cursor-not-allowed' : ''}
                  ${isSelected ? 'bg-white text-primary shadow-sm' : 'text-black bg-transparent hover:bg-white hover:text-primary'}
                  w-1/2 flex-1
                `}
              >
                <input
                  ref={ref}
                  type="radio"
                  name={name}
                  value={option.value}
                  checked={selectedValue === option.value}
                  disabled={option.disabled}
                  className="sr-only"
                  onChange={handleChange}
                  {...props}
                />
                {option.icon && (
                  <span
                    className={cn(
                      'group-hover:[&>svg>path]:fill-primary group-hover:[&>svg>path]:stroke-primary',
                      isSelected
                        ? ' [&>svg>path]:fill-primary [&>svg>path]:stroke-primary'
                        : ' [&>svg>path]:fill-gray-700 [&>svg>path]:stroke-gray-700'
                    )}
                  >
                    {option.icon}
                  </span>
                )}
                <span className=" font-medium">{option.label}</span>
              </label>
            )
          })}
        </div>
        {error && <p className="text-sm text-red-600">{error}</p>}
        {helperText && !error && <p className="text-sm text-gray-500">{helperText}</p>}
      </div>
    )
  }
)

RadioGroup.displayName = 'RadioGroup'

export default RadioGroup
