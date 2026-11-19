/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f2f8f5',
          100: '#dfeee6',
          200: '#c1ddcd',
          300: '#94c3ab',
          400: '#62a384',
          500: '#418668',
          600: '#306b52',
          700: '#275643',
          800: '#214537',
          900: '#1c392e',
          950: '#0e2019',
        },
        gold: {
          50: '#fbf8eb',
          100: '#f6eecb',
          200: '#eeda94',
          300: '#e5c05c',
          400: '#dfab37',
          500: '#cd9524',
          600: '#ae731d',
          700: '#8c551c',
          800: '#74441e',
          900: '#63391e',
          950: '#381c0d',
        },
        clay: {
          50: '#f9f5f2',
          100: '#f0e7e0',
          200: '#e0cdc0',
          300: '#caab97',
          400: '#b2866c',
          500: '#a26e56',
          600: '#8d5b49',
          700: '#72473d',
          800: '#5d3c37',
          900: '#4c322f',
          950: '#2b1817',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        'fade-in': 'fade-in 0.5s ease-out both',
        'scale-in': 'scale-in 0.25s ease-out both',
      },
    },
  },
  plugins: [],
};
