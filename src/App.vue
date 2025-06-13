<script setup>
import MainMenu from './components/MainMenu.vue'
</script>

<template>
  <div class="bg-neutral-200 grid grid-cols-12 gap-5 px-[150px] min-h-screen" dir="rtl">
    <div class="col-span-2 h-screen sticky top-0 self-start">
      <MainMenu />
    </div>
    <div class="col-span-10 gap-5 flex-col flex">
      <!-- navbar -->
      <div
        class="bg-neutral-100 rounded-b-lg shadow-lg pe-10 py-2 shadow-neutral-200 flex justify-end"
      >
        <div class="flex items-center gap-3">
          <!-- Notification -->
          <div
            class="rounded-full cursor-pointer flex border-s-[3px] p-1 border-[#17145B] border-solid"
          >
            <div class="flex items-center rounded-full justify-center w-7 h-7 bg-neutral-200">
              <svg
                class="size-6"
                viewBox="0 0 12 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.45486 2.56697C8.69432 1.64801 7.55827 0.971802 5.99977 0.971802C2.74783 0.971802 1.33455 3.91644 1.33455 5.86364C1.33455 7.31799 1.54578 6.89041 0.740492 8.66526C-0.243009 11.1941 3.71153 12.2282 5.99977 12.2282C8.28727 12.2282 12.2425 11.1941 11.2598 8.66526C10.4538 6.89041 10.665 7.31799 10.665 5.86364"
                  stroke="#111111"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.69377 14.2281C6.74474 15.2887 5.26399 15.3011 4.30542 14.2281"
                  stroke="#111111"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div class="h-2 w-2 bg-red-600 -ms-3 rounded-full"></div>
          </div>
          <!-- Profile -->
          <q-btn-dropdown dropdown-icon="none" class="bg-neutral-200 rounded-lg py-1 flex items-center justify-center gap-3">
            <template v-slot:label>              
                <p class="text-neutral-900 text-[10px]">محمدمهدی آقا محمدحسین تجریشی</p>
                <!-- profile pic -->
                <div class="border-l-[3px] p-1 -me-5 border-[#17145B] rounded-full border-solid">
                  <img src="/images/Ellipse9.png" class="rounded-full h-6 w-6" alt="" />
                </div>
            </template>

            <q-list>
              <div class=" bg-neutral-100 py-3 z-20">
                <!-- avatar -->
                <div class="flex flex-col gap-3 justify-center z-20 items-center">
                  <img src="/images/Ellipse9.png" class="w-14 h-14 rounded-full" />
                  <div class="border-b-2 border-neutral-400 border-solid pb-3">
                    <div class="rounded-xl text-blue-600 px-2 py-1 text-xs bg-blue-200">
                      کارشناس طراحی دیجیتال
                    </div>
                  </div>
                </div>
                <div class="flex flex-col mt-4">
                  <q-item clickable v-close-popup @click="onItemClick"
                    class="flex text-sm hover:bg-neutral-200 transition-all px-5 duration-150 py-1 font-semibold cursor-pointer justify-between items-center"
                  >
                    <div>
                      <svg
                        class="size-6"
                        viewBox="0 0 15 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.21503 4.68999C9.34336 4.94666 9.4192 5.23832 9.4192 5.54749C9.41336 6.57999 8.60253 7.42582 7.57586 7.45499C7.53503 7.44916 7.48253 7.44916 7.43586 7.45499C6.4092 7.41999 5.59253 6.57999 5.59253 5.54749C5.59253 4.49166 6.4442 3.63416 7.50586 3.63416"
                          stroke="#5A5A5A"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M11.4317 11.305C10.3934 12.2558 9.01669 12.8333 7.50003 12.8333C5.98336 12.8333 4.60669 12.2558 3.56836 11.305C3.62669 10.7566 3.97669 10.22 4.60086 9.79997C6.19919 8.73831 8.81253 8.73831 10.3992 9.79997C11.0234 10.22 11.3734 10.7566 11.4317 11.305Z"
                          stroke="#5A5A5A"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M2.83329 3.50002C2.10413 4.47419 1.66663 5.68752 1.66663 7.00002C1.66663 10.22 4.27996 12.8334 7.49996 12.8334C10.72 12.8334 13.3333 10.22 13.3333 7.00002C13.3333 3.78002 10.72 1.16669 7.49996 1.16669C6.66579 1.16669 5.86663 1.34169 5.14913 1.66252"
                          stroke="#5A5A5A"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <p>تغییر پروفایل</p>
                  </q-item >
                  <q-item clickable v-close-popup @click="onItemClick"
                    class="flex text-sm hover:bg-neutral-200 transition-all px-5 duration-150 py-1 font-semibold cursor-pointer justify-between items-center"
                  >
                    <div>
                      <svg
                        class="size-6"
                        viewBox="0 0 15 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.66663 7.56585V8.75002C1.66663 11.6667 2.83329 12.8334 5.74996 12.8334H9.24996C12.1666 12.8334 13.3333 11.6667 13.3333 8.75002V5.25002C13.3333 2.33335 12.1666 1.16669 9.24996 1.16669H5.74996C2.83329 1.16669 1.66663 2.33335 1.66663 5.25002"
                          stroke="#5A5A5A"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9.99662 7.93916C9.33745 8.59833 8.39245 8.8025 7.55829 8.54L6.04745 10.045C5.94245 10.1558 5.72662 10.2258 5.56912 10.2025L4.86912 10.1092C4.63579 10.08 4.42579 9.85833 4.39079 9.63083L4.29745 8.93083C4.27412 8.77916 4.34995 8.56333 4.45495 8.4525L5.95995 6.9475C5.70329 6.11333 5.90162 5.16833 6.56079 4.50917C7.50579 3.56417 9.04579 3.56417 9.99662 4.50917C10.9416 5.44833 10.9416 6.98833 9.99662 7.93916Z"
                          stroke="#5A5A5A"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M6.59581 9.49666L6.09998 8.995"
                          stroke="#5A5A5A"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.31349 6.24162H8.31873"
                          stroke="#5A5A5A"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <p>تغییر رمز عبور</p>
                  </q-item>
                  <q-item clickable v-close-popup @click="onItemClick"
                    class="flex text-sm hover:bg-neutral-200 transition-all px-5 duration-150 py-1 font-semibold cursor-pointer justify-between items-center"
                  >
                    <div>
                      <svg
                        class="size-6"
                        viewBox="0 0 12 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.09677 11.3462C3.09677 11.0275 3.35674 10.7692 3.67742 10.7692H6.77419C7.09487 10.7692 7.35484 11.0275 7.35484 11.3462C7.35484 11.6648 7.09487 11.9231 6.77419 11.9231H3.67742C3.35674 11.9231 3.09677 11.6648 3.09677 11.3462Z"
                          fill="#5A5A5A"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.09677 9.03846C3.09677 8.71984 3.35674 8.46154 3.67742 8.46154H5.22581C5.54649 8.46154 5.80645 8.71984 5.80645 9.03846C5.80645 9.35709 5.54649 9.61539 5.22581 9.61539H3.67742C3.35674 9.61539 3.09677 9.35709 3.09677 9.03846Z"
                          fill="#5A5A5A"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M6 1.15385C4.85635 1.15385 3.32065 1.27937 2.24657 1.38352C1.80088 1.42674 1.45306 1.77982 1.41855 2.22745C1.31175 3.61315 1.16129 5.85962 1.16129 7.5C1.16129 9.14038 1.31175 11.3868 1.41855 12.7726C1.45306 13.2202 1.80088 13.5733 2.24657 13.6165C3.32065 13.7206 4.85635 13.8462 6 13.8462C7.14364 13.8462 8.67935 13.7206 9.75343 13.6165C10.1991 13.5733 10.5469 13.2202 10.5814 12.7726C10.6883 11.3868 10.8387 9.14038 10.8387 7.5C10.8387 6.97101 10.823 6.37771 10.7981 5.76923H8.32318L8.32258 5.19231L8.32261 4.61538H10.7407C10.5977 2.78714 9.17102 1.33088 7.35484 1.19695V3.65385C7.35484 4.18489 7.78814 4.61538 8.32261 4.61538L8.32258 5.19231L8.32318 5.76923C7.14735 5.76923 6.19355 4.82214 6.19355 3.65385V1.15498C6.12786 1.15423 6.06329 1.15385 6 1.15385ZM6.79267 0.0155192C6.51831 0.00566849 6.25136 0 6 0C4.79515 0 3.21068 0.130703 2.13376 0.235135C1.12282 0.333169 0.33791 1.13703 0.260655 2.13934C0.153811 3.52553 0 5.8111 0 7.5C0 9.1889 0.153811 11.4745 0.260655 12.8607C0.33791 13.863 1.12282 14.6668 2.13376 14.7649C3.21068 14.8693 4.79515 15 6 15C7.20485 15 8.78932 14.8693 9.86624 14.7649C10.8772 14.6668 11.6621 13.863 11.7393 12.8607C11.8462 11.4745 12 9.1889 12 7.5C12 6.78893 11.9728 5.9742 11.9335 5.16765C11.9334 5.16517 11.9333 5.16269 11.9332 5.16022C11.9247 4.98671 11.9157 4.81359 11.9062 4.64197C11.7711 2.18249 9.83835 0.17057 7.33705 0.0397354C7.15624 0.0302778 6.9763 0.0221542 6.79942 0.0157622"
                          fill="#5A5A5A"
                        />
                      </svg>
                    </div>
                    <p>محاسبه حکم</p>
                  </q-item>
                  <q-item clickable v-close-popup @click="onItemClick"
                    class="flex text-sm hover:bg-neutral-200 transition-all px-5 duration-150 py-1 font-semibold cursor-pointer justify-between items-center"
                  >
                    <div>
                      <svg
                        class="size-6"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 0.5H3C1.89543 0.5 1 1.39543 1 2.5V9.5C1 10.6046 1.89543 11.5 3 11.5H8"
                          stroke="#5A5A5A"
                          stroke-linecap="round"
                        />
                        <path
                          d="M4 5.81579H11M11 5.81579L7.5 2.5M11 5.81579L7.5 9.5"
                          stroke="#5A5A5A"
                        />
                      </svg>
                    </div>
                    <p>خروج</p>
                  </q-item>
                </div>
              </div>
            </q-list>
          </q-btn-dropdown>
        </div>
      </div>
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
