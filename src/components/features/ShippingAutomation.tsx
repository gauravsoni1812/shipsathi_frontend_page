import { DollarSign, Layers, Tag, Plug } from 'lucide-react'

const automations = [
  {
    icon: DollarSign,
    title: 'Flat-Rate Shipping',
    desc: 'Predictable, consistent billing across shipments. No surprises — know exactly what you will pay per order with our transparent flat-rate pricing model.',
  },
  {
    icon: Layers,
    title: 'Unified B2B & B2C Platform',
    desc: 'Whether you ship individual parcels or bulk freight, manage everything from a single dashboard. Unified tracking, reporting, and billing for all shipment types.',
  },
  {
    icon: Tag,
    title: 'Branded Labels & Invoices',
    desc: 'Generate professional shipping labels and invoices with your brand logo, colours, and details. Make every package a brand touchpoint for your customers.',
  },
  {
    icon: Plug,
    title: 'One-Click Store Integration',
    desc: 'Connect Shopify, WooCommerce, Amazon, Flipkart, and more with a single click. Orders auto-sync in real time so you never miss a shipment.',
  },
]

export default function ShippingAutomation() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-tag">Automation</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Shipping automation that saves hours daily
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Automate the repetitive parts of shipping so you can focus on growing your business.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {automations.map((a) => (
            <div key={a.title} className="card group flex gap-5">
              <div className="w-12 h-12 flex-shrink-0 bg-primary-50 rounded-xl flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                <a.icon className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{a.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
