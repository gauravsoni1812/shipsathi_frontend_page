export default function Logo({ className = 'h-8' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 180 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Package icon */}
      <rect x="2" y="8" width="24" height="24" rx="6" fill="#4CAF50" />
      <path
        d="M9 16l5 3 5-3M14 19v7"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 16l5-3 5 3v10l-5 3-5-3V16z"
        stroke="#fff"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Arrow swoosh */}
      <path
        d="M19 11l4-2.5"
        stroke="#fff"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M22 8l1.5 0.5L23 10"
        stroke="#fff"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* "Ship" text */}
      <text
        x="34"
        y="26.5"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="800"
        fontSize="19"
        fill="#1a1f2e"
      >
        Ship
      </text>
      {/* "Sathi" text in brand green */}
      <text
        x="82"
        y="26.5"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="800"
        fontSize="19"
        fill="#4CAF50"
      >
        Sathi
      </text>
    </svg>
  )
}
