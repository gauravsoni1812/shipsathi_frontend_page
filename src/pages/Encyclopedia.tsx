import { useState } from 'react'
import { Search, BookOpen } from 'lucide-react'

const terms = [
  {
    term: 'AWB (Air Waybill)',
    definition:
      'A unique tracking number assigned to every shipment. It serves as a receipt and contract between the shipper and the courier, and is used to track the parcel from pickup to delivery.',
  },
  {
    term: 'COD (Cash on Delivery)',
    definition:
      'A payment method where the buyer pays for the order at the time of delivery. The courier collects the payment and remits it to the seller after deducting shipping charges.',
  },
  {
    term: 'Courier Aggregator',
    definition:
      'A platform that integrates multiple courier partners into a single dashboard, allowing sellers to compare rates, book shipments, and track orders across all couriers from one place.',
  },
  {
    term: 'Dead Weight',
    definition:
      'The actual physical weight of a parcel measured on a weighing scale. Shipping charges are based on the higher of dead weight or volumetric weight.',
  },
  {
    term: 'Delivery Attempt',
    definition:
      'An instance where the courier tries to deliver a parcel to the buyer. If unsuccessful, the shipment enters NDR status and follow-up actions are triggered.',
  },
  {
    term: 'ePOD (Electronic Proof of Delivery)',
    definition:
      'A digital record confirming that a shipment was delivered. Includes the receiver\'s name, signature or OTP confirmation, timestamp, and sometimes a photo.',
  },
  {
    term: 'Forward Shipment',
    definition:
      'A shipment moving from the seller\'s warehouse to the buyer\'s delivery address. The opposite of a reverse shipment (return pickup).',
  },
  {
    term: 'KYC (Know Your Customer)',
    definition:
      'A verification process required before sellers can start shipping. Involves submitting business documents and identity proof to comply with regulatory requirements.',
  },
  {
    term: 'Lane Performance',
    definition:
      'The historical delivery success rate of a specific courier on a particular route (origin pincode to destination pincode). Used by AI allocation engines to select the best courier.',
  },
  {
    term: 'Manifest',
    definition:
      'A document or digital record listing all shipments scheduled for pickup by a courier on a given day. It serves as a handover checklist between the seller and courier.',
  },
  {
    term: 'NDR (Non-Delivery Report)',
    definition:
      'A status report generated when a courier is unable to deliver a shipment. Common reasons include incorrect address, buyer not available, or refused delivery. Smart NDR workflows help recover these orders.',
  },
  {
    term: 'ODA (Out of Delivery Area)',
    definition:
      'Pincodes or areas that fall outside a courier\'s standard delivery network. ODA shipments may incur additional charges or longer delivery timelines.',
  },
  {
    term: 'Pickup Request',
    definition:
      'A request placed by the seller for the courier to collect shipments from the warehouse or pickup address. Can be scheduled on-demand or as a regular daily pickup.',
  },
  {
    term: 'Remittance',
    definition:
      'The transfer of collected COD payment from the courier to the seller. Remittance cycles (e.g., D+1, D+7) determine how quickly sellers receive their money.',
  },
  {
    term: 'Reverse Shipment',
    definition:
      'A return shipment where the courier picks up a parcel from the buyer and delivers it back to the seller\'s warehouse. Used for RTO orders, returns, and exchanges.',
  },
  {
    term: 'RTO (Return to Origin)',
    definition:
      'When a shipment is returned to the seller\'s warehouse after failed delivery attempts. High RTO rates increase shipping costs and hurt profitability.',
  },
  {
    term: 'Serviceability',
    definition:
      'Whether a courier can deliver to a specific pincode. Serviceability checks happen before booking to ensure the destination is covered by the selected courier partner.',
  },
  {
    term: 'SLA (Service Level Agreement)',
    definition:
      'The promised delivery timeline from a courier partner. For example, a 3-day SLA means the courier commits to delivering within 3 business days of pickup.',
  },
  {
    term: 'Volumetric Weight',
    definition:
      'A calculated weight based on the dimensions of a parcel (Length x Width x Height / 5000). Couriers charge based on whichever is higher: dead weight or volumetric weight.',
  },
  {
    term: 'WISMO (Where Is My Order)',
    definition:
      'Customer inquiries asking about the status of their order. Reducing WISMO queries through proactive tracking notifications is a key benefit of shipping platforms.',
  },
]

export default function Encyclopedia() {
  const [search, setSearch] = useState('')

  const filtered = terms.filter(
    (t) =>
      t.term.toLowerCase().includes(search.toLowerCase()) ||
      t.definition.toLowerCase().includes(search.toLowerCase())
  )

  const grouped = filtered.reduce<Record<string, typeof terms>>((acc, t) => {
    const letter = t.term[0].toUpperCase()
    if (!acc[letter]) acc[letter] = []
    acc[letter].push(t)
    return acc
  }, {})

  const sortedLetters = Object.keys(grouped).sort()

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-green-50 pt-16 pb-12 lg:pt-20 lg:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-tag">Resources</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            Shipping Encyclopedia
          </h1>
          <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto">
            Your comprehensive glossary of eCommerce shipping terms. Learn the jargon that powers the logistics industry.
          </p>

          {/* Search */}
          <div className="mt-8 max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search terms..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary-400 bg-white"
            />
          </div>
        </div>
      </section>

      {/* Terms */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {sortedLetters.length === 0 ? (
            <div className="text-center py-12">
              <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No terms found matching "{search}"</p>
            </div>
          ) : (
            <div className="space-y-10">
              {sortedLetters.map((letter) => (
                <div key={letter}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-9 h-9 bg-primary-50 rounded-lg flex items-center justify-center text-primary-700 font-bold text-sm">
                      {letter}
                    </span>
                    <div className="flex-1 h-px bg-gray-100" />
                  </div>
                  <div className="space-y-4">
                    {grouped[letter].map((t) => (
                      <div key={t.term} className="pl-12">
                        <h3 className="text-base font-bold text-gray-900 mb-1">{t.term}</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">{t.definition}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
