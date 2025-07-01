<script setup>
import MainMenu from './components/MainMenu.vue'

// import { ref } from 'vue'
</script>

<template>
  <div
    class="grid grid-cols-12 gap-5 min-h-screen bg-cover justify-items-center items-center bg-center"
    :class="`theme-${selectedTheme}`"
    :style="{ backgroundImage: `url(/images/homeposter.png)` }"
    dir="rtl"
  >
    <div class="col-span-full">
      <div class=" w-[150vh] backdrop-blur-2xl rounded-2xl border-[0.5px] h-[80vh] border-gray-600 border-solid p-5 grid grid-cols-12">
        <div class="col-span-1 flex items-center justify-center">
          <MainMenu />
        </div>
        <div class="col-span-10">
          <router-view></router-view>
        </div>
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
