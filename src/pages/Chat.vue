<script setup>
import { ref, computed, watch } from 'vue'

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

const selectedChatId = ref(null) // در ابتدا هیچ چتی انتخاب نشده است

function selectChat(chatId) {
  selectedChatId.value = chatId
}

// آبجکت کامل چت انتخاب شده را برمی‌گرداند
const selectedChat = computed(() => {
  // اگر چتی انتخاب نشده بود، null برگردان تا خطا نگیریم
  if (selectedChatId.value === null) return null
  return chats.value.find((chat) => chat.id === selectedChatId.value)
})

// وضعیت نمایش پنل سوم (اطلاعات کاربر)
const isThirdContentVisible = ref(false)

// تابعی برای نمایش پنل سوم
function showThirdContent() {
  // فقط در صورتی پنل را باز کن که یک چت انتخاب شده باشد
  if (selectedChat.value) {
    isThirdContentVisible.value = true
  }
}

// تابعی برای بستن پنل سوم
function hideThirdContent() {
  isThirdContentVisible.value = false
}

// با هر بار عوض شدن چت، پنل اطلاعات را ببند
watch(selectedChatId, () => {
  hideThirdContent()
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
      <div class="bg-neutral-100 relative rounded-lg flex-grow overflow-y-auto p-4">
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
            @click="selectChat(chat.id)"
            class="grid grid-cols-12 cursor-pointer items-center px-2 rounded-lg"
            :class="[chat.id === selectedChatId ? 'bg-tintone' : '']"
          >
            <div class="col-span-3 mt-4">
              <img :src="chat.avatar" class="rounded-full h-16 w-16 object-cover" />
            </div>
            <div class="col-span-7 mt-4 flex flex-col text-primarymain">
              <div class="flex items-center gap-2">
                <p class="max-w-[20vh] truncate font-semibold">{{ chat.name }}</p>
                <div v-if="chat.isFavorite">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-4 fill-primarymain"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>
                </div>
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
        <!-- new chat button -->
        <q-btn-dropdown
          dropdown-icon="none"
          class="absolute z-10 bottom-2 w-1/3 left-2"
          unelevated
          padding="0"
          menu-anchor="top start"
          menu-self="bottom start"
        >
          <template v-slot:label>
            <div class="flex w-full items-center bg-primarymain gap-2 rounded-xl px-2 py-3">
              <div
                class="rounded-full w-5 h-5 text-lg flex items-center justify-center bg-tintone text-primarymain"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="3.5"
                  stroke="currentColor"
                  class="size-5"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </div>
              <p class="text-tintone font-medium">پیام جدید</p>
            </div>
          </template>

          <q-list class="!flex !flex-col">
            <q-item clickable v-close-popup>
              <q-item-section>
                <q-item-label class="!text-xs">پیام جدید شخصی</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup>
              <q-item-section>
                <q-item-label class="!text-xs">ایجاد گروه جدید</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup>
              <q-item-section>
                <q-item-label class="!text-xs">ایجاد کانال جدید</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
    </div>
    <div class="col-span-8">
      <div v-if="selectedChat" class="grid grid-cols-12 h-full gap-3">
        <!-- second content -->
        <div
          :class="[
            'bg-neutral-100 flex flex-col h-full rounded-lg transition-all duration-500 ease-in-out',
            isThirdContentVisible ? 'col-span-6' : 'col-span-12',
          ]"
        >
          <div
            class="rounded-t-lg text-primarymain w-full bg-tintone p-3 flex justify-between items-center"
          >
            <!-- contact profile -->
            <div @click="showThirdContent" class="flex items-center gap-3 cursor-pointer">
              <img :src="selectedChat.avatar" class="rounded-full w-6 h-6" alt="user" />
              <p class="font-semibold">{{ selectedChat.name }}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-4 cursor-pointer"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
            </div>
            <!-- chat info & search -->
            <div class="flex items-center gap-3">
              <!-- search icon -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5 cursor-pointer"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              <!-- info -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5 cursor-pointer"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                />
              </svg>
              <!-- list icon -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5 cursor-pointer -ms-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                />
              </svg>
            </div>
          </div>
        </div>
        <!-- third content -->
        <div
          v-if="isThirdContentVisible"
          class="col-span-6 bg-neutral-100 flex flex-col h-full rounded-lg p-4"
        >
          <div class="flex justify-between items-center">
            <h3 class="font-bold text-primarymain">اطلاعات مخاطب</h3>
            <!-- Close Button -->
            <button @click="hideThirdContent" class="text-neutral-500 hover:text-primarymain">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                stroke="currentColor"
                class="size-6"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="mt-4">
            <p>جزئیات مربوط به {{ selectedChat.name }} در اینجا نمایش داده می‌شود.</p>
          </div>
        </div>
      </div>
      <div v-else class="flex items-center justify-center h-full bg-neutral-100 rounded-lg">
        <p class="text-neutral-500">لطفا یک چت را برای شروع انتخاب کنید.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
:deep(.q-btn-dropdown__arrow) {
  display: none;
}
</style>
