<script setup>
import { useRoute } from 'vue-router'
import MainMenu from './components/MainMenu.vue'
import Notif from './components/HomePage/Notif.vue';
import AppIcon from './components/HomePage/AppIcon.vue';
import Profile from './components/HomePage/Profile.vue';

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
    <div v-if="route.name !== 'login'" class="col-span-full 2xl:px-[40vh] xl:px-[30vh] lg:px-[20vh] md:px-[10vh] sm:px-[5vh]">
      <div
        
        class="backdrop-blur-2xl rounded-2xl border-[0.5px] h-[80vh] border-gray-600 border-solid p-5 grid grid-cols-12"
      >
        <div class="col-span-1 flex items-center justify-center">
          <MainMenu />
        </div>
        <div class="col-span-11 h-full">
          <div class="flex flex-col gap-5 mt-5 h-full">
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
                <Notif />
                <!-- app icon -->
                <AppIcon />
                <!-- profile -->
                <Profile />
              </div>
            </div>
            <div class="flex-grow min-h-[50vh] max-h-[30vh] pb-10">
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class=" col-span-full flex justify-center items-center" v-else>
      <router-view></router-view>
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
