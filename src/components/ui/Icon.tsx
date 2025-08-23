import { ReactNode } from 'react'

interface IconProps {
  children: ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

export default function Icon({
  children,
  size = 'md',
  className = '',
}: IconProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12',
  }

  return <div className={`${sizeClasses[size]} ${className}`}>{children}</div>
}

// Common icon components
export function CheckIcon({ className = '' }: { className?: string }) {
  return (
    <Icon className={className}>
      <svg
        className="w-full h-full"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
          fill="currentColor"
        />
      </svg>
    </Icon>
  )
}

export function PlusIcon({ className = '' }: { className?: string }) {
  return (
    <Icon className={className}>
      <svg
        className="w-full h-full"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
          fill="currentColor"
        />
      </svg>
    </Icon>
  )
}

export function StethoscopeIcon({ className = '' }: { className?: string }) {
  return (
    <Icon className={className}>
      <svg
        className="w-full h-full"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 3h-4V1h-2v2H7V1H5v2H1v2h2v2H1v2h2v2H1v2h2v2H1v2h2v2H1v2h2v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h2v-2h-2v-2h2v-2h-2v-2h2v-2h-2V9h2V7h-2V5h2V3h-2V1h-2v2z"
          fill="currentColor"
        />
      </svg>
    </Icon>
  )
}

export function HeartbeatIcon({ className = '' }: { className?: string }) {
  return (
    <Icon className={className}>
      <svg
        className="w-full h-full"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          fill="currentColor"
        />
      </svg>
    </Icon>
  )
}
