import React from 'react'
import { cn } from '../../utils/cn'

interface AlertProps {
  variant?: 'success' | 'error' | 'warning' | 'info' | 'primary' | 'secondary'
  children: React.ReactNode
  className?: string
  showIcon?: boolean
}

const Alert: React.FC<AlertProps> = ({ variant = 'success', children, className = '', showIcon = true }) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-[#f3cce5] border-[#efb8da] text-[#660040]'
      case 'success':
        return 'bg-green-50 border-green-200 text-green-800'
      case 'error':
        return 'bg-red-50 border-red-200 text-red-800'
      case 'warning':
        return 'bg-yellow-50 border-yellow-200 text-yellow-800'
      case 'info':
        return 'bg-blue-50 border-blue-200 text-blue-800'
      default:
        return 'bg-green-50 border-green-200 text-green-800'
    }
  }

  const getIcon = () => {
    switch (variant) {
      case 'primary':
        return (
          <div className="mt-0.5 flex-shrink-0 w-5 h-5 bg-[#660040] rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        )

      case 'success':
        return (
          <div className="mt-0.5 flex-shrink-0 w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        )
      case 'error':
        return (
          <div className="mt-0.5 flex-shrink-0 w-5 h-5 bg-red-600 rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        )
      case 'warning':
        return (
          <div className="mt-0.5 flex-shrink-0 w-5 h-5 bg-yellow-600 rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={4}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
        )
      case 'info':
        return (
          <div className="mt-0.5 flex-shrink-0 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={4}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div
      className={cn(`
      flex items-start gap-2 px-4 py-3 rounded-lg border-1
      ${getVariantStyles()}
      ${className}
    `)}
    >
      {showIcon && getIcon()}
      <div className="flex-1 font-semibold">{children}</div>
    </div>
  )
}

export default Alert
