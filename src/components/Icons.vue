<script setup>
import { ref } from 'vue'

const chats = ref([
  {
    id: 1,
    user: 'محمدرضا غیاثی',
    message:
      ' سلام، چطور می‌توانم به شما کمک کنم؟ سلام، چطور می‌توانم به شما کمک کنم؟ سلام، چطور می‌توانم به شما کمک کنم؟ سلام، چطور می‌توانم به شما کمک کنم؟سلام، چطور می‌توانم به شما کمک کنم؟',
    time: '۱۲:۰۰',
    date: '۱۴۰۴/۰۳/۰۵',
  },
  {
    id: 2,
    user: 'حسین مزینانی',
    message: 'من به اطلاعات بیشتری نیاز دارم.',
    time: '۱۴:۰۰',
    date: '۱۴۰۴/۰۴/۲۰',
  },
  {
    id: 3,
    user: 'علی داوودی',
    message: 'آیا می‌توانید لینک را برای من ارسال کنید؟',
    time: '۱۲:۱۰',
    date: '۱۴۰۴/۰۲/۱۰',
  },
])
</script>

<template>
  <div class="grid grid-cols-12 gap-10">
    <!-- task cart -->
    <div
      class="col-span-4 text-neutral-900 h-[30vh] bg-neutral-100 rounded-xl cursor-pointer shadow-lg shadow-neutral-300"
    >
      <div class="flex gap-5 justify-center items-center h-full flex-col">
        <div class="flex w-[20vh] h-[20vh] relative">
          <svg
            class="w-full h-full"
            viewBox="0 0 150 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M68.75 121.875H131.25"
              stroke="#1E1B78"
              stroke-width="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M125 78.125H131.25"
              stroke="#1E1B78"
              stroke-width="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M68.75 78.125H103.063"
              stroke="#1E1B78"
              stroke-width="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M68.75 34.375H131.25"
              stroke="#1E1B78"
              stroke-width="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.75 34.375L25 40.625L43.75 21.875"
              stroke="#1E1B78"
              stroke-width="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.75 78.125L25 84.375L43.75 65.625"
              stroke="#1E1B78"
              stroke-width="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.75 121.875L25 128.125L43.75 109.375"
              stroke="#1E1B78"
              stroke-width="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div
            style="border-width: 0.2rem"
            class="left-[0.7vh] top-[0.7vh] absolute border-solid border-neutral-100 bg-red-600 w-[15%] h-[15%] rounded-full hidden"
          ></div>
        </div>
        <p class="font-semibold">شما 0 وظیفه با تاخیر دارید</p>
      </div>
    </div>
    <!-- Chat cart -->
    <div
      class="col-span-4 group relative overflow-hidden text-neutral-900 h-[30vh] bg-neutral-100 rounded-xl cursor-pointer shadow-lg shadow-neutral-300"
    >
      <!-- default show -->
      <div class="absolute inset-0 flex flex-col justify-center items-center gap-5">
        <div
          class="flex w-[20vh] h-[20vh] relative transition-all duration-300 group-hover:w-[8vh] group-hover:h-[8vh] group-hover:opacity-0 group-hover:translate-x-20 group-hover:translate-y-5 z-10"
        >
          <svg
            class="w-full h-full"
            viewBox="0 0 150 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M93.3713 77.5813C93.3713 74.1295 96.1696 71.3313 99.6213 71.3313H99.6776C103.129 71.3313 105.928 74.1295 105.928 77.5813C105.928 81.0331 103.129 83.8313 99.6776 83.8313H99.6213C96.1696 83.8313 93.3713 81.0331 93.3713 77.5813Z"
              fill="#1E1B78"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M68.3149 77.5813C68.3149 74.1295 71.1132 71.3313 74.5649 71.3313H74.6212C78.073 71.3313 80.8712 74.1295 80.8712 77.5813C80.8712 81.0331 78.073 83.8313 74.6212 83.8313H74.5649C71.1132 83.8313 68.3149 81.0331 68.3149 77.5813Z"
              fill="#1E1B78"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M43.2588 77.5813C43.2588 74.1295 46.057 71.3313 49.5088 71.3313H49.565C53.0168 71.3313 55.815 74.1295 55.815 77.5813C55.815 81.0331 53.0168 83.8313 49.565 83.8313H49.5088C46.057 83.8313 43.2588 81.0331 43.2588 77.5813Z"
              fill="#1E1B78"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M115.879 34.1083C93.3266 11.5472 56.6812 11.5472 34.129 34.1083L34.128 34.1093C16.4662 51.7676 12.6307 77.9432 22.5435 99.3649C22.5768 99.4368 22.6083 99.5096 22.6379 99.5831C23.2139 101.014 23.201 102.636 23.175 103.554C23.1425 104.705 23.0151 106.033 22.8578 107.383C22.7091 108.659 22.5202 110.065 22.3283 111.494L22.2884 111.792C22.0805 113.341 21.8688 114.931 21.684 116.523C21.3092 119.753 21.0739 122.769 21.1786 125.181C21.2308 126.384 21.3622 127.274 21.53 127.885C21.5866 128.091 21.6384 128.232 21.6766 128.324C21.7678 128.362 21.9095 128.413 22.1152 128.47C22.726 128.638 23.6171 128.769 24.8194 128.821C27.2321 128.925 30.2479 128.69 33.4772 128.316C35.0695 128.131 36.6594 127.92 38.2082 127.712L38.5034 127.672C39.9333 127.481 41.3401 127.292 42.6168 127.143C43.9666 126.986 45.2936 126.859 46.4452 126.827C47.3626 126.801 48.9843 126.788 50.4152 127.364C50.4882 127.394 50.5606 127.425 50.632 127.458C72.0581 137.367 98.2235 133.536 115.879 115.873L115.879 115.872C138.434 93.3138 138.479 56.706 115.88 34.1091L115.879 34.1083ZM122.508 27.4796C96.2946 1.25651 53.7119 1.2568 27.4986 27.4805C7.09831 47.8776 2.59047 78.0301 13.8051 102.799C13.8085 102.909 13.81 103.069 13.8038 103.289C13.7831 104.019 13.6948 105.018 13.5458 106.298C13.407 107.489 13.2287 108.817 13.0331 110.274L12.9967 110.544C12.7893 112.09 12.5671 113.757 12.3715 115.443C11.9854 118.77 11.6739 122.397 11.8124 125.588C11.8818 127.187 12.0695 128.839 12.4903 130.37C12.9015 131.866 13.6289 133.593 15.0186 134.983L15.0208 134.985C16.4108 136.374 18.138 137.1 19.6333 137.51C21.1638 137.931 22.8145 138.118 24.4138 138.187C27.6041 138.325 31.2304 138.014 34.557 137.628C36.2426 137.433 37.909 137.211 39.4542 137.004L39.7225 136.968C41.1799 136.772 42.5087 136.594 43.7002 136.455C44.9792 136.307 45.9781 136.218 46.7086 136.198C46.9287 136.192 47.0892 136.193 47.1988 136.197C71.9699 147.406 102.113 142.905 122.509 122.501C148.719 96.2868 148.775 53.7431 122.508 27.4796Z"
              fill="#1E1B78"
            />
          </svg>
          <div
            style="border-width: 0.2rem"
            class="left-[1.5vh] top-[1.5vh] absolute border-solid border-neutral-100 bg-red-600 w-[15%] h-[15%] rounded-full"
          ></div>
        </div>
        <p
          class="font-semibold opacity-100 group-hover:opacity-0 duration-300 group-hover:-translate-y-32 translate-y-0 transition-all"
        >
          شما 3 گفتگوی مشاهده نشده دارین
        </p>
      </div>
      <!-- hover show -->
      <div
        class="absolute inset-0 flex flex-col p-4 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-700 z-20"
      >
        <!-- گفتگو -->
        <div class="flex justify-center items-center gap-1">
          <div class="font-semibold text-[#75781B]">
            <svg
              width="12"
              height="14"
              viewBox="0 0 12 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0L0 7L12 14V0Z" fill="#75781B" />
            </svg>
          </div>
          <p class="text-[28px] font-semibold text-[#75781B]">گفتگو</p>
          <div class="font-semibold text-[#75781B]">
            <svg
              width="12"
              height="14"
              viewBox="0 0 12 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0L12 7L0 14V0Z" fill="#75781B" />
            </svg>
          </div>
        </div>
        <!-- title -->
        <p
          class="font-semibold text-center text-[10px] opacity-0 translate-y-7 scale-100 transition-transform duration-150 group-hover:opacity-100 group-hover:translate-y-0 group-hover:animate-pop-up-once delay-150"
        >
          شما 3 گفتگوی مشاهده نشده دارین
        </p>
        <div class="!flex items-center gap-3 mt-3">
          <!-- icon -->
          <div
            class="h-[8vh] w-[8vh] transition-all -translate-y-5 group-hover:translate-y-0 -translate-x-10 group-hover:translate-x-0 duration-300 opacity-0 group-hover:opacity-100 group-hover:delay-100"
          >
            <svg
              class="h-full w-full"
              viewBox="0 0 65 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M41.1957 33.7218C41.1957 32.0879 42.5202 30.7634 44.154 30.7634H44.1806C45.8145 30.7634 47.139 32.0879 47.139 33.7218C47.139 35.3556 45.8145 36.6801 44.1806 36.6801H44.154C42.5202 36.6801 41.1957 35.3556 41.1957 33.7218Z"
                fill="#75781B"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M29.3358 33.7218C29.3358 32.0879 30.6602 30.7634 32.2941 30.7634H32.3207C33.9546 30.7634 35.279 32.0879 35.279 33.7218C35.279 35.3556 33.9546 36.6801 32.3207 36.6801H32.2941C30.6602 36.6801 29.3358 35.3556 29.3358 33.7218Z"
                fill="#75781B"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.4758 33.7218C17.4758 32.0879 18.8003 30.7634 20.4341 30.7634H20.4607C22.0946 30.7634 23.4191 32.0879 23.4191 33.7218C23.4191 35.3556 22.0946 36.6801 20.4607 36.6801H20.4341C18.8003 36.6801 17.4758 35.3556 17.4758 33.7218Z"
                fill="#75781B"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M51.8493 13.1446C41.1746 2.46571 23.8291 2.46571 13.1544 13.1446L13.1539 13.1451C4.79399 21.5034 2.9785 33.8932 7.67058 44.0327C7.68634 44.0668 7.70123 44.1012 7.71524 44.136C7.98791 44.8134 7.98178 45.5812 7.96951 46.0154C7.95409 46.5606 7.89378 47.1888 7.81934 47.8278C7.74896 48.4319 7.65956 49.0975 7.5687 49.7741L7.54981 49.9147C7.4514 50.6479 7.35119 51.4005 7.26373 52.1543C7.08636 53.683 6.97496 55.1105 7.02452 56.2525C7.04921 56.8216 7.11144 57.2433 7.19087 57.5323C7.21763 57.6296 7.24214 57.6966 7.26022 57.7398C7.30343 57.7579 7.37047 57.7824 7.46785 57.8091C7.75697 57.8885 8.17873 57.9506 8.74782 57.9753C9.88982 58.0247 11.3173 57.9134 12.8459 57.7362C13.5995 57.6488 14.3521 57.5487 15.0852 57.4504L15.2249 57.4316C15.9017 57.3408 16.5676 57.2515 17.1719 57.1812C17.8109 57.1068 18.4389 57.0466 18.9841 57.0313C19.4183 57.0191 20.1859 57.0131 20.8632 57.2858C20.8977 57.2997 20.932 57.3145 20.9658 57.3302C31.1075 62.0205 43.4925 60.2071 51.8492 51.8465L51.8495 51.8462C62.5257 41.1686 62.5468 23.8409 51.8497 13.145L51.8493 13.1446ZM54.9873 10.007C42.5794 -2.40523 22.4236 -2.40509 10.016 10.0074C0.359848 19.6621 -1.77386 33.9343 3.5344 45.6583C3.53599 45.7101 3.53672 45.786 3.53378 45.89C3.524 46.2359 3.48219 46.7088 3.41165 47.3143C3.34597 47.8781 3.26155 48.5067 3.16896 49.1962L3.15175 49.3244C3.05357 50.0559 2.9484 50.8448 2.85581 51.6428C2.67308 53.2176 2.52564 54.9344 2.59119 56.4449C2.62405 57.2021 2.71287 57.9837 2.91205 58.7083C3.10669 59.4165 3.451 60.2341 4.10879 60.8919L4.10981 60.893C4.76778 61.5502 5.58529 61.894 6.2931 62.0883C7.01752 62.2872 7.79886 62.3759 8.55583 62.4086C10.0659 62.474 11.7824 62.3267 13.3569 62.1441C14.1548 62.0516 14.9436 61.9466 15.675 61.8485L15.802 61.8315C16.4918 61.7389 17.1208 61.6545 17.6848 61.5889C18.2901 61.5185 18.763 61.4768 19.1087 61.4671C19.2129 61.4641 19.2889 61.4649 19.3407 61.4665C31.0657 66.7724 45.3336 64.6419 54.9875 54.9838C67.3938 42.5758 67.4202 22.4384 54.9873 10.007Z"
                fill="#75781B"
              />
            </svg>
          </div>
          <!-- chats -->
          <div
            class="!flex flex-col transition-opacity duration-700 opacity-0 group-hover:opacity-100"
          >
            <div
              v-for="chat in chats"
              :key="chat.id"
              class="grid grid-cols-12 gap-1 border-b-2 py-1 border-neutral-400 border-solid"
            >
              <div class="col-span-2">
                <img src="/images/Ellipse9.png" class="h-[5vh] w-[5vh] rounded-full" />
              </div>
              <div class="col-span-7 !flex flex-col">
                <p class="text-sm font-semibold truncate">{{ chat.user }}</p>
                <p class="text-[9px] w-44 text-neutral-600 font-semibold line-clamp-2">
                  {{ chat.message }}
                </p>
              </div>
              <div class="col-span-3 !flex flex-col gap-1 mt-1">
                <p class="text-neutral-600 text-[9px] text-center font-semibold">{{ chat.date }}</p>
                <p class="text-neutral-600 text-[9px] text-center font-semibold">{{ chat.time }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Process cart -->
    <div
      class="col-span-4 text-neutral-900 h-[30vh] bg-neutral-100 rounded-xl cursor-pointer shadow-lg shadow-neutral-300"
    >
      <div class="flex gap-5 justify-center h-full items-center flex-col">
        <div class="flex w-[20vh] h-[20vh] relative">
          <svg
            class="w-full h-full"
            viewBox="0 0 150 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5 117.813V100.937C12.5 86.875 18.125 81.25 32.1875 81.25H49.0625C63.125 81.25 68.75 86.875 68.75 100.937V117.813C68.75 131.875 63.125 137.5 49.0625 137.5H32.1875"
              stroke="#1E1B78"
              stroke-width="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M137.5 93.75C137.5 117.937 117.937 137.5 93.75 137.5L100.312 126.562"
              stroke="#1E1B78"
              stroke-width="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.5 56.25C12.5 32.0625 32.0625 12.5 56.25 12.5L49.6875 23.4375"
              stroke="#1E1B78"
              stroke-width="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M109.375 68.75C124.908 68.75 137.5 56.158 137.5 40.625C137.5 25.092 124.908 12.5 109.375 12.5C93.842 12.5 81.25 25.092 81.25 40.625C81.25 56.158 93.842 68.75 109.375 68.75Z"
              stroke="#1E1B78"
              stroke-width="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <!-- badg -->
          <div
            style="border-width: 0.2rem"
            class="left-[0.7vh] top-[0.7vh] absolute border-solid border-neutral-100 bg-red-600 w-[15%] h-[15%] rounded-full"
          ></div>
        </div>
        <p class="font-semibold">شما 3 فرآیند برای اقدام دارید</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
