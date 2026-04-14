const stats = [
  { value: '30+', label: 'Courier Partners' },
  { value: '29,000+', label: 'Pincodes Covered' },
  { value: '195+', label: 'Countries Served' },
  { value: '₹0', label: 'Platform Fees' },
]

export default function Stats() {
  return (
    <section className="bg-primary-600 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">{s.value}</div>
              <div className="text-sm text-green-100 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
