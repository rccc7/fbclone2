module.exports = {
  // RCCC: Added by sonny: It means Just in time compiler, which is a really powerful feature
  //that tailwindcss has to enhance the development proccess as described in: https://tailwindcss.com/docs/just-in-time-mode
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
