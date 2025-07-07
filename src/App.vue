<script setup>
import { useRoute } from 'vue-router'
import MainMenu from './components/MainMenu.vue'

const route = useRoute()
// import { ref } from 'vue'
</script>

<template>
  <div
    class="grid grid-cols-12 gap-5 min-h-screen bg-cover items-center bg-center"
    :class="`theme-${selectedTheme}`"
    :style="{ backgroundImage: `url(/images/homeposter.png)` }"
    dir="rtl"
  >
    <div class="col-span-full 2xl:px-[40vh] xl:px-[15vh] lg:px-[10vh] md:px-[1vh]">
      <div
        v-if="route.name !== 'login'"
        class="backdrop-blur-2xl rounded-2xl border-[0.5px] h-[80vh] border-gray-600 border-solid p-5 grid grid-cols-12"
      >
        <div class="col-span-1 flex items-center justify-center">
          <MainMenu />
        </div>
        <div class="col-span-11 h-full">
          <div class="flex flex-col gap-5 mt-10 h-full">
            <!-- navbar -->
            <div class="flex items-center justify-between">              
              <div class="flex items-center gap-4">
                <!-- icon -->
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_1_4777"
                    style="mask-type: alpha"
                    maskUnits="userSpaceOnUse"
                    x="3"
                    y="4"
                    width="41"
                    height="40"
                  >
                    <path
                      d="M43.4133 28.7967C43.3396 29.0945 43.2581 29.3905 43.1743 29.6829C40.1628 39.8606 29.6101 45.9849 19.2026 43.4139C8.79512 40.8428 2.30901 30.509 4.38353 20.0996C4.44555 19.8017 4.51119 19.5016 4.58497 19.2038C7.22984 8.49878 18.0904 1.94179 28.7957 4.58658C39.501 7.23092 46.0582 18.0912 43.4133 28.7967Z"
                      fill="#12702A"
                    />
                  </mask>
                  <g mask="url(#mask0_1_4777)">
                    <path
                      d="M31.4712 8.27818C36.3451 10.7737 46.9435 23.3176 35.5353 37.4657C42.6196 35.8971 51.6392 15.0161 31.4712 8.27818ZM16.5133 8.27818C-3.64964 15.0161 5.36484 35.8971 12.4491 37.4657C1.04094 23.3176 11.6393 10.7737 16.5133 8.27818ZM23.9133 7.54989C24.117 8.5532 29.5206 9.77041 28.8738 4.63165C28.0182 6.70956 25.543 6.64844 23.9438 5.68588C21.7437 6.91328 19.6912 6.61279 18.912 4.52979C18.1583 8.36985 21.9016 9.49539 23.9133 7.54989Z"
                      fill="white"
                    />
                    <path
                      d="M36.9347 23.2271C36.8583 16.8711 33.4868 11.2485 30.1662 8.97196C32.3561 11.6559 39.089 26.4713 26.1682 36.2242L26.4076 10.2656L23.9885 8.13672L21.5693 10.1637L21.9767 36.3719L21.8851 36.2955C8.8319 26.5476 15.6055 11.661 17.8005 8.97196C14.48 11.2485 11.1033 16.8711 11.032 23.2271C10.9658 28.6816 13.4614 34.6505 20.3725 39.5499C17.5819 40.2689 14.708 40.6131 11.8265 40.5736C14.1897 41.8621 18.6511 41.5514 22.048 41.2407L22.0531 41.5871L24.0801 43.8127L26.1173 41.4954V41.2306C29.5397 41.5463 34.0979 41.8876 36.5018 40.5787C33.5254 40.6279 30.5566 40.2628 27.6808 39.4939C34.5257 34.5996 37.0009 28.6612 36.9347 23.2271Z"
                      fill="white"
                    />
                  </g>
                </svg>
                <div class="flex flex-col gap-1 text-neutral-100 font-medium">
                  <p>پرتال مرکز ملی فضای مجازی</p>
                  <p>معاونت برنامه ریزی، پشتیبانی و توسعه منابه انسانی</p>
                </div>
              </div>
              <div class="flex items-center gap-5 text-neutral-100">
                <!-- notif icon -->
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-7 cursor-pointer"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                    />
                  </svg>
                </div>
                <!-- app icon -->
                <div>
                  <svg
                    class="size-7 cursor-pointer"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1_4783)">
                      <path
                        d="M14 6C14 7.10457 14.8954 8 16 8C17.1046 8 18 7.10457 18 6C18 4.89543 17.1046 4 16 4C14.8954 4 14 4.89543 14 6Z"
                        fill="white"
                      />
                      <path
                        d="M4 6C4 7.10457 4.89543 8 6 8C7.10457 8 8 7.10457 8 6C8 4.89543 7.10457 4 6 4C4.89543 4 4 4.89543 4 6Z"
                        fill="white"
                      />
                      <path
                        d="M24 6C24 7.10457 24.8954 8 26 8C27.1046 8 28 7.10457 28 6C28 4.89543 27.1046 4 26 4C24.8954 4 24 4.89543 24 6Z"
                        fill="white"
                      />
                      <path
                        d="M14 16C14 17.1046 14.8954 18 16 18C17.1046 18 18 17.1046 18 16C18 14.8954 17.1046 14 16 14C14.8954 14 14 14.8954 14 16Z"
                        fill="white"
                      />
                      <path
                        d="M4 16C4 17.1046 4.89543 18 6 18C7.10457 18 8 17.1046 8 16C8 14.8954 7.10457 14 6 14C4.89543 14 4 14.8954 4 16Z"
                        fill="white"
                      />
                      <path
                        d="M24 16C24 17.1046 24.8954 18 26 18C27.1046 18 28 17.1046 28 16C28 14.8954 27.1046 14 26 14C24.8954 14 24 14.8954 24 16Z"
                        fill="white"
                      />
                      <path
                        d="M14 26C14 27.1046 14.8954 28 16 28C17.1046 28 18 27.1046 18 26C18 24.8954 17.1046 24 16 24C14.8954 24 14 24.8954 14 26Z"
                        fill="white"
                      />
                      <path
                        d="M4 26C4 27.1046 4.89543 28 6 28C7.10457 28 8 27.1046 8 26C8 24.8954 7.10457 24 6 24C4.89543 24 4 24.8954 4 26Z"
                        fill="white"
                      />
                      <path
                        d="M24 26C24 27.1046 24.8954 28 26 28C27.1046 28 28 27.1046 28 26C28 24.8954 27.1046 24 26 24C24.8954 24 24 24.8954 24 26Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_4783">
                        <rect width="32" height="32" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <!-- prfile -->
                <div>
                  <img src="/images/hosein.jpg" class="size-7 cursor-pointer rounded-full" alt="" />
                </div>
              </div>
            </div>
            <div class="flex-grow min-h-[50vh] max-h-[30vh] pb-10">
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style>
@font-face {
  font-family: 'IRANSansX';
  src: url('/IRANSansX-Regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
body {
  font-family: 'IRANSansX', sans-serif;
}
</style>
