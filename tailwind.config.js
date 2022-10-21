/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors:{
      'dark-background': '#232323',
      'dark-text-primary': 'rgba(38, 231, 245, 0.849)',
      'dark-text-secondary':'#fff',
      'dark-icon-color': 'rgba(38, 231, 245, 0.849)',
      'dark-footer-icon':'rgba(38, 231, 245, 0.849)',
      'dark-column-bg': '#1E1E1E',
      'dark-footer-hover':'rgba(38, 231, 245, 0.849)',
      'dark-skill-border':'#2d3033',
      'light-background': '#060A90',
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
