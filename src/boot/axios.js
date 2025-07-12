import { boot } from 'quasar/wrappers'
import axios from 'axios'
import { useMajaziStore } from 'src/stores/majazi-store'

// یک نمونه از axios با تنظیمات پایه می‌سازیم
const api = axios.create()

export default boot(({ app, store }) => {
  // نمونه Pinia را به store پاس می‌دهیم
  const majaziStore = useMajaziStore(store)

  // تنظیم baseUrl برای نمونه axios از طریق Pinia
  api.defaults.baseURL = majaziStore.getBaseUrl

  // این بخش (interceptor) قبل از ارسال هر درخواست اجرا می‌شود
  api.interceptors.request.use(
    (config) => {
      // توکن را از localStorage بخوان
      const token = localStorage.getItem('userToken')

      // اگر توکن وجود داشت، آن را به هدر Authorization اضافه کن
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    (error) => {
      return Promise.reject(error)
    },
  )

  // برای دسترسی راحت در تمام برنامه، api را به صورت سراسری تعریف می‌کنیم
  app.config.globalProperties.$api = api
})

// نمونه ساخته شده را export می‌کنیم تا در فایل‌های vue بتوانیم از آن استفاده کنیم
export { api }
