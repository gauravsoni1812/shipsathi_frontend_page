import { UserCheck, ScanLine, PackageCheck } from 'lucide-react'

const steps = [
  {
    icon: UserCheck,
    step: '01',
    title: 'Create Your Account',
    desc: 'Sign up for free. Configure your pickup address, packaging preferences, and branding in minutes. No credit card required.',
  },
  {
    icon: ScanLine,
    step: '02',
    title: 'Complete KYC',
    desc: 'Submit your business documents and complete a quick selfie-based KYC. Get approved and start shipping within 24 hours.',
  },
  {
    icon: PackageCheck,
    step: '03',
    title: 'Start Shipping',
    desc: 'Import your orders from any channel, compare courier rates, book pickups, generate labels, and track everything in real time.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-tag">How It Works</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Start shipping in 3 simple steps
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Get from zero to fully operational in less than a day. No technical setup, no hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-14 left-1/3 right-1/3 h-0.5 bg-primary-100 z-0" />

          {steps.map((s, i) => (
            <div key={s.step} className="relative text-center">
              {/* Step number circle */}
              <div className="relative z-10 inline-flex w-28 h-28 bg-white border-2 border-primary-100 rounded-full items-center justify-center mb-6 shadow-sm mx-auto">
                <s.icon className="w-10 h-10 text-primary-600" />
                <span className="absolute -top-1 -right-1 w-8 h-8 bg-primary-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="https://panel.shipsathi.com/register" className="btn-primary text-base px-8 py-3.5">
            Create Free Account
          </a>
        </div>
      </div>
    </section>
  )
}
