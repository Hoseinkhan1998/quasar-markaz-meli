<script setup>
import { ref } from 'vue'

// import MainMenu from './components/MainMenu.vue'
const theme = ['spring', 'haram', 'sky', 'red']
const selectedTheme = ref('spring')

const changeTheme = (newTheme) => {
  selectedTheme.value = newTheme
}
</script>

<template>
  <div
    class="grid grid-cols-12 gap-5 px-[150px] min-h-screen bg-cover justify-items-center items-center bg-center"
    :class="`theme-${selectedTheme}`"
    :style="{ backgroundImage: `url(/images/homeposter.png)` }"
    dir="rtl"
  >
    <!-- <div class="col-span-2 h-screen sticky top-0 self-start">
      <MainMenu />
    </div> -->
    <div class="col-span-5 flex items-center gap-3">
      <div
        v-for="t in theme"
        :key="t"
        class="flex justify-center items-center cursor-pointer p-3 rounded-lg text-neutral-100"
        :class="{
          'bg-[#5a1414]': t === 'spring',
          'bg-[#1da873]': t === 'haram',
          'bg-[#159bc4]': t === 'sky',
          'bg-[#d4302b]': t === 'red',
        }"
        @click="changeTheme(t)"
      >
        تم {{ t }}
      </div>
    </div>
    <div class="col-span-full">
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
