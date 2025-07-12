<script setup>
// تعریف پراپ برای دریافت اطلاعات مخاطب از کامپوننت والد
defineProps({
  contact: {
    type: Object,
    required: true,
  },
})

// تعریف رویدادی که هنگام بستن پنل به والد ارسال می‌شود
const emit = defineEmits(['close'])
</script>

<template>
  <div class="bg-white flex flex-col items-center rounded-lg">
    <!-- Header -->
    <div class="flex justify-between w-full items-center rounded-t-lg bg-tintone px-4">
      <h3 class="font-bold text-primarymain">جزئیات مخاطب</h3>
      <!-- Close Button -->
      <button @click="emit('close')" class="text-primarymain">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"
          class="size-6">

          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <!-- Profile Info -->
    <div class="mt-4 overflow-y-auto h-lg:h-[calc(50vh+50px)] h-md:h-[calc(48vh+50px)] h-sm:h-[calc(40vh+50px)] pb-5">
      <div class="flex flex-col items-center">
        <div class="flex flex-col items-center mt-8">
          <img :src="contact.avatar" class="rounded-full w-28 h-28 object-cover" />
          <p class="text-lg font-bold text-primarymain mt-4">{{ contact.name }}</p>
          <p class="text-sm bg-tintone text-primarymain px-4 py-1 rounded-full mt-2">
            {{ contact.role }}
          </p>
        </div>

        <div class="grid grid-cols-2 gap-1 mt-8">
          <div class="bg-tintone rounded-lg flex flex-col items-center justify-center p-4">
            <p class="text-sm text-primarymain">لینک های ارسال شده</p>
            <p class="text-4xl font-black text-primarymain mt-2">{{ contact.stats.links }}</p>
          </div>
          <div class="bg-tintone rounded-lg flex flex-col items-center justify-center p-4">
            <p class="text-sm text-primarymain">تصاویر ارسال شده</p>
            <p class="text-4xl font-black text-primarymain mt-2">{{ contact.stats.images }}</p>
          </div>
          <div class="bg-tintone rounded-lg flex flex-col items-center justify-center p-4">
            <p class="text-sm text-primarymain">فایل های ارسال شده</p>
            <p class="text-4xl font-black text-primarymain mt-2">{{ contact.stats.files }}</p>
          </div>
          <div class="bg-tintone rounded-lg flex flex-col items-center justify-center p-4">
            <p class="text-sm text-primarymain">ویدیو های ارسال شده</p>
            <p class="text-4xl font-black text-primarymain mt-2">{{ contact.stats.videos }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
