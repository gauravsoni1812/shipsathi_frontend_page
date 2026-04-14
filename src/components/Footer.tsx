import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import Logo from './Logo'

const footerLinks = {
  Product: [
    { label: 'Features', href: '/features' },
    { label: 'How It Works', href: '/#how-it-works' },
    { label: 'Integrations', href: '/#integrations' },
    { label: 'Pricing', href: '/#pricing' },
  ],
  Company: [
    { label: 'About Us', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: 'mailto:support@shipsathi.com' },
  ],
  Services: [
    { label: 'Domestic Shipping', href: '#' },
    { label: 'International Shipping', href: '#' },
    { label: 'Bulk / B2B Shipping', href: '#' },
    { label: 'COD Management', href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms & Conditions', href: '#' },
    { label: 'Refund & Cancellation', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-5">
              <Logo className="h-9 [&_text]:fill-white [&_text:last-of-type]:fill-primary-light" />
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-xs">
              India's trusted courier aggregator for eCommerce. Ship smarter, reduce RTO, and grow faster.
            </p>
            <div className="space-y-3">
              <a href="mailto:support@shipsathi.com" className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary-400 transition-colors">
                <Mail className="w-4 h-4" />
                support@shipsathi.com
              </a>
              <a href="tel:+917375000072" className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary-400 transition-colors">
                <Phone className="w-4 h-4" />
                +91 73750 00072
              </a>
              <div className="flex items-start gap-2 text-sm text-gray-500">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>India</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-sm font-semibold text-white mb-4">{heading}</h4>
              <ul className="space-y-3">
                {links.map((l) => (
                  <li key={l.label}>
                    {l.href.startsWith('/') && !l.href.startsWith('/#') ? (
                      <Link
                        to={l.href}
                        className="text-sm text-gray-500 hover:text-primary-400 transition-colors"
                      >
                        {l.label}
                      </Link>
                    ) : (
                      <a
                        href={l.href}
                        className="text-sm text-gray-500 hover:text-primary-400 transition-colors"
                      >
                        {l.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} ShipSathi. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-gray-600 hover:text-primary-400 transition-colors">Privacy</a>
            <a href="#" className="text-xs text-gray-600 hover:text-primary-400 transition-colors">Terms</a>
            <a href="#" className="text-xs text-gray-600 hover:text-primary-400 transition-colors">Refunds</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
