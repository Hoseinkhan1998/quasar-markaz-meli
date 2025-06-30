/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],

  plugins: [],
  theme: {
    extend: {
      colors: {
        primarymain: 'var(--color-primarymain)',
        secondarymain: 'var(--color-secondarymain)',
      },
    },
  },
}
