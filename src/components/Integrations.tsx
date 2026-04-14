const couriers = [
  'Delhivery', 'Bluedart', 'Ekart', 'XpressBees',
  'DTDC', 'Shadowfax', 'Ecom Express', 'Smartr',
  'Amazon Shipping', 'Dunzo', 'Pickrr', 'Shyplite',
]

const platforms = [
  'Shopify', 'WooCommerce', 'Flipkart', 'Amazon',
  'Wix', 'Magento', 'Unicommerce', 'eBay',
]

export default function Integrations() {
  return (
    <section id="integrations" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-tag">Integrations</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            One platform. 100+ integrations.
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Connect all your sales channels and couriers in one place. ShipSathi integrates with the tools you already use.
          </p>
        </div>

        {/* Courier partners */}
        <div className="mb-12">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest text-center mb-6">
            Courier Partners
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {couriers.map((c) => (
              <span
                key={c}
                className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700 transition-all cursor-default"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Platform integrations */}
        <div>
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest text-center mb-6">
            eCommerce Platforms
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {platforms.map((p) => (
              <span
                key={p}
                className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700 transition-all cursor-default"
              >
                {p}
              </span>
            ))}
            <span className="px-4 py-2 bg-primary-50 border border-primary-200 rounded-xl text-sm font-semibold text-primary-700">
              + many more
            </span>
          </div>
        </div>

        {/* No volumetric weight callout */}
        <div className="mt-16 bg-gradient-to-r from-primary-50 to-green-50 border border-primary-100 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            No Volumetric Weight Charges up to 2 kg
          </h3>
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            On selected courier partners, ShipSathi eliminates extra volumetric weight charges for lightweight bulky parcels — saving you money on every shipment.
          </p>
        </div>
      </div>
    </section>
  )
}
