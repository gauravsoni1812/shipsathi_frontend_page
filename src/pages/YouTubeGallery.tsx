import { Play } from 'lucide-react'

const videos = [
  {
    id: 'video-1',
    title: 'How to Import Bulk Orders for B2B Shipping',
    thumbnail: null,
    youtubeId: '',
  },
  {
    id: 'video-2',
    title: 'B2C Bulk Import — Step by Step Guide',
    thumbnail: null,
    youtubeId: '',
  },
  {
    id: 'video-3',
    title: 'Customize Your Branded Tracking Page',
    thumbnail: null,
    youtubeId: '',
  },
  {
    id: 'video-4',
    title: 'How to Create Multi-Box B2B Orders',
    thumbnail: null,
    youtubeId: '',
  },
  {
    id: 'video-5',
    title: 'How to Create a Single Box B2C Order',
    thumbnail: null,
    youtubeId: '',
  },
  {
    id: 'video-6',
    title: 'How to Customize Your Shipping Label',
    thumbnail: null,
    youtubeId: '',
  },
  {
    id: 'video-7',
    title: 'Setting Up Warehouse & Pickup Addresses',
    thumbnail: null,
    youtubeId: '',
  },
  {
    id: 'video-8',
    title: 'Understanding NDR Management Dashboard',
    thumbnail: null,
    youtubeId: '',
  },
  {
    id: 'video-9',
    title: 'COD Remittance & Wallet Overview',
    thumbnail: null,
    youtubeId: '',
  },
]

export default function YouTubeGallery() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-green-50 pt-16 pb-12 lg:pt-20 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-tag">Resources</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            YouTube Gallery
          </h1>
          <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto">
            Watch step-by-step tutorials on how to use every feature of the ShipSathi platform.
          </p>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((v) => (
              <div
                key={v.id}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
              >
                {/* Thumbnail / Placeholder */}
                <div className="relative aspect-video bg-gray-900 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900" />
                  {/* ShipSathi branding on placeholder */}
                  <div className="absolute top-3 left-3 flex items-center gap-2 z-10">
                    <div className="w-6 h-6 bg-primary-600 rounded-md flex items-center justify-center">
                      <span className="text-white text-[8px] font-bold">SS</span>
                    </div>
                    <span className="text-white text-xs font-medium opacity-80">ShipSathi</span>
                  </div>
                  {/* Play button */}
                  <div className="relative z-10 w-16 h-11 bg-red-600 rounded-xl flex items-center justify-center group-hover:bg-red-700 transition-colors cursor-pointer shadow-lg">
                    <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                  </div>
                  {/* Bottom bar mimicking YouTube embed */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 z-10">
                    <p className="text-white text-xs font-medium truncate">{v.title}</p>
                  </div>
                </div>
                {/* Title below */}
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-900 leading-snug">{v.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Subscribe CTA */}
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500 mb-4">
              Want more tutorials? Subscribe to our YouTube channel for the latest updates.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-colors text-sm"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              Subscribe on YouTube
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
