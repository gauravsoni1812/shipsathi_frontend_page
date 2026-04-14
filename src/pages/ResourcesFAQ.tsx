import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqCategories = [
  {
    category: 'General',
    questions: [
      {
        q: 'What is ShipSathi?',
        a: 'ShipSathi is a tech-enabled courier aggregator that lets eCommerce sellers compare shipping rates across 30+ courier partners, create labels, track shipments, manage NDR/RTO, and handle COD remittances — all from one unified dashboard.',
      },
      {
        q: 'How is a courier aggregator different from a courier company?',
        a: 'A courier aggregator like ShipSathi connects you with multiple courier partners through a single platform. Instead of managing separate accounts with each courier, you get access to all of them from one dashboard with competitive rates, intelligent allocation, and unified tracking.',
      },
      {
        q: 'What makes ShipSathi the best courier aggregator?',
        a: 'ShipSathi offers AI-powered courier allocation, zero platform fees, 30+ verified courier partners, 29,000+ pincode coverage, free order verification, early COD remittance, and a dedicated account manager for every seller.',
      },
    ],
  },
  {
    category: 'Shipping & Orders',
    questions: [
      {
        q: 'How do I compare courier rates?',
        a: 'When you create an order on ShipSathi, our system automatically fetches real-time rates from all available courier partners for that specific route and weight. You can compare rates, delivery timelines, and performance scores side by side.',
      },
      {
        q: 'How does AWB and label generation work?',
        a: 'Once you select a courier and confirm the order, ShipSathi automatically generates the AWB (Air Waybill) number and shipping label. You can generate labels individually or in bulk, and customise them with your brand logo and details.',
      },
      {
        q: 'What is Smart Courier Allocation?',
        a: 'Smart Courier Allocation is our AI engine that automatically selects the best courier for each order based on pincode serviceability, shipping cost, historical delivery performance, and RTO risk score — maximising delivery success rates.',
      },
    ],
  },
  {
    category: 'NDR & RTO',
    questions: [
      {
        q: 'How does ShipSathi reduce NDR and RTO?',
        a: 'We use a multi-layer approach: free pre-dispatch order verification via WhatsApp/SMS, smart NDR follow-ups with buyers for address confirmation, automated reattempt scheduling (3-5 attempts), and NDR calling support — typically reducing RTO by 30-50%.',
      },
      {
        q: 'What is the weight dispute resolution process?',
        a: 'If a courier charges incorrect weight, you can raise a dispute directly from the ShipSathi dashboard with supporting documentation (photos, packaging details). Our team follows up with the courier on your behalf and resolves disputes transparently.',
      },
    ],
  },
  {
    category: 'Payments & COD',
    questions: [
      {
        q: 'How fast is COD remittance?',
        a: 'ShipSathi offers accelerated COD remittance with D+1 and D+2 settlement cycles available. Your COD dashboard provides complete transparency on all pending and completed payouts with zero extra charges for early remittance.',
      },
      {
        q: 'Are there any platform fees?',
        a: 'No. ShipSathi charges zero platform fees. You pay only for the actual shipping costs. There are no monthly subscriptions, no setup fees, and no hidden charges.',
      },
    ],
  },
  {
    category: 'Communication',
    questions: [
      {
        q: 'What customer communication channels are supported?',
        a: 'ShipSathi sends automated notifications via WhatsApp, SMS, and Email at every shipment milestone — from order confirmation to delivery. This keeps buyers informed and significantly reduces "Where is my order?" support queries.',
      },
      {
        q: 'What is free order verification?',
        a: 'Before dispatching COD orders, ShipSathi sends a verification message via WhatsApp/SMS to the buyer to confirm the order and address. This pre-dispatch verification catches fake orders early and reduces RTO — completely free of charge.',
      },
    ],
  },
]

export default function ResourcesFAQ() {
  const [openItem, setOpenItem] = useState<string | null>(null)

  const toggle = (key: string) => {
    setOpenItem(openItem === key ? null : key)
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-green-50 pt-16 pb-12 lg:pt-20 lg:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-tag">Resources</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto">
            Everything you need to know about ShipSathi. Can't find your answer?{' '}
            <a href="mailto:support@shipsathi.com" className="text-primary-600 font-medium hover:underline">
              Contact us
            </a>
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {faqCategories.map((cat) => (
            <div key={cat.category}>
              <h2 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                {cat.category}
              </h2>
              <div className="space-y-3">
                {cat.questions.map((faq, i) => {
                  const key = `${cat.category}-${i}`
                  return (
                    <div
                      key={key}
                      className="border border-gray-100 rounded-2xl overflow-hidden bg-white"
                    >
                      <button
                        className="w-full flex items-center justify-between px-6 py-4 text-left"
                        onClick={() => toggle(key)}
                      >
                        <span className="text-sm font-semibold text-gray-900 pr-4">{faq.q}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                            openItem === key ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {openItem === key && (
                        <div className="px-6 pb-5">
                          <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
