/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        'primary-color': '#AED2FF',
        'secondary-color': '#9400FF',
        'tertiary-color': '#E4F1FF',
        'quaternary-color': '#27005D',
      },
      textColor: {
        'primary-color': 'black',
      },
    },
  },
  plugins: [],
};
