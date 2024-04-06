// eslint-disable-next-line no-undef
const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        blue: '#043343',
        gold: '#b99581',
        gray: '#5a6260',
        gray100: '#f3f4f6',
        gray200: '#e5e7eb'
      },
      fontFamily: {
        'munito-sans': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI',, ]
      }
    },
  },
  plugins: [
    flowbite.plugin(), 
  ],
}

