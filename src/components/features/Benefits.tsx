import {
  Rocket,
  BadgePercent,
  HeadphonesIcon,
  CreditCard,
  LayoutDashboard,
  MessageSquare,
  PhoneCall,
} from 'lucide-react'

const benefits = [
  {
    icon: Rocket,
    title: 'Hassle-Free Start',
    desc: 'Sign up, complete KYC, and start shipping in under 24 hours. No tech setup, no onboarding fees, no credit card required.',
  },
  {
    icon: BadgePercent,
    title: 'Best Shipping Rates',
    desc: 'Compare rates across 30+ couriers by pincode and weight. Our aggregated volume means you get enterprise-level pricing even as a small seller.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Priority Customer Support',
    desc: 'Fast resolution for NDR issues, courier delays, and escalations. Every seller gets a dedicated account manager who actually picks up the phone.',
  },
  {
    icon: CreditCard,
    title: 'No Platform Fees',
    desc: 'Transparent pricing without hidden charges. You pay only for shipping — no monthly subscriptions, no setup fees, no surprises on your invoice.',
  },
  {
    icon: LayoutDashboard,
    title: 'Simple, Clean Dashboard',
    desc: 'A seller-friendly interface designed for dispatch, tracking, COD management, and returns. Everything is exactly where you expect it to be.',
  },
  {
    icon: MessageSquare,
    title: 'Free Notifications',
    desc: 'Automated email, SMS, and WhatsApp notifications at every shipment milestone. Keep buyers informed and reduce "Where is my order?" queries for free.',
  },
  {
    icon: PhoneCall,
    title: 'Free NDR Calling Support',
    desc: 'Our team makes calls to buyers on failed delivery attempts to confirm address and reattempt delivery — reducing RTO and improving COD success rates at no extra cost.',
  },
]

export default function Benefits() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-tag">Benefits</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why sellers choose ShipSathi
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Every feature, every policy, and every support interaction is designed to make your eCommerce shipping effortless.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="card group">
              <div className="w-11 h-11 bg-primary-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors">
                <b.icon className="w-5 h-5 text-primary-600" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">{b.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
