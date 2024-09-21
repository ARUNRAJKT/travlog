/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      width: {
        '1184': '1184px',
      },
      height: {
        '113': '113px',
      },
      colors: {
        customPurple: '#5D50C6',
      },
    },
  },
  plugins: [],
}

