/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        persimmon: {
          50: '#fff2f1',
          100: '#ffe2df',
          200: '#ffcbc5',
          300: '#ffa69d',
          400: '#ff7364',
          500: '#ff5e4d',
          600: '#ed2a15',
          700: '#c81f0d',
          800: '#a51d0f',
          900: '#881f14',
          950: '#4b0b04'
        }
      },
      backgroundImage: {
        'hero-bg': "url('/images/av-hero-bg.png')",
      }
    }
  },
  plugins: [],
}
