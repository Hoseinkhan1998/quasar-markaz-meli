<script setup>
const smalcards = [
  {
    icon: `<svg class="size-28 opacity-10 -me-7" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_496_1550)">
              <path
                d="M19.1667 18.3333H4.16667C3.50363 18.3333 2.86774 18.0699 2.3989 17.6011C1.93006 17.1323 1.66667 16.4964 1.66667 15.8333V0.833333C1.66667 0.61232 1.57887 0.400358 1.42259 0.244078C1.26631 0.0877974 1.05435 0 0.833333 0C0.61232 0 0.400358 0.0877974 0.244078 0.244078C0.0877974 0.400358 0 0.61232 0 0.833333L0 15.8333C0.00132321 16.938 0.440735 17.997 1.22185 18.7782C2.00296 19.5593 3.062 19.9987 4.16667 20H19.1667C19.3877 20 19.5996 19.9122 19.7559 19.7559C19.9122 19.5996 20 19.3877 20 19.1667C20 18.9457 19.9122 18.7337 19.7559 18.5774C19.5996 18.4211 19.3877 18.3333 19.1667 18.3333Z"
                fill="currentColor" />
              <path
                d="M5.00008 16.6666C5.22109 16.6666 5.43305 16.5788 5.58933 16.4225C5.74561 16.2663 5.83341 16.0543 5.83341 15.8333V9.99996C5.83341 9.77895 5.74561 9.56698 5.58933 9.4107C5.43305 9.25442 5.22109 9.16663 5.00008 9.16663C4.77907 9.16663 4.56711 9.25442 4.41083 9.4107C4.25455 9.56698 4.16675 9.77895 4.16675 9.99996V15.8333C4.16675 16.0543 4.25455 16.2663 4.41083 16.4225C4.56711 16.5788 4.77907 16.6666 5.00008 16.6666Z"
                fill="currentColor" />
              <path
                d="M8.33325 8.33333V15.8333C8.33325 16.0543 8.42105 16.2663 8.57733 16.4226C8.73361 16.5789 8.94558 16.6667 9.16659 16.6667C9.38761 16.6667 9.59957 16.5789 9.75585 16.4226C9.91213 16.2663 9.99993 16.0543 9.99993 15.8333V8.33333C9.99993 8.11232 9.91213 7.90036 9.75585 7.74408C9.59957 7.5878 9.38761 7.5 9.16659 7.5C8.94558 7.5 8.73361 7.5878 8.57733 7.74408C8.42105 7.90036 8.33325 8.11232 8.33325 8.33333Z"
                fill="currentColor" />
              <path
                d="M12.5 10.8333V15.8333C12.5 16.0543 12.5878 16.2663 12.7441 16.4226C12.9004 16.5789 13.1123 16.6667 13.3333 16.6667C13.5544 16.6667 13.7663 16.5789 13.9226 16.4226C14.0789 16.2663 14.1667 16.0543 14.1667 15.8333V10.8333C14.1667 10.6123 14.0789 10.4004 13.9226 10.2441C13.7663 10.0878 13.5544 10 13.3333 10C13.1123 10 12.9004 10.0878 12.7441 10.2441C12.5878 10.4004 12.5 10.6123 12.5 10.8333Z"
                fill="currentColor" />
              <path
                d="M16.6667 7.49996V15.8333C16.6667 16.0543 16.7545 16.2663 16.9108 16.4225C17.0671 16.5788 17.2791 16.6666 17.5001 16.6666C17.7211 16.6666 17.9331 16.5788 18.0893 16.4225C18.2456 16.2663 18.3334 16.0543 18.3334 15.8333V7.49996C18.3334 7.27895 18.2456 7.06698 18.0893 6.9107C17.9331 6.75442 17.7211 6.66663 17.5001 6.66663C17.2791 6.66663 17.0671 6.75442 16.9108 6.9107C16.7545 7.06698 16.6667 7.27895 16.6667 7.49996Z"
                fill="currentColor" />
              <path
                d="M4.9999 7.49989C5.2209 7.49984 5.43283 7.41202 5.58907 7.25572L8.5774 4.26739C8.73624 4.11608 8.9472 4.03168 9.16657 4.03168C9.38594 4.03168 9.5969 4.11608 9.75574 4.26739L11.5657 6.07739C12.0346 6.54607 12.6703 6.80936 13.3332 6.80936C13.9961 6.80936 14.6319 6.54607 15.1007 6.07739L19.7557 1.42239C19.9075 1.26522 19.9915 1.05472 19.9896 0.836224C19.9877 0.617727 19.9001 0.408716 19.7456 0.25421C19.5911 0.0997028 19.3821 0.012062 19.1636 0.0101633C18.9451 0.00826466 18.7346 0.09226 18.5774 0.244058L13.9224 4.89822C13.7661 5.05445 13.5542 5.14221 13.3332 5.14221C13.1123 5.14221 12.9003 5.05445 12.7441 4.89822L10.9341 3.08906C10.4653 2.62038 9.82948 2.35709 9.16657 2.35709C8.50366 2.35709 7.86789 2.62038 7.39907 3.08906L4.41074 6.07739C4.29423 6.19393 4.21489 6.3424 4.18275 6.50403C4.15061 6.66566 4.16711 6.83319 4.23017 6.98544C4.29323 7.13769 4.40001 7.26782 4.53702 7.35939C4.67403 7.45096 4.83511 7.49986 4.9999 7.49989Z"
                fill="currentColor" />
            </g>
            <defs>
              <clipPath id="clip0_496_1550">
                <rect class="size-6" fill="white" />
              </clipPath>
            </defs>
          </svg>      
       `,
    label: 'گزارش پیشرفت',
    badge: 24,
  },
  {
    icon: `<svg class="size-28 opacity-10 -me-7" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.79993 7.34167L3.7916 8.35001C1.8416 10.3 1.8416 13.4667 3.7916 15.425" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.2749 10.1251L8.21658 12.1834C7.07492 13.3251 7.07492 15.1667 8.21658 16.3084C9.35825 17.4501 11.1999 17.4501 12.3416 16.3084L15.5833 13.0667C17.8583 10.7917 17.8583 7.09172 15.5833 4.81672C13.3083 2.54172 9.60825 2.54172 7.33325 4.81672" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>      
       `,
    label: 'قرارداد',
    badge: 15,
  },
  {
    icon: `<svg class="size-28 opacity-10 -me-7" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.2749 13.2334L13.2332 3.27502" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.25 15.2333L10.25 14.2333" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11.4917 12.9917L13.4834 11" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M17.025 7.06665C18.775 8.81665 18.7666 9.69998 17 11.4666L11.4666 17C9.69998 18.7666 8.81665 18.775 7.06665 17.025L2.97498 12.9333C1.22498 11.1833 1.23331 10.3 2.99998 8.53331L8.53331 2.99998C10.3 1.23331 11.1833 1.22498 12.9333 2.97498L14.5166 4.55831" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1.66675 18.3334H18.3334" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>      
       `,
    label: 'درخواست پرداخت',
    badge: 0,
  },
  {
    icon: `<svg class="size-28 opacity-10 -me-7" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_496_1522)">
          <path d="M2.48483 7.21865L2.9628 6.22303C3.02212 6.09922 3.00348 5.95134 2.91365 5.84645L2.0306 4.81473C1.91195 4.67716 1.92043 4.4691 2.05094 4.34185L4.1967 2.22509C4.32212 2.10129 4.51873 2.09441 4.65263 2.20962L5.70178 3.1141C5.80009 3.19836 5.93568 3.21899 6.05263 3.16912L7.67297 2.47615C7.79839 2.42284 7.87975 2.29732 7.87975 2.15975V0.859778C7.87975 0.670628 8.03229 0.515869 8.21873 0.515869H11.3628C11.5492 0.515869 11.7018 0.670628 11.7018 0.859778V2.14256C11.7018 2.27496 11.7764 2.39533 11.895 2.45207L13.5662 3.2637C13.695 3.3256 13.8475 3.29981 13.9492 3.19836L14.9679 2.18555C15.1001 2.05314 15.3136 2.05486 15.4442 2.18726L17.6611 4.43643C17.7916 4.56883 17.7933 4.78377 17.6645 4.9179L16.8323 5.79143C16.7374 5.89116 16.7103 6.03732 16.7628 6.16285L17.5408 8.04059C17.5933 8.16783 17.717 8.25037 17.8526 8.25037H19.1492C19.3357 8.25037 19.4882 8.40513 19.4882 8.59428V11.6963C19.4882 11.8855 19.3357 12.0402 19.1492 12.0402H17.9153C17.7831 12.0402 17.6628 12.1176 17.6086 12.2397L16.7747 14.0624C16.7153 14.1931 16.7425 14.3479 16.8425 14.451L17.8052 15.4277C17.9374 15.5619 17.9374 15.7802 17.8052 15.9144L15.6238 18.1274C15.4967 18.2564 15.2933 18.2615 15.1594 18.1429L14.0984 17.1937C13.9984 17.1043 13.8543 17.0819 13.7323 17.1387L13.0814 17.4413" stroke="currentColor" stroke-miterlimit="10"/>
          <path d="M5.31689 7.24098C6.25249 5.65556 7.96096 4.5946 9.9152 4.5946C12.8711 4.5946 15.2694 7.02604 15.2694 10.0266C15.2694 11.9732 14.2593 13.6807 12.744 14.6402" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M4.12888 9.20813L0.508545 12.8226" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M1.08472 9.20813H4.12878V12.1933" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10.8662 15.8696L7.24585 19.4841" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M7.82373 15.8696H10.8661V18.8548" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M11.0169 8.99841L2.41187 17.7853" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M6.89819 8.99841H11.0168V13.2921" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          <defs>
          <clipPath id="clip0_496_1522">
          <rect class="size-6" fill="currentColor"/>
          </clipPath>
          </defs>
          </svg>      
       `,
    label: 'کارآیی',
    badge: 0,
  },
  {
    icon: `<svg class="size-28 opacity-10 -me-7" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.83341 6.66663H3.33341C2.41675 6.66663 1.66675 5.91663 1.66675 4.99996V3.33329C1.66675 2.41663 2.41675 1.66663 3.33341 1.66663H5.83341C6.75008 1.66663 7.50008 2.41663 7.50008 3.33329V4.99996C7.50008 5.91663 6.75008 6.66663 5.83341 6.66663Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M17.3333 5.83333H14.3332C13.7832 5.83333 13.3333 5.38332 13.3333 4.83332V3.50001C13.3333 2.95001 13.7832 2.5 14.3332 2.5H17.3333C17.8833 2.5 18.3333 2.95001 18.3333 3.50001V4.83332C18.3333 5.38332 17.8833 5.83333 17.3333 5.83333Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M17.3333 12.0833H14.3332C13.7832 12.0833 13.3333 11.6333 13.3333 11.0833V9.75001C13.3333 9.20001 13.7832 8.75 14.3332 8.75H17.3333C17.8833 8.75 18.3333 9.20001 18.3333 9.75001V11.0833C18.3333 11.6333 17.8833 12.0833 17.3333 12.0833Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M7.5 4.16663H13.3333" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10.4167 13.6333V15C10.4167 15.9166 11.1667 16.6666 12.0834 16.6666H13.3334" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10.4167 4.16663V10.2666" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M13.3334 10.4166H10.4167" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M17.3333 18.3333H14.3332C13.7832 18.3333 13.3333 17.8833 13.3333 17.3333V16C13.3333 15.45 13.7832 15 14.3332 15H17.3333C17.8833 15 18.3333 15.45 18.3333 16V17.3333C18.3333 17.8833 17.8833 18.3333 17.3333 18.3333Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>     
       `,
    label: 'برنامه',
    badge: 15,
  },
  {
    icon: `<svg class="size-28 opacity-10 -me-7" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.0834 12.8667H7.91675" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10 10.8334V15" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10 18.3334H6.75C6.55 18.3334 6.35 18.3167 6.15833 18.2917C3.50833 18.1167 2.09167 16.7001 1.91667 14.0501C1.89167 13.8584 1.875 13.6584 1.875 13.4584V11.8334C1.875 10.1584 2.89167 8.71672 4.34167 8.09172C4.84167 7.88339 5.375 7.76672 5.94167 7.76672H14.075C14.4833 7.76672 14.8833 7.82506 15.25 7.93339C16.9167 8.43339 18.1333 9.99172 18.1333 11.8251V13.4501C18.1333 13.6167 18.125 13.7834 18.1167 13.9501C17.9583 16.8667 16.3333 18.3334 13.25 18.3334" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.7499 2.09999L10.7249 2.15833L8.30825 7.76666H5.93325C5.36659 7.76666 4.82492 7.88333 4.33325 8.09166L5.79159 4.60833L5.82492 4.52499L5.88325 4.39166C5.89992 4.34166 5.91659 4.29166 5.94159 4.24999C7.03325 1.72499 8.26659 1.14999 10.7499 2.09999Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15.2417 7.93331C14.8667 7.81664 14.4667 7.76664 14.0667 7.76664H8.30835L10.725 2.15831L10.75 2.09998C10.875 2.14164 10.9917 2.19998 11.1167 2.24998L12.9583 3.02498C13.9833 3.44998 14.7 3.89164 15.1333 4.42498C15.2167 4.52498 15.2833 4.61664 15.3417 4.72498C15.4167 4.84164 15.475 4.95831 15.5084 5.08331C15.5417 5.15831 15.5667 5.23331 15.5834 5.29998C15.8084 5.99998 15.675 6.85831 15.2417 7.93331Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5.7917 4.60828L4.33337 8.09161C2.88337 8.71661 1.8667 10.1583 1.8667 11.8333V9.39161C1.8667 7.02494 3.55003 5.04994 5.7917 4.60828Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M18.1333 9.39171V11.8334C18.1333 10 16.9167 8.44171 15.25 7.94171C15.6833 6.85837 15.8083 6.00837 15.6 5.30004C15.5833 5.22504 15.5583 5.15004 15.525 5.08337C17.075 5.88337 18.1333 7.52504 18.1333 9.39171Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>     
       `,
    label: 'تنخواه',
    badge: 30,
  },
]

function toPersianNumber(number) {
  return number.toString().replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[d])
}
</script>
<template>
  <div class="col-span-full grid siz grid-cols-12 gap-x-10 gap-y-5">
    <div
      v-for="item in smalcards"
      :key="item.label"
      class="col-span-4 group flex bg-neutral-100 hover:bg-[#1E1B78] cursor-pointer transition-all duration-300 shadow-lg shadow-neutral-300 rounded-xl items-center justify-between py-5 px-5"
    >
      <!-- title -->
      <div
        class="flex text-[#1E1B78] group-hover:text-neutral-100 transition-all duration-300 items-center"
      >
        <span v-html="item.icon"></span>
        <p
          class="text-3xl font-semibold text-[#1E1B78] group-hover:text-neutral-100 transition-all duration-300"
        >
          {{ item.label }}
        </p>
      </div>
      <div
        v-if="+item.badge > 0"
        class="font-semibold group-hover:!opacity-0 duration-300 transition-all text-xl text-red-600 border-4 rounded-full border-red-600 border-solid flex items-center justify-center w-12 h-12"
      >
        {{ toPersianNumber(item.badge) }}
      </div>
    </div>
  </div>
</template>

<style></style>
