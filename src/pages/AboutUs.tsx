import { Target, Eye, Package, Truck, Globe, HeadphonesIcon } from 'lucide-react'

const values = [
  {
    icon: Package,
    title: 'Simplicity First',
    desc: 'We believe shipping should be simple. Every feature we build is designed to eliminate complexity, not add to it.',
  },
  {
    icon: Truck,
    title: 'Reliability at Scale',
    desc: 'From a single parcel to thousands per day — our platform and partnerships are built to deliver consistently at any volume.',
  },
  {
    icon: Globe,
    title: 'Reach Everywhere',
    desc: 'Pan-India coverage across 29,000+ pincodes and international shipping to 195+ countries. Your customers are our priority.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Seller-Centric Support',
    desc: 'Every seller gets a dedicated account manager. We don\'t believe in ticket queues — we believe in fast, personal resolution.',
  },
]

const stats = [
  { value: '30+', label: 'Courier Partners' },
  { value: '29,000+', label: 'Pincodes Covered' },
  { value: '1,000+', label: 'Brands Trust Us' },
  { value: '195+', label: 'Countries Served' },
]

export default function AboutUs() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-green-50 pt-20 pb-16 lg:pt-28 lg:pb-24">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-100 rounded-full opacity-20 blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-tag">About Us</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight">
            Simplifying Shipping for{' '}
            <span className="text-primary-600">Every Business</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
            ShipSathi is a logistics aggregator providing an all-in-one shipping platform for eCommerce businesses of all sizes. We integrate domestic, international, B2C, and B2B shipping solutions with the platforms you already use.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-primary-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">{s.value}</div>
                <div className="text-sm text-green-100 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-gradient-to-br from-primary-50 to-green-50 border border-primary-100 rounded-3xl p-8 lg:p-10">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <Target className="w-7 h-7 text-primary-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To simplify the shipping process for eCommerce businesses of all sizes. We provide a unified platform that streamlines logistics operations — helping businesses manage costs, optimise delivery schedules, and delight their customers with reliable shipping experiences.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-3xl p-8 lg:p-10">
              <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To become one of the most reliable eCommerce shipping solution providers — not just in India, but globally. We are building innovative technology that simplifies logistics and enhances the customer experience for eCommerce businesses everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-tag">What We Do</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              A complete shipping ecosystem
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              ShipSathi brings together everything eCommerce sellers need to ship efficiently — from label generation to COD settlements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Domestic & International Shipping', desc: 'Ship across India and to 195+ countries through a single platform with 30+ courier partners.' },
              { title: 'Label & AWB Generation', desc: 'Create shipping labels and AWBs individually or in bulk. Customise with your brand identity.' },
              { title: 'COD Management', desc: 'Full COD lifecycle management with fast remittance cycles and a transparent payout dashboard.' },
              { title: 'Automated Order Processing', desc: 'Sync orders from Shopify, WooCommerce, Amazon, and more. Auto-dispatch with smart courier selection.' },
              { title: 'Real-Time Tracking', desc: 'Track every shipment in real time with milestone notifications for both sellers and buyers.' },
              { title: 'Pan-India + ODA Coverage', desc: 'Reach customers across 29,000+ pincodes including remote and out-of-delivery-area locations.' },
            ].map((item) => (
              <div key={item.title} className="card">
                <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-tag">Our Values</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What drives us every day
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((v) => (
              <div key={v.title} className="flex gap-4 bg-gray-50 border border-gray-100 rounded-2xl p-6">
                <div className="w-11 h-11 flex-shrink-0 bg-primary-50 rounded-xl flex items-center justify-center">
                  <v.icon className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">{v.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary-600 to-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
            Join 1,000+ brands shipping with ShipSathi
          </h2>
          <p className="text-lg text-green-100 mb-10 max-w-xl mx-auto">
            Start shipping smarter today. No platform fees, no setup costs, no commitments.
          </p>
          <a
            href="https://panel.shipsathi.com/register"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-700 font-bold rounded-xl hover:bg-green-50 transition-colors shadow-lg text-base"
          >
            Get Started Free
          </a>
        </div>
      </section>
    </>
  )
}
