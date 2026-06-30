import { useState } from 'react'

const NEXORA_WA =
  'https://wa.me/5493416621389?text=Hola%20Nexora!%20Vi%20una%20demo%20y%20quiero%20un%20sitio%20para%20mi%20negocio.'

export default function DemoBanner() {
  const [visible, setVisible] = useState(true)
  if (!visible) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 flex items-center gap-3 px-4 py-3 sm:px-6"
      style={{ backgroundColor: '#0f172a', borderTop: '1px solid rgba(255,255,255,0.08)' }}
    >
      <p className="text-sm text-slate-300 flex-1 min-w-0 truncate">
        <span className="font-semibold text-orange-400">Demo</span>
        {' · Sitio de muestra por '}
        <span className="font-semibold text-white">Nexora Desarrollos</span>
        <span className="hidden sm:inline"> · ¿Querés uno para tu negocio?</span>
      </p>
      <a
        href={NEXORA_WA}
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold bg-orange-500 text-white hover:bg-orange-400 transition-colors"
      >
        Consultanos
      </a>
      <button
        onClick={() => setVisible(false)}
        aria-label="Cerrar"
        className="shrink-0 p-1 text-slate-500 hover:text-slate-300 transition-colors"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  )
}
