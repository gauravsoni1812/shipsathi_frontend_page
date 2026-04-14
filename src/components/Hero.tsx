import { ArrowRight, TrendingDown, Zap, Shield } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-green-50 pt-20 pb-24 lg:pt-28 lg:pb-32">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-100 rounded-full opacity-20 blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-100 rounded-full opacity-20 blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-primary-100 rounded-full text-sm font-medium text-primary-700 shadow-sm mb-8">
            <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
            Trusted by 1,000+ growing eCommerce brands
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight">
            India's Smartest{' '}
            <span className="text-primary-600">Courier Aggregator</span>{' '}
            for eCommerce Shipping
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-gray-500 leading-relaxed mb-10 max-w-2xl mx-auto">
            Compare couriers, create labels, track shipments, reduce RTO, and keep your COD remittances clear — all from one powerful dashboard.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a href="https://panel.shipsathi.com/register" className="btn-primary text-base px-8 py-3.5 w-full sm:w-auto">
              Start Shipping for Free
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#how-it-works" className="btn-outline text-base px-8 py-3.5 w-full sm:w-auto">
              See How It Works
            </a>
          </div>

          {/* Trust pills */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-primary-600" />
              No platform fees
            </span>
            <span className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-primary-600" />
              Free KYC verification
            </span>
            <span className="flex items-center gap-1.5">
              <TrendingDown className="w-4 h-4 text-primary-600" />
              Lowest shipping rates
            </span>
          </div>
        </div>

        {/* Dashboard mockup */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
            {/* Browser bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-100">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 mx-4 bg-white border border-gray-200 rounded-lg px-3 py-1 text-xs text-gray-400 text-center">
                panel.shipsathi.com
              </div>
            </div>
            {/* Mock dashboard content */}
            <div className="p-6 bg-gray-50">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                {[
                  { label: 'Total Orders', value: '12,847', color: 'bg-primary-50 border-primary-100', text: 'text-primary-700' },
                  { label: 'Delivered', value: '10,240', color: 'bg-green-50 border-green-100', text: 'text-green-700' },
                  { label: 'In Transit', value: '1,893', color: 'bg-blue-50 border-blue-100', text: 'text-blue-700' },
                  { label: 'RTO Rate', value: '4.2%', color: 'bg-orange-50 border-orange-100', text: 'text-orange-700' },
                ].map((stat) => (
                  <div key={stat.label} className={`${stat.color} border rounded-xl p-4`}>
                    <p className="text-xs text-gray-500 mb-1">{stat.label}</p>
                    <p className={`text-xl font-bold ${stat.text}`}>{stat.value}</p>
                  </div>
                ))}
              </div>
              <div className="bg-white rounded-xl border border-gray-100 p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-gray-700">Recent Shipments</span>
                  <span className="text-xs text-primary-600 font-medium">View all</span>
                </div>
                <div className="space-y-2">
                  {[
                    { id: 'SS2041983', courier: 'Delhivery', status: 'Delivered', color: 'text-green-600 bg-green-50' },
                    { id: 'SS2041982', courier: 'Bluedart', status: 'In Transit', color: 'text-blue-600 bg-blue-50' },
                    { id: 'SS2041981', courier: 'Ekart', status: 'Out for Delivery', color: 'text-orange-600 bg-orange-50' },
                  ].map((row) => (
                    <div key={row.id} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                      <span className="text-xs font-mono text-gray-600">{row.id}</span>
                      <span className="text-xs text-gray-500">{row.courier}</span>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${row.color}`}>{row.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
