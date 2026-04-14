import {
  ArrowRight,
  Truck,
  Globe,
  Layers,
  RotateCcw,
  MapPin,
  Banknote,
  Brain,
  MessageSquare,
  Package,
  Warehouse,
  Route,
  Building2,
  PackageCheck,
  CreditCard,
  BarChart3,
} from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'International Air Shipping',
    desc: 'Ship globally via premium carriers with competitive rates and real-time tracking to 195+ countries.',
  },
  {
    icon: Route,
    title: 'Multi-Modal Transport',
    desc: 'Combined road, rail, air, and sea options through one dashboard for the most cost-effective routing.',
  },
  {
    icon: Layers,
    title: 'Line Haul & Hub-to-Hub',
    desc: 'Intercity transfers designed for high-volume dispatch. Reliable hub-to-hub connectivity across major routes.',
  },
  {
    icon: CreditCard,
    title: 'Flexible Business Plans',
    desc: 'Custom pricing tailored to your volume. Doorstep pickup and fast COD settlements included.',
  },
  {
    icon: Warehouse,
    title: 'Nationwide Warehousing',
    desc: 'Storage, sorting, and dispatch with intelligent routing. Reduce delivery time by positioning inventory closer.',
  },
  {
    icon: RotateCcw,
    title: 'Reverse Logistics & RTO',
    desc: 'Automated returns management with NDR calling and multiple reattempts to recover every possible delivery.',
  },
  {
    icon: Building2,
    title: 'Hyperlocal B2B & Retail',
    desc: 'Intra-city deliveries optimised for retailers and distributors. Same-day and next-day options available.',
  },
  {
    icon: Package,
    title: 'Less Than Truck Load (LTL)',
    desc: 'Affordable partial consignment shipping. Ship smaller volumes without paying for a full truck.',
  },
]

const steps = [
  {
    step: '01',
    title: 'Schedule & Pickup',
    desc: 'Place a pickup request and our courier partner collects your bulk shipments from your warehouse or facility.',
  },
  {
    step: '02',
    title: 'Smart Routing & Dispatch',
    desc: 'AI-powered routing selects the optimal carrier and route for each consignment based on cost, speed, and reliability.',
  },
  {
    step: '03',
    title: 'Track & Deliver',
    desc: 'Real-time tracking across all carriers. Milestone notifications for you and your buyers at every stage.',
  },
  {
    step: '04',
    title: 'Reconcile & Get Paid',
    desc: 'Automated COD reconciliation and fast remittance. Full financial visibility in your dashboard.',
  },
]

const coreFeatures = [
  { icon: Banknote, title: 'Lowest Rates from ₹19/500g', desc: 'Aggregated volume means enterprise pricing for every seller.' },
  { icon: Brain, title: 'AI Courier Allocation', desc: 'Smart carrier selection based on lane data and performance.' },
  { icon: MapPin, title: '29,000+ Pincodes', desc: 'Pan-India coverage including Tier-2, Tier-3, and ODA areas.' },
  { icon: Banknote, title: 'Faster COD Remittance', desc: 'D+1 and D+2 settlement with transparent payout dashboard.' },
  { icon: Globe, title: 'International to 195+ Countries', desc: 'Cross-border shipping with automated documentation.' },
  { icon: MessageSquare, title: 'Free Notifications', desc: 'WhatsApp, SMS, and email alerts at every milestone.' },
]

export default function BulkShipping() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-green-50 pt-20 pb-16 lg:pt-28 lg:pb-24">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-100 rounded-full opacity-20 blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-tag">B2B / Bulk Shipping</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight">
            Ship Bulk Orders{' '}
            <span className="text-primary-600">Smarter</span> with ShipSathi
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 leading-relaxed mb-6 max-w-2xl mx-auto">
            The all-in-one platform for B2B and bulk shipping across India and 195+ countries. Compare carriers, manage consignments, and track everything from a single dashboard.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-500 mb-10">
            <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-gray-100">
              <Truck className="w-3.5 h-3.5 text-primary-600" />
              30+ courier partners
            </span>
            <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-gray-100">
              <MapPin className="w-3.5 h-3.5 text-primary-600" />
              29,000+ pincodes
            </span>
            <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-gray-100">
              <BarChart3 className="w-3.5 h-3.5 text-primary-600" />
              Dedicated account manager
            </span>
          </div>
          <a href="https://panel.shipsathi.com/register" className="btn-primary text-base px-8 py-3.5">
            Get Started Free
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-tag">Services</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Complete B2B shipping solutions
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              From LTL to full truck loads, local to international — every bulk shipping need covered under one roof.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.title} className="card group text-center">
                <div className="w-12 h-12 mx-auto bg-primary-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors">
                  <s.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-tag">Platform</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Enterprise-grade features for every shipment
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreFeatures.map((f) => (
              <div key={f.title} className="flex gap-4 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                <div className="w-10 h-10 flex-shrink-0 bg-primary-50 rounded-xl flex items-center justify-center">
                  <f.icon className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1">{f.title}</h3>
                  <p className="text-sm text-gray-500">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-tag">Process</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How bulk shipping works
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={s.step} className="relative text-center">
                <div className="w-14 h-14 mx-auto bg-primary-600 rounded-2xl flex items-center justify-center mb-5 text-white font-bold text-lg shadow-md">
                  {i + 1}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NDR & Smart Dispatch */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* NDR Card */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 lg:p-10">
              <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-5">
                <RotateCcw className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Proactive NDR & RTO Management</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">
                Our system proactively handles non-delivery reports to maximise successful deliveries and minimise costly returns.
              </p>
              <ul className="space-y-3">
                {[
                  'Address resolution for incorrect or incomplete details',
                  'Automated buyer outreach for unreachable contacts',
                  'Appointment coordination for re-delivery attempts',
                  'NDR calling support to confirm orders before RTO',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 mt-2 flex-shrink-0 bg-orange-400 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Smart Dispatch Card */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 lg:p-10">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
                <PackageCheck className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Dispatch & Automation</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">
                Sync orders from every sales channel and dispatch in bulk with intelligent automation that saves hours every day.
              </p>
              <ul className="space-y-3">
                {[
                  'Auto-sync from Shopify, WooCommerce, and marketplaces',
                  'Bulk AWB and invoice generation in one click',
                  'Customised shipping labels with your branding',
                  'Schedule regular pickups or request on-demand',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 mt-2 flex-shrink-0 bg-blue-400 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary-600 to-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
            Ready to scale your bulk shipping?
          </h2>
          <p className="text-lg text-green-100 mb-10 max-w-xl mx-auto">
            Join 1,000+ brands shipping smarter with ShipSathi. Get started in minutes — no setup fees.
          </p>
          <a
            href="https://panel.shipsathi.com/register"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-700 font-bold rounded-xl hover:bg-green-50 transition-colors shadow-lg text-base"
          >
            Get Started Free
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </>
  )
}
