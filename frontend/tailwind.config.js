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
        senary: '#',
      },
      fontFamily: {
        'lilita-one': ['lilita-one', 'Segoe UI'],
        'segoe-ui': ['"Segoe UI"', 'sans-serif'],
      },
      screens: {
        desktop: '1920px',
      },
    },
  },
  plugins: [],
}
