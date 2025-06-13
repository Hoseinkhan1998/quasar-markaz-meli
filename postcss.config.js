// postcss.config.js
import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss' // این خط اصلاح شده

export default {
  plugins: [
    autoprefixer({
      overrideBrowserslist: [
        'last 4 Chrome versions',
        'last 4 Firefox versions',
        'last 4 Edge versions',
        'last 4 Safari versions',
        'last 4 Android versions',
        'last 4 ChromeAndroid versions',
        'last 4 FirefoxAndroid versions',
        'last 4 iOS versions',
      ],
    }),
    tailwindcss, // اینجا هم از متغیر import‌شده استفاده می‌کنیم
    // اگر بعداً نیاز به postcss-rtlcss داشتی، می‌تونی import و فعالش کنی
    // import rtlcss from 'postcss-rtlcss';
    // rtlcss(),
  ],
}
