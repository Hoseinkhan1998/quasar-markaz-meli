/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],

  plugins: [],
  theme: {
    extend: {
      colors: {
        primarymain: 'var(--color-primarymain)',
        tintone: 'var(--color-tintone)',
        navbarselect: 'var(--color-navbarselect)',
        tinttwo: 'var(--color-tinttwo)',
      },
      screens: {
        sm: '640px',
        // => @media (min-width: 640px) { ... }

        md: '768px',
        // => @media (min-width: 768px) { ... }

        lg: '1024px',
        // => @media (min-width: 1024px) { ... }

        xl: '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1920px',
        // => @media (min-width: 1920px) { ... }
      },
    },
  },
}