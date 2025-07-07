<script setup>
import ContactDetails from 'src/components/Chat/ContactDetails.vue'
import { ref, computed, watch } from 'vue'

const search = ref('')
const dense = ref(true)

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
    role: 'مشاور مدیر عامل',
    stats: {
      links: 45,
      images: 73,
      files: 33,
      videos: 10,
    },
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
    role: 'تیم طراحی',
    stats: {
      links: 12,
      images: 5,
      files: 28,
      videos: 2,
    },
  },
])

const filteredChats = computed(() => {
  return chats.value.filter((chat) => {
    const tabCondition = activeTab.value === 'all' || chat.type === activeTab.value
    const searchCondition = chat.name.toLowerCase().includes(search.value.toLowerCase())
    return tabCondition && searchCondition
  })
})

const selectedChatId = ref(null)

function selectChat(chatId) {
  selectedChatId.value = chatId
}

const selectedChat = computed(() => {
  if (selectedChatId.value === null) return null
  return chats.value.find((chat) => chat.id === selectedChatId.value)
})

const isDetailPanelVisible = ref(false)
const isChatPanelShrunk = ref(false)

function showThirdContent() {
  if (selectedChat.value) {
    isChatPanelShrunk.value = true
    isDetailPanelVisible.value = true
  }
}

function hideThirdContent() {
  isDetailPanelVisible.value = false
  setTimeout(() => {
    isChatPanelShrunk.value = false
  }, 10)
}

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
          class="bg-white rounded-t-3xl rounded-b-lg px-2 py-4 !flex items-center justify-between"
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
      <div class="bg-white relative rounded-lg flex-grow pt-4 px-4">
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
        <div class="overflow-y-auto h-lg:h-[50vh] h-md:h-[48vh] h-sm:h-[40vh]">
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
                    class="flex rounded-full w-6 h-6 justify-center items-center text-xs bg-primarymain text-neutral-100"
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
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
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
    </div>
    <div class="col-span-8">
      <div v-if="selectedChat" class="grid grid-cols-12 h-full gap-3">
        <!-- second content -->
        <div
          :class="[
            'bg-white flex relative flex-col h-full rounded-lg transition-all duration-500 ease-in-out',
            isChatPanelShrunk ? 'col-span-6' : 'col-span-12',
          ]"
        >
          <!-- profile header -->
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
          <!-- chat messages -->
          <div
            class="mt-4 relative overflow-y-auto h-lg:h-[calc(50vh-20px)] h-md:h-[calc(48vh-20px)] h-sm:h-[calc(40vh-20px)]"
          >
            <div class="flex flex-col gap-2 px-3">
              <!-- other message -->
              <div class="flex justify-end">
                <div
                  class="p-4 justify-end flex bg-tintone text-neutral-900 rounded-3xl !rounded-bl-none"
                  :class="[isChatPanelShrunk ? 'w-5/6' : 'w-3/6']"
                >
                  <p class="text-xs leading-5">
                    فایل برای شما و آقای رحیمی ارسال شد. لطفا این فایل را کامل بررسی کرده و نقاط ضعف
                    و قوت پروژه را پس از ارزیابی توسط تیم فنی مربوطه، برای من ارسال کنید تا با توجه
                    به ماهیت آن،‌ در مورد ادامه همکاری تصمیم گیری شود.
                  </p>
                  <div class="flex justify-end">
                    <p class="text-xs text-primarymain">۱۱:۳۲</p>
                  </div>
                </div>
              </div>
              <!-- other message with reply box -->
              <div class="flex justify-end">
                <div
                  class="p-4 text-neutral-900 flex-col justify-end flex bg-tintone rounded-3xl !rounded-bl-none"
                  :class="[isChatPanelShrunk ? 'w-5/6' : 'w-3/6']"
                >
                  <!-- reply box -->
                  <div class="p-2 bg-tinttwo rounded-lg border-s-4 border-solid border-primarymain">
                    <p class="text-xs font-medium">علیرضا محسنی</p>
                    <p class="text-[10px] truncate">باید پروژه سریع تر انجام شود.</p>
                  </div>
                  <p class="text-xs leading-5 mt-2">بله موافقم</p>
                  <div class="flex justify-end">
                    <p class="text-xs text-primarymain">۱۴:۳۲</p>
                  </div>
                </div>
              </div>
              <!-- my message with reply box -->
              <div
                class="p-4 text-white bg-primarymain rounded-3xl !rounded-br-none"
                :class="[isChatPanelShrunk ? 'w-5/6' : 'w-3/6']"
              >
                <!-- reply box -->
                <div class="p-2 bg-[#ffffff28] rounded-lg border-s-4 border-solid border-white">
                  <p class="text-xs font-medium">حسین مزینانی</p>
                  <p class="text-[10px] truncate">بله موافقم</p>
                </div>
                <p class="text-xs leading-5 mt-2">پس زودتر انجام دهید.</p>
                <div class="flex justify-end gap-1">
                  <p class="text-xs">۱۶:۱۲</p>
                  <!-- read icon -->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-3"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <!-- send message -->
          <div class="px-3 z-10 absolute w-full bottom-0 pb-3 bg-white rounded-b-lg">
            <q-input
              v-model="text"
              outlined
              rounded
              placeholder="پیام خود را بنویسید..."
              :dense="dense"
            >
              <template v-slot:append>
                <q-btn class="rotate-180" round dense flat icon="send" />
              </template>
            </q-input>
          </div>
        </div>
        <!-- third content -->
        <transition name="fade">
          <div v-if="isDetailPanelVisible" class="col-span-6 bg-white flex flex-col rounded-lg">
            <ContactDetails :contact="selectedChat" @close="hideThirdContent" />
          </div>
        </transition>
      </div>
      <div v-else class="flex items-center justify-center h-full bg-white rounded-lg">
        <p class="text-neutral-500">لطفا یک چت را برای شروع انتخاب کنید.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* استایل‌های قبلی بدون توصیه تغییر */
:deep(.q-btn-dropdown__arrow) {
  display: none;
}

.fade-enter-active {
  transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.overflow-y-auto::-webkit-scrollbar {
  width: 8px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.overflow-y-auto {
  min-height: 0;
}
</style>
