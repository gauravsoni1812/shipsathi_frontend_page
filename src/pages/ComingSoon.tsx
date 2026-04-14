import { useLocation } from 'react-router-dom'
import { Construction } from 'lucide-react'

export default function ComingSoon() {
  const { pathname } = useLocation()

  const pageName = pathname
    .split('/')
    .filter(Boolean)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1).replace(/-/g, ' '))
    .join(' — ')

  return (
    <section className="py-32 lg:py-40 bg-gradient-to-br from-primary-50 via-white to-green-50">
      <div className="max-w-xl mx-auto px-4 text-center">
        <div className="w-16 h-16 mx-auto bg-primary-100 rounded-2xl flex items-center justify-center mb-6">
          <Construction className="w-8 h-8 text-primary-600" />
        </div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">{pageName}</h1>
        <p className="text-gray-500 mb-8">
          This page is coming soon. We're working hard to bring you great content here.
        </p>
        <a href="/" className="btn-primary">
          Back to Home
        </a>
      </div>
    </section>
  )
}
