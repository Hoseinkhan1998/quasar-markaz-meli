/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],

  plugins: [
    // پلاگین برای افزودن breakpoint های ارتفاع
    plugin(function ({ addVariant }) {
      // برای موبایل در حالت افقی (landscape) که ارتفاع کم است
      addVariant('h-xs', '@media (min-height: 300px)')
      addVariant('h-sm', '@media (min-height: 600px)')

      // برای تبلت‌ها و لپ‌تاپ‌های کوچک
      addVariant('h-md', '@media (min-height: 768px)')

      // برای لپ‌تاپ‌های استاندارد
      addVariant('h-lg', '@media (min-height: 900px)')

      // برای مانیتورهای Full HD (مانند مانیتور ۲۴ اینچ شما)
      addVariant('h-xl', '@media (min-height: 1080px)')
    }),
    require('daisyui'),
  ],

  theme: {
    extend: {
      colors: {
        primarymain: 'var(--color-primarymain)',
        tintone: 'var(--color-tintone)',
        navbarselect: 'var(--color-navbarselect)',
        tinttwo: 'var(--color-tinttwo)',
      },
      // Breakpoint های استاندارد برای عرض صفحه
      screens: {
        // موبایل‌های بزرگ و تبلت‌های کوچک در حالت عمودی
        sm: '640px',
        // => @media (min-width: 640px) { ... }

        // تبلت‌ها در حالت عمودی
        md: '768px',
        // => @media (min-width: 768px) { ... }

        // لپ‌تاپ‌های کوچک و تبلت‌ها در حالت افقی
        lg: '1024px',
        // => @media (min-width: 1024px) { ... }

        // لپ‌تاپ‌ها و دسکتاپ‌های استاندارد
        xl: '1280px',
        // => @media (min-width: 1280px) { ... }

        // مانیتورهای بزرگ (نقطه شروع برای مانیتور شما)
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
}
