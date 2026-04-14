import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Rohan Mehta',
    brand: 'CanineJoy Gears',
    category: 'Pet Accessories',
    rating: 5,
    quote:
      "ShipSathi has completely transformed how we ship. The smart courier selection saves us money daily, and the NDR follow-ups have cut our RTO rate by almost 40%.",
  },
  {
    name: 'Priya Sharma',
    brand: 'Parv Jewellers',
    category: 'Fashion & Jewellery',
    rating: 5,
    quote:
      "Best logistics platform in India for D2C brands. Our account manager is always reachable and resolves issues within hours. Highly recommended!",
  },
  {
    name: 'Arjun Singh',
    brand: 'XOVRA.IN',
    category: 'Electronics',
    rating: 5,
    quote:
      "The COD remittance is fast and transparent. We know exactly when our money is coming in. The analytics dashboard is incredible for tracking performance.",
  },
  {
    name: 'Sneha Patel',
    brand: 'Mercy Wear',
    category: 'Apparel',
    rating: 5,
    quote:
      "Switching to ShipSathi was the best decision for our business. The team genuinely understands the pain points of eCommerce sellers.",
  },
  {
    name: 'Vikram Nair',
    brand: 'Sagacity Store',
    category: 'Home & Living',
    rating: 5,
    quote:
      "The bulk dispatch feature is a game-changer. We dispatch 500+ orders daily and the entire process takes under 15 minutes now.",
  },
  {
    name: 'Kavya Reddy',
    brand: 'GreenRoots Organics',
    category: 'Health & Wellness',
    rating: 5,
    quote:
      "Pan-India coverage including remote pincodes, and the branded tracking page has significantly reduced our customer service calls.",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-tag">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Loved by 1,000+ eCommerce brands
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            From fashion to electronics, D2C brands across India trust ShipSathi to deliver on time, every time.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="card flex flex-col">
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              {/* Quote */}
              <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-5">"{t.quote}"</p>
              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-9 h-9 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold text-sm flex-shrink-0">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-400">
                    {t.brand} · {t.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
