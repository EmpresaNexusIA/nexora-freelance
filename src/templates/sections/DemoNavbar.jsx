import { useState, useEffect } from 'react'
import { buildWAUrl } from '../../config/demoDefaults.js'

export default function DemoNavbar({ data }) {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const { theme, features, businessName, logoImage, whatsappNumber, whatsappMessage } = data

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const waUrl = buildWAUrl(whatsappNumber, whatsappMessage)

  const links = [
    { label: 'Servicios', href: '#servicios' },
    ...(features.gallery      ? [{ label: 'Galería',    href: '#galeria'    }] : []),
    ...(features.horarios     ? [{ label: 'Horarios',   href: '#horarios'   }] : []),
    ...(features.testimonials ? [{ label: 'Reseñas',    href: '#testimonios'}] : []),
    { label: 'Contacto', href: '#contacto' },
  ]

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav
      className={`sticky top-0 z-40 transition-shadow duration-200 ${scrolled ? 'shadow-md' : ''}`}
      style={{
        backgroundColor: '#ffffff',
        borderBottom: `1px solid ${theme.primaryColor}18`,
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a
          href="#inicio"
          className="flex items-center gap-2.5 font-bold text-xl tracking-tight"
          style={{ fontFamily: theme.fontTitle, color: theme.primaryColor }}
        >
          {logoImage && (
            <img src={logoImage} alt={businessName} className="h-9 w-auto rounded" />
          )}
          {businessName}
        </a>

        {/* Desktop */}
        <div className="hidden sm:flex items-center gap-6">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium hover:opacity-60 transition-opacity"
              style={{ color: theme.textMuted }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ backgroundColor: theme.btnBg, color: theme.btnText }}
          >
            Contactanos
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="sm:hidden p-2 rounded-md"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          style={{ color: theme.textPrimary }}
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="sm:hidden border-t px-4 py-4 flex flex-col gap-1"
          style={{ backgroundColor: '#ffffff', borderColor: `${theme.primaryColor}15` }}
        >
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="text-sm font-medium py-2.5 border-b last:border-b-0"
              style={{ color: theme.textPrimary, borderColor: `${theme.primaryColor}10` }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-center px-4 py-3 rounded-lg text-sm font-semibold"
            style={{ backgroundColor: theme.btnBg, color: theme.btnText }}
          >
            Contactanos por WhatsApp
          </a>
        </div>
      )}
    </nav>
  )
}
