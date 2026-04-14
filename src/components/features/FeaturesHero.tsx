import { ArrowRight } from 'lucide-react'

export default function FeaturesHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-green-50 pt-20 pb-16 lg:pt-28 lg:pb-24">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-100 rounded-full opacity-20 blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="section-tag">Features</span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight">
          All-in-One Shipping Platform for{' '}
          <span className="text-primary-600">eCommerce</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-500 leading-relaxed mb-10 max-w-2xl mx-auto">
          Compare couriers, generate AWBs and labels, track shipments in real time, and reduce RTO with smart NDR workflows and free order verification — all from one powerful dashboard.
        </p>
        <a
          href="https://panel.shipsathi.com/register"
          className="btn-primary text-base px-8 py-3.5"
        >
          Get Started Free
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  )
}
