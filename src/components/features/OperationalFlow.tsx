import { ClipboardList, Truck, RotateCcw } from 'lucide-react'

const steps = [
  {
    icon: ClipboardList,
    title: 'Create & Process Orders',
    desc: 'Import orders from any sales channel — Shopify, WooCommerce, Amazon, Flipkart, or CSV. Auto-sync keeps everything up to date. Assign couriers manually or let AI pick the best one.',
  },
  {
    icon: Truck,
    title: 'Dispatch Your Orders',
    desc: 'Generate AWBs and shipping labels in bulk. Schedule courier pickups with one click. Every shipment is tracked in real time from pickup to delivery with milestone notifications.',
  },
  {
    icon: RotateCcw,
    title: 'Handle Returns Seamlessly',
    desc: 'Manage NDR follow-ups, buyer reattempts, and RTO shipments from one place. Transparent weight dispute resolution and automated reverse logistics keep your operations clean.',
  },
]

export default function OperationalFlow() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-tag">Workflow</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Your complete shipping workflow
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            From order creation to delivery and returns — ShipSathi brings your entire shipping operation into one streamlined flow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-primary-100 z-0" />

          {steps.map((s, i) => (
            <div key={s.title} className="relative text-center">
              <div className="relative z-10 inline-flex w-32 h-32 bg-gradient-to-br from-primary-50 to-green-50 border-2 border-primary-100 rounded-3xl items-center justify-center mb-6 mx-auto">
                <s.icon className="w-12 h-12 text-primary-600" />
                <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary-600 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-sm">
                  {i + 1}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed max-w-sm mx-auto">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Philosophy quote */}
        <div className="mt-16 bg-gray-50 border border-gray-100 rounded-2xl p-8 lg:p-12 text-center max-w-3xl mx-auto">
          <blockquote className="text-lg sm:text-xl font-medium text-gray-700 leading-relaxed italic">
            "Our platform brings your shipping into one place — connecting every carrier. With a single solution, you can ship orders, reduce costs, and scale effortlessly."
          </blockquote>
          <p className="text-sm text-primary-600 font-semibold mt-4">— The ShipSathi Team</p>
        </div>
      </div>
    </section>
  )
}
