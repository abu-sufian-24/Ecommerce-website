/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
const flowbite = require('flowbite-react/tailwind');
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', flowbite.content()],
  theme: {
    extend: {
      colors: {
        primary: '#fea928',
        secondary: '#ed8900',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '3rem',
        },
      },
    },
  },
  plugins: [flowbite.plugin()],
};
