/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-figtree)'],
      },
      colors: {
        'terracotta': {
          DEFAULT: '#E77366',
          50: '#FAE4E1',
          100: '#F8D4D0',
          200: '#F2B4AD',
          300: '#ED9389',
          400: '#E77366',
          500: '#DF4736',
          600: '#BF2E1E',
          700: '#8E2216',
          800: '#5E170F',
          900: '#2D0B07',
          950: '#150503'
        },
        'midnight': {
          DEFAULT: '#061026',
          50: '#AAC1F1',
          100: '#98B4EE',
          200: '#759AE9',
          300: '#5280E3',
          400: '#2F67DD',
          500: '#2054C4',
          600: '#1A45A1',
          700: '#14367E',
          800: '#0F275A',
          900: '#091837',
          950: '#061026'
        },
      },
      backgroundImage: {
        'hero-bg': "url('/images/av-hero-bg.png')",
      },
    }
  },
  plugins: [],
}
