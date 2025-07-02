<script setup>
import { ref, computed } from 'vue'

const search = ref('')

const activeTab = ref('personal')

const tabs = ref([
  { label: 'همه', value: 'all' },
  { label: 'شخصی', value: 'personal' },
  { label: 'گروه‌ها', value: 'group' },
  { label: 'کانال‌ها', value: 'channel' },
])

const chats = ref([
  {
    id: 1,
    name: 'حمید رضا ادییبی',
    avatar: '/images/chat2.jpg',
    lastMessage: 'لطف کنید سند ها مربوط به پروژه را برسونید',
    time: '۳ روز پیش',
    unreadCount: '۹+',
    isFavorite: true,
    type: 'personal',
  },
  {
    id: 2,
    name: 'گروه طراحان',
    avatar: '/images/hosein.jpg',
    lastMessage: 'فایل‌های جدید بارگذاری شد.',
    time: 'دیروز',
    unreadCount: '۲',
    isFavorite: false,
    type: 'group',
  },
])

const filteredChats = computed(() => {
  return chats.value.filter((chat) => {
    const tabCondition = activeTab.value === 'all' || chat.type === activeTab.value
    const searchCondition = chat.name.toLowerCase().includes(search.value.toLowerCase())
    return tabCondition && searchCondition
  })
})
</script>
<template>
  <div class="grid grid-cols-12 gap-3 h-full">
    <!-- first content -->
    <div class="col-span-4 flex flex-col gap-3 h-full">
      <!-- search input -->
      <div class="flex-shrink-0">
        <div
          class="bg-neutral-100 rounded-t-3xl rounded-b-lg px-2 py-4 !flex items-center justify-between"
        >
          <input
            v-model="search"
            type="text"
            class="w-full bg-transparent outline-none text-xs"
            placeholder="جستجو پیام ها, مخاطبین یا گروه‌ها..."
          />
          <div class="text-primarymain">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
        </div>
      </div>
      <!-- select chat -->
      <div class="bg-neutral-100 rounded-lg flex-grow overflow-y-auto p-4">
        <!-- tabs -->
        <div class="grid grid-cols-4 gap-[2px]">
          <div
            v-for="tab in tabs"
            :key="tab.value"
            @click="activeTab = tab.value"
            :class="[
              'col-span-1 text-xs py-2 flex justify-center items-center rounded-lg font-medium cursor-pointer',
              activeTab === tab.value
                ? 'bg-primarymain text-neutral-100'
                : 'bg-tintone text-primarymain',
            ]"
          >
            {{ tab.label }}
          </div>
        </div>
        <!-- favorite chats -->
        <p class="mt-3 text-primarymain font-semibold">منتخب شده</p>
        <div v-for="chat in filteredChats" :key="chat.id" class="flex flex-col gap-4 mt-3">
          <div
            class="grid grid-cols-12 cursor-pointer items-center px-2 rounded-lg"
            :class="[chat.id === 1 ? 'bg-tintone' : '']"
          >
            <div class="col-span-3 mt-4">
              <img :src="chat.avatar" class="rounded-full h-16 w-16 object-cover" />
            </div>
            <div class="col-span-7 mt-4 flex flex-col text-primarymain">
              <div class="flex items-center gap-2">
                <p class="max-w-[20vh] truncate font-semibold">{{ chat.name }}</p>
                <div v-if="chat.isFavorite">*</div>
              </div>
              <p class="text-[10px] mt-2 max-w-[18vh] truncate">
                {{ chat.lastMessage }}
              </p>
            </div>
            <div class="col-span-2 mt-4 flex flex-col items-start gap-3">
              <div class="text-[10px] text-neutral-500">{{ chat.time }}</div>
              <div class="flex me-2">
                <div
                  v-if="chat.unreadCount"
                  class="flex rounded-full w-6 h-6 justify-center items-center text-xs bg-tintone"
                >
                  {{ chat.unreadCount }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- second content -->
    <div class="col-span-8 bg-neutral-100 rounded-lg"></div>
  </div>
</template>

<style scoped></style>
