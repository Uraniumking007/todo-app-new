/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts}', './*.{html,js,ts}'],
  theme: {
    extend: {
      colors: {
        Charcoal: '#233d4d',
        Pumpkin: '#fe7f2d',
        Sunglow: '#fcca46',
        Olivine: '#a1c181',
        Zomp: '#619b8a',
        muted: '#808080',
      },
    },
  },
  plugins: [],
};
