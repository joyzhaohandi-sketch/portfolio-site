/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#f9f3e8',
        peach: '#f7d8c5',
        mint: '#b6d7cf',
        teal: '#4f8f88',
        ink: '#27343d',
        lilac: '#cab9df',
      },
      fontFamily: {
        heading: ['"Fraunces"', '"Cormorant Garamond"', 'serif'],
        body: ['"Manrope"', '"Nunito"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 18px 50px -20px rgba(79, 143, 136, 0.35)',
        card: '0 22px 50px -30px rgba(39, 52, 61, 0.45)',
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        drift: 'drift 12s linear infinite',
        pulseSoft: 'pulseSoft 4s ease-in-out infinite',
        rise: 'rise 800ms ease-out both',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        drift: {
          '0%': { transform: 'translateX(0) rotate(0deg)' },
          '50%': { transform: 'translateX(8px) rotate(2deg)' },
          '100%': { transform: 'translateX(0) rotate(0deg)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '0.95' },
        },
        rise: {
          '0%': { opacity: 0, transform: 'translateY(16px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
