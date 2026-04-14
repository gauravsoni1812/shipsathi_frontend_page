import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import FeaturesPage from './pages/FeaturesPage'
import BulkShipping from './pages/BulkShipping'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import YouTubeGallery from './pages/YouTubeGallery'
import Encyclopedia from './pages/Encyclopedia'
import ResourcesFAQ from './pages/ResourcesFAQ'
import ComingSoon from './pages/ComingSoon'
import './index.css'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<FeaturesPage />} />

          {/* Services */}
          <Route path="/services/domestic" element={<ComingSoon />} />
          <Route path="/services/bulk" element={<BulkShipping />} />

          {/* Company */}
          <Route path="/company/about" element={<AboutUs />} />
          <Route path="/company/contact" element={<ContactUs />} />
          <Route path="/company/life" element={<ComingSoon />} />
          <Route path="/company/blogs" element={<ComingSoon />} />

          {/* Resources */}
          <Route path="/resources/youtube" element={<ComingSoon />} />
          <Route path="/resources/encyclopedia" element={<Encyclopedia />} />
          <Route path="/resources/faq" element={<ResourcesFAQ />} />

          {/* Catch-all */}
          <Route path="*" element={<ComingSoon />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
