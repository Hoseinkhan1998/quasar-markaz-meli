<script setup>
import { ref } from 'vue'

const selectedTab = ref('همه')

const selectTab = (tab) => {
  selectedTab.value = tab
}

import InfoCart from '../components/HomePage/InfoCart.vue'
import SmalCart from '../components/HomePage/SmalCart.vue'

const tabs = [
  'همه',
  'اطلاعیه ها',
  'درنگی نورانی',
  'سرمایه انسانی',
  'اخبار فضای مجازی',
  'پینگ',
  'محفل تخصصی',
  'ضوابط حراست',
  'آیین نامه ها و ضوابط',
  'سرخط',
  'فناوری اطلاعات',
]
const cards = [
  {
    date: { day: '۱۴', month: 'فروردین', year: '۱۴۰۴' },
    dotColor: 'bg-red-600',
    badge: 'آیین نامه ها و ضوابط',
    badgeColor: 'bg-green-400',
    text: 'به مناسبت ولادت حضرت معصومه سلام الله علیها کارت اوانو شارژ شد',
    read: true,
  },
  {
    date: { day: '۱۴', month: 'فروردین', year: '۱۴۰۴' },
    dotColor: 'bg-red-600',
    badge: 'آیین نامه ها و ضوابط',
    badgeColor: 'bg-green-400',
    text: 'به مناسبت ولادت حضرت معصومه سلام الله علیها کارت اوانو شارژ شد',
    read: true,
  },
  {
    date: { day: '۱۴', month: 'فروردین', year: '۱۴۰۴' },
    dotColor: 'bg-red-600',
    badge: 'آیین نامه ها و ضوابط',
    badgeColor: 'bg-green-400',
    text: 'به مناسبت ولادت حضرت معصومه سلام الله علیها کارت اوانو شارژ شد',
    read: true,
  },
  {
    date: { day: '۱۴', month: 'فروردین', year: '۱۴۰۴' },
    dotColor: 'bg-red-600',
    badge: 'آیین نامه ها و ضوابط',
    badgeColor: 'bg-green-400',
    text: 'به مناسبت ولادت حضرت معصومه سلام الله علیها کارت اوانو شارژ شد',
    read: false,
  },
  {
    date: { day: '۱۴', month: 'فروردین', year: '۱۴۰۴' },
    dotColor: 'bg-red-600',
    badge: 'آیین نامه ها و ضوابط',
    badgeColor: 'bg-green-400',
    text: 'به مناسبت ولادت حضرت معصومه سلام الله علیها کارت اوانو شارژ شد',
    read: false,
  },
  {
    date: { day: '۱۴', month: 'فروردین', year: '۱۴۰۴' },
    dotColor: 'bg-red-600',
    badge: 'آیین نامه ها و ضوابط',
    badgeColor: 'bg-green-400',
    text: 'به مناسبت ولادت حضرت معصومه سلام الله علیها کارت اوانو شارژ شد',
    read: false,
  },
  {
    date: { day: '۱۴', month: 'فروردین', year: '۱۴۰۴' },
    dotColor: 'bg-red-600',
    badge: 'آیین نامه ها و ضوابط',
    badgeColor: 'bg-green-400',
    text: 'به مناسبت ولادت حضرت معصومه سلام الله علیها کارت اوانو شارژ شد',
    read: false,
  },
]
</script>
<template>
  <div class="w-full gap-5 flex-col flex pb-10 bg-neutral-200">
    <!-- tabs buttons -->
    <div class="w-full flex flex-wrap gap-2">
      <div
        v-for="tab in tabs"
        :key="tab"
        @click="selectTab(tab)"
        :class="[
          'py-1 px-3 rounded-lg font-semibold text-sm cursor-pointer transition-all duration-150',
          selectedTab === tab
            ? 'bg-[#75781B] text-neutral-100'
            : 'bg-neutral-100 text-[#1E1B78] hover:bg-[#aeb334] hover:text-neutral-100',
        ]"
      >
        {{ tab }}
      </div>
    </div>
    <div class="w-full flex flex-col gap-5">
      <div class="!flex items-center gap-5">
        <!-- Occasion card -->
        <div
          class="w-5/12 rounded-lg h-[344px] overflow-y-auto bg-neutral-100 py-5 px-3 shadow-lg shadow-neutral-300 !flex !flex-col gap-3"
        >
          <div
            v-for="(card, index) in cards"
            :key="index"
            :class="card.read ? 'bg-[#ECECF9] hover:bg-[#D3D2F0]' : 'bg-red-400 opacity-60'"
            class="rounded-lg group cursor-pointer transition-all duration-150 py-1 px-2 !flex !items-center gap-3 justify-between"
          >
            <div class="!flex gap-2 !items-center">
              <div class="flex">
                <div
                  v-if="card.read"
                  class="rounded-full -me-4 h-3 w-3 z-10 border-2 border-neutral-300 border-solid bg-red-600"
                ></div>
                <div
                  class="text-[9px] text-red-600 font-semibold rounded-full bg-neutral-100 h-12 w-12 flex justify-center items-center flex-col"
                >
                  <p>{{ card.date.day }}</p>
                  <p>{{ card.date.month }}</p>
                  <p>{{ card.date.year }}</p>
                </div>
              </div>
              <p
                :class="card.read ? 'text-neutral-900' : 'text-neutral-100'"
                class="font-semibold text-sm line-clamp-2"
                style="word-spacing: -4px"
              >
                {{ card.text }}
              </p>
            </div>
            <div class="flex flex-col justify-center">
              <div
                v-if="selectedTab === 'همه'"
                class="text-neutral-100 text-[9px] py-1 w-24 flex items-center justify-center transition-all duration-150 rounded-lg"
                :class="card.read ? 'bg-[#6560DC]' : 'bg-[#C23934]'"
              >
                {{ card.badge }}
              </div>
              <div
                :class="[
                  card.read ? 'group-hover:text-blue-600' : 'text-neutral-100',
                  selectedTab === 'همه' ? 'mt-3' : '',
                ]"
                class="flex items-center gap-2 w-24 justify-end text-[9px]"
              >
                <p class="text-xs">مشاهده خبر</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <!-- image -->
        <div class="w-7/12">
          <div
            class="h-[344px] bg-cover rounded-lg bg-center backdrop-blur-xl relative"
            :style="{ backgroundImage: `url(/images/homepagepic.png)` }"
          >
            <div
              class="absolute h-[450px] inset-0 opacity-100 transition-all duration-300 hover:bg-[#fafafa36]"
            ></div>
            <div
              class="justify-between text-neutral-900 items-center absolute w-full flex bottom-0 py-2 backdrop-blur-lg px-5 rounded-b-lg"
            >
              <div class="flex z-20 items-center gap-2">
                <svg
                  class="size-4"
                  viewBox="0 0 7 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L0 4L7 8L7 0Z" fill="#111111" />
                </svg>
                <p class="font-semibold">کاروان زیارتی عتبات عالیات به مناسبت روز عرفه</p>
              </div>
              <div
                class="flex items-center gap-2 bg-[#C6CB2D] rounded-tr-lg rounded-bl-lg px-3 py-1"
              >
                <div class="bg-neutral-900 rounded-full h-3 w-3"></div>
                <p class="text-sm">معاونت برنامه ریزی ، پشتیبانی و توسعه منابع انسانی</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- info cart -->
      <div class="col-span-full">
        <InfoCart />
      </div>
      <!-- smal carts -->
      <div class="col-span-full">
        <SmalCart />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
