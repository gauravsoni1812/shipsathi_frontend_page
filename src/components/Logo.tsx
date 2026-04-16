export default function Logo({ className = 'h-10', variant = 'dark' }: { className?: string; variant?: 'dark' | 'white' }) {
  const src = variant === 'white' ? '/logo-white.svg' : '/logo.svg'
  return (
    <img src={src} alt="ShipSathi" className={className} />
  )
}
