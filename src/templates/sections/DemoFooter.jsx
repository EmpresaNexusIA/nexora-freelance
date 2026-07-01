export default function DemoFooter({ data }) {
  const { theme, businessName, footerTagline, instagram } = data

  return (
    <footer
      className="py-8 px-4 sm:px-6"
      style={{ backgroundColor: theme.primaryColor, borderTop: 'rgba(255,255,255,0.08) 1px solid' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="text-center sm:text-left">
          <p className="font-bold text-white" style={{ fontFamily: theme.fontTitle }}>
            {businessName}
          </p>
          {footerTagline && (
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
              {footerTagline}
            </p>
          )}
          {instagram && (
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition-opacity hover:opacity-80"
              style={{ color: theme.secondaryColor }}
            >
              Instagram
            </a>
          )}
        </div>

        <a
          href="https://nexora-freelance.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs transition-opacity hover:opacity-80"
          style={{ color: 'rgba(255,255,255,0.45)' }}
        >
          Sitio web por <span className="font-semibold text-white/70">Nexora Desarrollos</span>
        </a>
      </div>
    </footer>
  )
}
