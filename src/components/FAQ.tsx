import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'What is ShipSathi?',
    a: 'ShipSathi is a tech-enabled courier aggregator that lets eCommerce sellers compare shipping rates across 30+ courier partners, create labels, track shipments, manage NDR/RTO, and handle COD remittances — all from one unified dashboard.',
  },
  {
    q: 'How is ShipSathi different from a courier company?',
    a: 'ShipSathi is not a courier itself — we aggregate multiple courier partners and intelligently route your shipments to the best one based on cost, speed, and serviceability. You get the benefits of multiple couriers without managing multiple accounts.',
  },
  {
    q: 'Are there any platform fees?',
    a: 'No. ShipSathi charges zero platform fees. You only pay for the shipping costs. There are no monthly subscriptions, no setup fees, and no hidden charges.',
  },
  {
    q: 'How does the Smart Courier Allocation work?',
    a: 'Our AI engine analyses historical lane performance, delivery speed, COD risk score, and serviceability for each order and automatically assigns the best-performing courier — maximising delivery success rates and minimising costs.',
  },
  {
    q: 'How can ShipSathi help reduce RTO?',
    a: 'We use a multi-layer approach: free order verification via WhatsApp/SMS before dispatch, smart NDR follow-up with buyers, and automated reattempt rules. This typically reduces RTO by 30–50% for our sellers.',
  },
  {
    q: 'How fast is COD remittance?',
    a: 'ShipSathi offers early COD remittance options with faster settlement cycles than standard courier timelines. Your COD dashboard clearly shows all pending and completed payouts.',
  },
  {
    q: 'What happens if a courier charges an incorrect weight?',
    a: 'We have a transparent weight dispute resolution process. You can raise disputes with supporting documentation directly from the dashboard and we will follow up with the courier on your behalf.',
  },
  {
    q: 'Do you support international shipping?',
    a: 'Yes. ShipSathi supports shipping to 195+ countries with duty-free (DDP) options. We also handle automated export documentation and provide multi-carrier international tracking.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-tag">FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently asked questions
          </h2>
          <p className="text-gray-500">
            Can't find the answer you're looking for? Reach us at{' '}
            <a href="mailto:support@shipsathi.com" className="text-primary-600 font-medium hover:underline">
              support@shipsathi.com
            </a>
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-100 rounded-2xl overflow-hidden bg-white"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-sm font-semibold text-gray-900 pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                    open === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
