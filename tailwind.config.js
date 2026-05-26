/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#f8f2e8',
        coral: '#f2cdb7',
        seafoam: '#bcd9d1',
        teal: '#4b8f88',
        ink: '#27343d',
        lilac: '#d8c7e8',
      },
      fontFamily: {
        heading: ['"Instrument Serif"', '"Cormorant Garamond"', 'serif'],
        body: ['"Plus Jakarta Sans"', '"Nunito"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 55px -35px rgba(39, 52, 61, 0.42)',
        card: '0 22px 55px -32px rgba(39, 52, 61, 0.5)',
      },
      animation: {
        floatSlow: 'floatSlow 10s ease-in-out infinite',
        drift: 'drift 14s linear infinite',
        breathe: 'breathe 6s ease-in-out infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        drift: {
          '0%': { transform: 'translateX(0) rotate(0deg)' },
          '50%': { transform: 'translateX(10px) rotate(2deg)' },
          '100%': { transform: 'translateX(0) rotate(0deg)' },
        },
        breathe: {
          '0%, 100%': { opacity: '0.55', transform: 'scale(1)' },
          '50%': { opacity: '0.95', transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
}
