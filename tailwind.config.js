/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark:   '#0f172a',
          blue:   '#3b82f6',
          orange: '#f97316',
        },
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-orange': '0 0 24px 4px rgba(249,115,22,0.35)',
        'glow-orange-lg': '0 0 40px 8px rgba(249,115,22,0.3)',
        'glow-blue':   '0 0 24px 4px rgba(59,130,246,0.3)',
        'card':        '0 0 0 1px rgba(255,255,255,0.06), 0 4px 24px rgba(0,0,0,0.4)',
        'card-hover':  '0 0 0 1px rgba(59,130,246,0.3), 0 8px 40px rgba(59,130,246,0.12)',
      },
      backgroundImage: {
        'dot-grid': 'radial-gradient(circle, rgba(148,163,184,0.08) 1px, transparent 1px)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      backgroundSize: {
        'dot-24': '24px 24px',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
      },
    },
  },
  plugins: [],
}
