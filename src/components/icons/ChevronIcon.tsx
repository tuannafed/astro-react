export function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg className={`w-8 h-8 ${className}`} viewBox="0 0 20 20" fill="#757575">
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  )
}
