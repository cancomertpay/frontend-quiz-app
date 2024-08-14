/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        purple: '#A729F5',
        'dark-navy': '#313E51',
        navy: '#3B4D66',
        'grey-navy': '#626C7F',
        'light-grey': '#F4F6FA',
        'light-bluish': '#ABC1E1',
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
