import { ArrowRight } from 'lucide-react'
import FeaturesHero from '../components/features/FeaturesHero'
import CoreHighlights from '../components/features/CoreHighlights'
import MajorFeatures from '../components/features/MajorFeatures'
import OperationalFlow from '../components/features/OperationalFlow'
import ShippingAutomation from '../components/features/ShippingAutomation'
import Benefits from '../components/features/Benefits'
import MobileApp from '../components/features/MobileApp'

export default function FeaturesPage() {
  return (
    <>
      <FeaturesHero />
      <CoreHighlights />
      <MajorFeatures />
      <OperationalFlow />
      <ShippingAutomation />
      <Benefits />
      <MobileApp />

      {/* Bottom CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary-600 to-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
            Transform your shipping with ShipSathi
          </h2>
          <p className="text-lg text-green-100 mb-10 max-w-xl mx-auto">
            Simplify logistics, reduce costs, and delight your customers with our all-in-one eCommerce shipping solution.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://panel.shipsathi.com/register"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-700 font-bold rounded-xl hover:bg-green-50 transition-colors shadow-lg text-base w-full sm:w-auto justify-center"
            >
              Get Started Free
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="mailto:support@shipsathi.com"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors text-base w-full sm:w-auto justify-center"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
