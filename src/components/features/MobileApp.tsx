import { Smartphone, Package, MapPin, HeadphonesIcon, BarChart3 } from 'lucide-react'

const appFeatures = [
  { icon: Package, text: 'Book shipments on the go' },
  { icon: MapPin, text: 'Track orders in real time' },
  { icon: HeadphonesIcon, text: 'Access support instantly' },
  { icon: BarChart3, text: 'View analytics anywhere' },
]

export default function MobileApp() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden flex flex-col lg:flex-row">
          {/* Visual */}
          <div className="lg:w-5/12 bg-gradient-to-br from-primary-600 to-primary-700 flex items-center justify-center p-12 lg:p-16">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto bg-white/10 backdrop-blur rounded-3xl flex items-center justify-center mb-6">
                <Smartphone className="w-12 h-12 text-white" />
              </div>
              <p className="text-white/80 text-sm font-medium">Available on</p>
              <p className="text-white text-lg font-bold mt-1">iOS & Android</p>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-7/12 p-8 lg:p-12 flex flex-col justify-center">
            <span className="section-tag">Mobile App</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Ship faster with the ShipSathi app
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-8">
              Control your entire shipping operation from your pocket. Book shipments, track orders, manage NDR, view analytics, and reach support — all from our mobile app.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {appFeatures.map((f) => (
                <div key={f.text} className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <f.icon className="w-4 h-4 text-primary-600" />
                  </div>
                  <span className="text-sm text-gray-700 font-medium">{f.text}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-xl hover:bg-gray-800 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                App Store
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-xl hover:bg-gray-800 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.61 1.814L13.793 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.61-.92zm10.893 9.476l2.56-2.56 5.07 2.897c.57.326.57 1.42 0 1.746l-5.07 2.897-2.56-2.56L12.91 12l1.593-1.71zm-1.593 1.71L4.325 22.67l8.585-8.585v-.002l.002.002-.002-.085zm0-2L4.325 1.33 12.91 9.915v.002l-.002-.002.002.085z" />
                </svg>
                Google Play
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
