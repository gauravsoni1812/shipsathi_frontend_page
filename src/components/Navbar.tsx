import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import Logo from './Logo'

type DropdownItem = { label: string; href: string }

interface NavDropdown {
  label: string
  items: DropdownItem[]
}

interface NavLink {
  label: string
  href: string
}

type NavItem = NavLink | NavDropdown

function isDropdown(item: NavItem): item is NavDropdown {
  return 'items' in item
}

const navItems: NavItem[] = [
  { label: 'Features', href: '/features' },
  {
    label: 'Services',
    items: [
      { label: 'Domestic Shipping', href: '/services/domestic' },
      { label: 'Bulk Shipping', href: '/services/bulk' },
    ],
  },
  {
    label: 'Company',
    items: [
      { label: 'About Us', href: '/company/about' },
      { label: 'Contact Us', href: '/company/contact' },
      { label: 'Life@ShipSathi', href: '/company/life' },
      { label: 'Blogs', href: '/company/blogs' },
    ],
  },
  {
    label: 'Resources',
    items: [
      // { label: 'YouTube Gallery', href: '/resources/youtube' },
      { label: 'Encyclopedia', href: '/resources/encyclopedia' },
      { label: 'FAQ', href: '/resources/faq' },
    ],
  },
]

function DesktopDropdown({ item }: { item: NavDropdown }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const timeout = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => {
    return () => clearTimeout(timeout.current)
  }, [])

  const handleEnter = () => {
    clearTimeout(timeout.current)
    setOpen(true)
  }
  const handleLeave = () => {
    timeout.current = setTimeout(() => setOpen(false), 150)
  }

  return (
    <div
      className="relative"
      ref={ref}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors">
        {item.label}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute top-full left-0 pt-2 z-50">
          <div className="bg-white border border-gray-100 rounded-xl shadow-lg py-2 min-w-[200px]">
            {item.items.map((sub) => (
              <Link
                key={sub.label}
                to={sub.href}
                className="block px-4 py-2.5 text-sm text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                onClick={() => setOpen(false)}
              >
                {sub.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const location = useLocation()

  const toggleMobileDropdown = (label: string) => {
    setMobileExpanded(mobileExpanded === label ? null : label)
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <Logo className="h-9" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) =>
              isDropdown(item) ? (
                <DesktopDropdown key={item.label} item={item} />
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'text-primary-600'
                      : 'text-gray-600 hover:text-primary-600'
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://panel.shipsathi.com/login"
              className="text-sm font-semibold text-gray-700 hover:text-primary-600 transition-colors px-3 py-2"
            >
              Login / Register
            </a>
            <a
              href="https://panel.shipsathi.com/tracking"
              className="btn-primary text-sm px-5 py-2.5"
            >
              Tracking
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
          {navItems.map((item) =>
            isDropdown(item) ? (
              <div key={item.label}>
                <button
                  className="w-full flex items-center justify-between text-sm font-medium text-gray-700 hover:text-primary-600 py-2.5"
                  onClick={() => toggleMobileDropdown(item.label)}
                >
                  {item.label}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      mobileExpanded === item.label ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {mobileExpanded === item.label && (
                  <div className="pl-4 pb-2 space-y-1">
                    {item.items.map((sub) => (
                      <Link
                        key={sub.label}
                        to={sub.href}
                        className="block text-sm text-gray-500 hover:text-primary-600 py-2"
                        onClick={() => setMobileOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                className={`block text-sm font-medium py-2.5 ${
                  location.pathname === item.href
                    ? 'text-primary-600'
                    : 'text-gray-700 hover:text-primary-600'
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
          <div className="pt-3 flex flex-col gap-2 border-t border-gray-100">
            <a
              href="https://panel.shipsathi.com/login"
              className="text-center text-sm font-semibold text-gray-700 py-2"
            >
              Login / Register
            </a>
            <a href="https://panel.shipsathi.com/tracking" className="btn-primary justify-center">
              Tracking
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
