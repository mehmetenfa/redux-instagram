/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: '#0095f6',
        facebook: '#385185',
      },
      backgroundImage: {
        'logo-pattern': 'url(https://static.cdninstagram.com/rsrc.php/v3/y4/r/ItTndlZM2n2.png)'
      }
    },
  },
  plugins: [],
}