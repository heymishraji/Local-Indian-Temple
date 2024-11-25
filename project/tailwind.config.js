/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'maroon': {
          800: '#8B0000',
        },
        'saffron': {
          500: '#FF6F61',
        },
      },
      animation: {
        'ring': 'ring 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};