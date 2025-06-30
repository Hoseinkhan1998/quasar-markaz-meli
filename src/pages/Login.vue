<script setup>
import { ref } from 'vue'

const dense = ref(true)

const password = ref('')
const showPassword = ref(false)

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
}
</script>
<template>
  <div
    class="flex flex-col backdrop-blur-xl px-5 pt-10 pb-5 justify-center border-[0.1px] border-gray-700 border-solid items-center rounded-lg"
  >
    <!-- icon -->
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask
        id="mask0_1_3968"
        style="mask-type: alpha"
        maskUnits="userSpaceOnUse"
        x="3"
        y="4"
        width="41"
        height="40"
      >
        <path
          d="M43.4133 28.7967C43.3396 29.0945 43.2581 29.3906 43.1743 29.683C40.1628 39.8606 29.6101 45.9849 19.2026 43.4139C8.79512 40.8429 2.30901 30.509 4.38353 20.0996C4.44555 19.8018 4.51119 19.5017 4.58497 19.2038C7.22984 8.49881 18.0904 1.94182 28.7957 4.58661C39.501 7.23095 46.0582 18.0912 43.4133 28.7967Z"
          fill="#12702A"
        />
      </mask>
      <g mask="url(#mask0_1_3968)">
        <path
          d="M31.4711 8.27824C36.345 10.7738 46.9434 23.3177 35.5352 37.4658C42.6195 35.8972 51.639 15.0162 31.4711 8.27824ZM16.5131 8.27824C-3.64976 15.0162 5.36472 35.8972 12.449 37.4658C1.04082 23.3177 11.6392 10.7738 16.5131 8.27824ZM23.9132 7.54995C24.1169 8.55326 29.5205 9.77047 28.8737 4.63171C28.0181 6.70962 25.5429 6.6485 23.9437 5.68594C21.7436 6.91334 19.6911 6.61285 18.9119 4.52985C18.1582 8.36991 21.9015 9.49545 23.9132 7.54995Z"
          fill="white"
        />
        <path
          d="M36.9347 23.227C36.8583 16.871 33.4868 11.2484 30.1662 8.97186C32.3561 11.6558 39.089 26.4712 26.1682 36.2241L26.4076 10.2655L23.9885 8.13663L21.5693 10.1636L21.9767 36.3718L21.8851 36.2954C8.8319 26.5476 15.6055 11.6609 17.8005 8.97186C14.48 11.2484 11.1033 16.871 11.032 23.227C10.9658 28.6815 13.4614 34.6504 20.3725 39.5498C17.5819 40.2688 14.708 40.613 11.8265 40.5735C14.1897 41.862 18.6511 41.5513 22.048 41.2407L22.0531 41.587L24.0801 43.8126L26.1173 41.4953V41.2305C29.5397 41.5462 34.0979 41.8875 36.5018 40.5786C33.5254 40.6278 30.5566 40.2627 27.6808 39.4938C34.5257 34.5995 37.0009 28.6611 36.9347 23.227Z"
          fill="white"
        />
      </g>
    </svg>
    <!-- title -->
    <p class="text-neutral-100 text-xl font-semibold mt-5">شورای عالی فضای مجازی</p>
    <p class="text-neutral-100 font-semibold mt-2">مرکز ملی فضای مجازی</p>
    <!-- form -->
    <div class="flex flex-col bg-neutral-100 rounded-lg p-5 w-[60vh] mt-10 gap-4">
      <p class="text-lg font-semibold">صفحه ورود به پرتال فضای مجازی</p>
      <q-input outlined v-model="ph" placeholder="نام کاربری" :dense="dense" />
      <q-input
        :type="showPassword ? 'text' : 'password'"
        id="password"
        v-model="password"
        outlined
        placeholder="رمز عبور"
        :dense="dense"
      >
        <template v-slot:append>
          <button
            type="button"
            @click="togglePasswordVisibility"
            aria-label="Toggle password visibility"
          >
            <svg
              v-if="!showPassword"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
              />
            </svg>
          </button>
        </template>
      </q-input>
      <div class="flex justify-center items-center my-3 text-xl">cpaptcha</div>
      <div class="flex justify-end">
        <div
          class="flex px-5 py-2 text-[16px] text-neutral-100 font-medium justify-center items-center rounded-3xl cursor-pointer bg-primarymain hover:bg-secondarymain"
        >
          ورود به حساب کاربری
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
