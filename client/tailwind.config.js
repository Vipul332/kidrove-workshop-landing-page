/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      colors: {
        brand: {
          50:  '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
        accent: {
          300: '#fcd34d',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
        },
      },
      animation: {
        'fade-up':    'fadeUp 0.7s ease forwards',
        'fade-in':    'fadeIn 0.5s ease forwards',
        'float':      'float 4s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'shimmer':    'shimmer 1.5s infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%':   { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      boxShadow: {
        'glow-indigo': '0 0 30px rgba(99, 102, 241, 0.3)',
        'glow-amber':  '0 0 30px rgba(251, 146, 60, 0.4)',
        'card':        '0 4px 24px rgba(0, 0, 0, 0.06)',
        'card-hover':  '0 12px 40px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
}
