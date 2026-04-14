import {
  Zap,
  BarChart3,
  RefreshCw,
  MapPin,
  Shield,
  Truck,
  MessageCircle,
  Clock,
  FileText,
  Scale,
  Smartphone,
  HeadphonesIcon,
} from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Smart Courier Allocation',
    desc: 'AI-powered engine auto-selects the best courier per order based on lane performance, delivery speed, COD risk, and serviceability.',
  },
  {
    icon: Truck,
    title: 'Bulk Dispatch',
    desc: 'Sync orders from all sales channels and dispatch in bulk. Generate AWBs and labels instantly, schedule pickups with one click.',
  },
  {
    icon: RefreshCw,
    title: 'NDR & RTO Reduction',
    desc: 'Smart follow-up and reattempt rules reduce Return-to-Origin shipments. Automated WhatsApp & SMS nudges to buyers.',
  },
  {
    icon: MapPin,
    title: 'Branded Tracking Page',
    desc: 'Keep your customers updated with a branded tracking experience. Reduce WISMO calls and build post-purchase loyalty.',
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    desc: 'Unified visibility across operations and finance. Track delivery rates, courier performance, and wallet balance in real time.',
  },
  {
    icon: Clock,
    title: 'Early COD Remittance',
    desc: 'Get your cash-on-delivery payments settled faster. Transparent COD dashboard showing all payouts clearly.',
  },
  {
    icon: Shield,
    title: 'Free Order Verification',
    desc: 'Pre-dispatch verification via WhatsApp and SMS reduces fake orders and significantly lowers RTO before dispatch.',
  },
  {
    icon: Scale,
    title: 'Weight Dispute Resolution',
    desc: 'Transparent weight dispute process with full documentation. Fight incorrect weight charges from couriers effortlessly.',
  },
  {
    icon: FileText,
    title: 'ePOD for Every Shipment',
    desc: 'Instant delivery proof with receiver name, timestamp, and POD file. Never lose a dispute over proof of delivery.',
  },
  {
    icon: MessageCircle,
    title: 'Customer Communication',
    desc: 'Automated notifications via WhatsApp, SMS, and Email at every shipment milestone. Keep buyers informed effortlessly.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App',
    desc: 'Manage your shipments on the go. Available on iOS and Android. Track orders, manage NDR, and view analytics anywhere.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Dedicated Account Manager',
    desc: 'Every seller gets a personal account manager. Fast, responsive support to resolve your issues without the run-around.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-tag">Features</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything you need to scale your shipping
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            From order import to delivery proof — ShipSathi covers the full shipping lifecycle so you can focus on growing your business.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="card group">
              <div className="w-11 h-11 bg-primary-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors">
                <f.icon className="w-5 h-5 text-primary-600" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
