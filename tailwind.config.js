/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        purple: '#A729F5',
        'dark-navy': '#313E51',
        navy: '#3B4D66',
        'grey-navy': '#626C7F',
        'light-grey': '#ABC1E1',
        'light-bluish': '#F4F6FA',
        green: '#26D782',
        red: '#EE5454',
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
