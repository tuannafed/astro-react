import { forwardRef, useState, useRef, useEffect, type InputHTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

interface ComboboxOption {
  value: string
  label: string
  disabled?: boolean
}

interface ComboboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  variant?: 'default' | 'outline' | 'contained'
  label?: string
  error?: string
  helperText?: string
  labelClassName?: string
  containerClassName?: string
  options: ComboboxOption[]
  placeholder?: string
  onChange?: (value: string) => void
  onInputChange?: (value: string) => void
}

const Combobox = forwardRef<HTMLInputElement, ComboboxProps>(
  (
    {
      variant = 'contained',
      label,
      error,
      helperText,
      labelClassName = '',
      containerClassName = '',
      options,
      placeholder = 'Search...',
      onChange,
      onInputChange,
      className = '',
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [selectedValue, setSelectedValue] = useState('')
    const [highlightedIndex, setHighlightedIndex] = useState(-1)
    const containerRef = useRef<HTMLDivElement>(null)
    const listRef = useRef<HTMLUListElement>(null)

    // Filter options based on input
    const filteredOptions = options.filter(
      (option) => option.label.toLowerCase().includes(inputValue.toLowerCase()) && !option.disabled
    )

    const baseClasses =
      'w-full px-4 py-2 border-[2px] rounded-md border-gray-300 transition-colors bg-white text-black focus:border-blue-light focus:shadow-sm focus:outline-none'
    const stateClasses = error ? 'border-red-300 focus:border-red-500' : ''

    const inputClasses = `${baseClasses} ${stateClasses} ${className}`

    // Handle input change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value
      setInputValue(value)
      setIsOpen(true)
      setHighlightedIndex(-1)
      onInputChange?.(value)
    }

    // Handle option selection
    const handleOptionSelect = (option: ComboboxOption) => {
      setInputValue(option.label)
      setSelectedValue(option.value)
      setIsOpen(false)
      setHighlightedIndex(-1)
      onChange?.(option.value)
    }

    // Handle keyboard navigation
    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (!isOpen) {
        if (e.key === 'ArrowDown' || e.key === 'Enter') {
          setIsOpen(true)
          return
        }
      }

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault()
          setHighlightedIndex((prev) => (prev < filteredOptions.length - 1 ? prev + 1 : prev))
          break
        case 'ArrowUp':
          e.preventDefault()
          setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : prev))
          break
        case 'Enter':
          e.preventDefault()
          if (highlightedIndex >= 0 && filteredOptions[highlightedIndex]) {
            handleOptionSelect(filteredOptions[highlightedIndex])
          }
          break
        case 'Escape':
          setIsOpen(false)
          setHighlightedIndex(-1)
          break
      }
    }

    // Close dropdown when clicking outside
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
          setIsOpen(false)
          setHighlightedIndex(-1)
        }
      }

      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const containerClasses = cn('space-y-2', containerClassName)
    const stateLabelClasses = variant === 'contained' ? 'text-white' : 'text-black'
    const labelClasses = cn('block', stateLabelClasses, labelClassName)

    return (
      <div className={containerClasses} ref={containerRef}>
        {label && (
          <label htmlFor={props.id} className={labelClasses}>
            {label}
          </label>
        )}
        <div className="relative">
          <input
            ref={ref}
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsOpen(true)}
            placeholder={placeholder}
            className={inputClasses}
            autoComplete="off"
            {...props}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg
              className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          {isOpen && filteredOptions.length > 0 && (
            <ul
              ref={listRef}
              className="absolute z-10 w-full mt-1 bg-white border-[2px] border-gray-300 rounded-md shadow-sm max-h-60 overflow-auto"
            >
              {filteredOptions.map((option, index) => (
                <li
                  key={option.value}
                  onClick={() => handleOptionSelect(option)}
                  className={`px-4 py-2 cursor-pointer transition-colors first:rounded-t-md last:rounded-b-md ${
                    index === highlightedIndex ? 'bg-blue-light text-blue-800' : 'hover:bg-gray-50'
                  }`}
                >
                  {option.label}
                </li>
              ))}
            </ul>
          )}

          {isOpen && filteredOptions.length === 0 && inputValue && (
            <div className="absolute z-10 w-full mt-1 bg-white border-[2px] border-gray-300 rounded-md shadow-sm">
              <div className="px-4 py-2 text-gray-500">No results found</div>
            </div>
          )}
        </div>
        {error && <p className="text-sm text-red-600">{error}</p>}
        {helperText && !error && <p className="text-sm text-gray-500">{helperText}</p>}
      </div>
    )
  }
)

Combobox.displayName = 'Combobox'

export default Combobox
