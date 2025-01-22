/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./dist/**/*.{html,js}", 
    "./src/**/*.{html,js}",  
  ],
  theme: {
    extend: {
      colors: {
        customfooter: '#23282D',
        customgray: '#4d4d4d',
        customnavgray:'#808080'
      },
      fontFamily: {
        'garamond': ['EB Garamond', 'serif'],
        'garamond-pro': ['Adobe Garamond Pro', 'EB Garamond', 'Garamond', 'serif'],
      },
    },
  },
  plugins: [],
};
