import { LayoutDashboard, Banknote, Brain, Eye } from 'lucide-react'

const features = [
  {
    icon: LayoutDashboard,
    label: 'Dashboard',
    title: 'Tech-Enabled Unified Dashboard',
    desc: 'A centralized command center for all your shipping operations. Manage orders, track shipments in real time, analyse courier performance, and optimize your shipping strategy — all from a single responsive dashboard that works across desktop and mobile.',
    bullets: [
      'Sync orders automatically from all sales channels',
      'Real-time shipment tracking with status updates',
      'Courier performance analytics and comparison',
      'Wallet balance and financial overview at a glance',
    ],
  },
  {
    icon: Banknote,
    label: 'COD',
    title: 'Quick COD Remittance',
    desc: 'Get your cash-on-delivery payments settled faster than ever. ShipSathi offers accelerated COD remittance with complete transparency — no hidden deductions, no delayed payouts. Watch your cash flow improve from day one.',
    bullets: [
      'Early remittance cycles (D+1 and D+2 available)',
      'Zero extra charges for faster COD payouts',
      'Transparent COD dashboard with complete payout history',
      'Improved cash flow for better inventory planning',
    ],
  },
  {
    icon: Brain,
    label: 'AI Engine',
    title: 'AI-Powered Courier Allocation',
    desc: 'Stop guessing which courier to use. Our intelligent allocation engine automatically selects the optimal courier for every order by analysing pincode serviceability, shipping cost, historical delivery performance, and RTO risk scores.',
    bullets: [
      'Automatic courier selection based on real data',
      'Pincode-level performance and cost analysis',
      'RTO risk scoring to minimise return shipments',
      'Continuous learning from delivery outcomes',
    ],
  },
  {
    icon: Eye,
    label: 'Tracking',
    title: 'Branded Tracking Page',
    desc: 'Give your customers a premium post-purchase experience. Branded tracking pages with your logo, colours, and messaging keep buyers informed and reduce support queries. Every tracking update builds trust in your brand.',
    bullets: [
      'Customisable tracking page with your brand identity',
      'Automated WhatsApp, SMS, and email notifications',
      'Reduce "Where is my order?" support calls by up to 60%',
      'Upsell opportunities on the tracking page',
    ],
  },
]

export default function MajorFeatures() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-tag">Platform</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Powerful tools built for modern sellers
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Four pillars that make ShipSathi the most complete shipping solution for Indian eCommerce.
          </p>
        </div>

        <div className="space-y-12">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden flex flex-col ${
                i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Visual side */}
              <div className="lg:w-5/12 bg-gradient-to-br from-primary-50 to-green-50 flex items-center justify-center p-10 lg:p-14">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto bg-white rounded-2xl shadow-sm flex items-center justify-center mb-5">
                    <f.icon className="w-10 h-10 text-primary-600" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-primary-600">
                    {f.label}
                  </span>
                </div>
              </div>

              {/* Content side */}
              <div className="lg:w-7/12 p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">{f.desc}</p>
                <ul className="space-y-3">
                  {f.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="w-5 h-5 mt-0.5 flex-shrink-0 bg-primary-100 rounded-full flex items-center justify-center">
                        <span className="w-2 h-2 bg-primary-600 rounded-full" />
                      </span>
                      <span className="text-sm text-gray-600">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
