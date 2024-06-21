/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2E3192',
        secondary: '#151868',
        tertiary: '#D12121',
        quaternary: '#707070',
        quinary: '#E6E6E6',
        senary: '#929292',
      },
      fontFamily: {
        'lilita-one': ['lilita-one', 'Segoe UI'],
        'segoe-ui': ['"Segoe UI"', 'sans-serif'],
      },
      fontSize: {
        'clamp-title': 'clamp(1.25rem, 6vw, 2.5rem)',
        'clamp-text': 'clamp(0.8rem, 2vw, 1rem)',
      },
      screens: {
        desktop: '1920px',
      },
    },
  },
  plugins: [],
}
