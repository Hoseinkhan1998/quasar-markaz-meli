<script setup>
const closeDropdown = () => {
  document.activeElement.blur()
}
</script>
<template>
  <div class="dropdown dropdown-bottom dropdown-end modal">
    <div tabindex="0" role="button" class="">
      <img src="/images/hosein.jpg" class="size-7 cursor-pointer rounded-full" alt="" />
    </div>
    <ul tabindex="0" class="dropdown-content text-primarymain flex flex-col w-[45vh] mt-5 rounded-3xl z-30 p-2 -me-2 bg-tintone">
      <!-- close button -->
      <div class="flex justify-end">
        <svg @click="closeDropdown" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 cursor-pointer">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </div>
      <!-- profile pic -->
      <div class="flex items-center justify-center w-full flex-col gap-2 mt-3">
        <img src="/images/chat2.jpg" class="w-[102px] h-[102px] rounded-full" alt="" />
        <p class="font-semibold text-lg">هادی احدی</p>
        <p class="text-sm">مدیر اداره برنامه ریزی</p>
      </div>
      <!-- pic & password -->
      <div class="grid grid-cols-12 mt-4 gap-x-1 px-2 pb-5 modal">
        <div class="col-span-6 cursor-pointer rounded-s-[42px] py-4 px-2 bg-white flex justify-center items-center gap-4">
          <div>icon</div>
          <p class="text-sm font-semibold">تغییر عکس پروفایل</p>
        </div>
        <div class="col-span-6 cursor-pointer rounded-e-[42px] py-4 px-2 bg-white flex justify-center items-center gap-4">
          <div>icon</div>
          <p class="text-sm font-semibold">تغییر رمز عبور</p>
        </div>
        <!-- ساختار تشکیلاتی -->
        <div class="col-span-full cursor-pointer rounded-t-[24px] mt-5 py-4 px-2 bg-white flex ps-5 items-center gap-4">
          <div>icon</div>
          <p class="text-sm font-semibold">ساختار تشکیلاتی</p>
        </div>
        <!-- محاسبه حکم حقوقی -->
        <div class="col-span-full cursor-pointer mt-1 rounded-b-[24px] py-4 px-2 bg-white flex ps-5 items-center gap-4">
          <div>icon</div>
          <p class="text-sm font-semibold">محاسبه حکم حقوقی</p>
        </div>
        <div class="col-span-full cursor-pointer mt-5 rounded-[42px] py-4 px-2 bg-white flex ps-5 items-center gap-4">
          <div>icon</div>
          <p class="text-sm font-semibold">خروج از حساب کاربری</p>
        </div>
      </div>
    </ul>
  </div>
</template>

<style></style>
