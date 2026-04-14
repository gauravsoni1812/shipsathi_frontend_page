import { Truck, MapPin, Scale, RefreshCw } from 'lucide-react'

const highlights = [
  {
    icon: Truck,
    value: '30+',
    title: 'Verified Courier Partners',
    desc: 'Select the best courier for every order based on cost, SLA, and serviceability across a pan-India network.',
  },
  {
    icon: MapPin,
    value: '29,000+',
    title: 'Pincodes Covered',
    desc: 'Deep coverage across India including Tier-2, Tier-3 cities and remote areas. Reach customers everywhere.',
  },
  {
    icon: Scale,
    value: '0',
    title: 'No Volumetric Weight up to 2 kg',
    desc: 'Eliminate extra volumetric charges on lightweight bulky parcels. Pay only for dead weight on select courier partners.',
  },
  {
    icon: RefreshCw,
    value: '3–5',
    title: 'Delivery Reattempts',
    desc: 'Structured follow-ups and reattempts for every failed delivery. Smart NDR workflows to recover every possible order.',
  },
]

export default function CoreHighlights() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h) => (
            <div key={h.title} className="card text-center group">
              <div className="w-14 h-14 mx-auto bg-primary-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors">
                <h.icon className="w-6 h-6 text-primary-600" />
              </div>
              <div className="text-2xl font-extrabold text-primary-600 mb-1">{h.value}</div>
              <h3 className="text-sm font-bold text-gray-900 mb-2">{h.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
