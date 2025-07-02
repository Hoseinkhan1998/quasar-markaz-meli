<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import Arrowdown from './Arrowdown.vue'
import Arrowup from './Arrowup.vue'
const route = useRoute()

const items = [
  {
    icon: `<svg class="size-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 15V12.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path
          d="M17.2001 16.0333C17.0001 17.2083 15.8584 18.175 14.6667 18.175H5.33339C4.13339 18.175 3.00006 17.2166 2.80006 16.0333L1.69172 9.39998C1.55006 8.58331 1.96672 7.49164 2.61672 6.97498L8.39172 2.34998C9.27506 1.64164 10.7167 1.64164 11.6084 2.35831L17.3834 6.97498C18.0251 7.49164 18.4417 8.58331 18.3084 9.39998L17.7917 12.5"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round" />
      </svg>`,
    label: 'خانه',
    route: '/',
  },

  {
    icon: `<svg class="size-5" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4497 9.3442C11.4497 8.88396 11.8228 8.51086 12.283 8.51086H12.2905C12.7508 8.51086 13.1239 8.88396 13.1239 9.3442C13.1239 9.80444 12.7508 10.1775 12.2905 10.1775H12.283C11.8228 10.1775 11.4497 9.80444 11.4497 9.3442Z" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.10889 9.3442C8.10889 8.88396 8.48198 8.51086 8.94222 8.51086H8.94972C9.40996 8.51086 9.78305 8.88396 9.78305 9.3442C9.78305 9.80444 9.40996 10.1775 8.94972 10.1775H8.94222C8.48198 10.1775 8.10889 9.80444 8.10889 9.3442Z" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.76782 9.3442C4.76782 8.88396 5.14092 8.51086 5.60116 8.51086H5.60866C6.06889 8.51086 6.44199 8.88396 6.44199 9.3442C6.44199 9.80444 6.06889 10.1775 5.60866 10.1775H5.60116C5.14092 10.1775 4.76782 9.80444 4.76782 9.3442Z" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4507 3.54773C11.4438 0.539591 6.5577 0.539591 3.55074 3.54773L3.55061 3.54786C1.19571 5.90231 0.6843 9.39239 2.00601 12.2486C2.01045 12.2582 2.01465 12.2679 2.01859 12.2777C2.0954 12.4685 2.09368 12.6848 2.09022 12.8071C2.08588 12.9607 2.06889 13.1376 2.04792 13.3176C2.02809 13.4878 2.00291 13.6753 1.97731 13.8659L1.97199 13.9055C1.94427 14.112 1.91605 14.324 1.89141 14.5364C1.84144 14.967 1.81006 15.3691 1.82402 15.6908C1.83098 15.8511 1.84851 15.9699 1.87088 16.0513C1.87842 16.0787 1.88533 16.0976 1.89042 16.1098C1.90259 16.1149 1.92148 16.1218 1.94891 16.1293C2.03035 16.1516 2.14915 16.1691 2.30946 16.1761C2.63115 16.19 3.03327 16.1587 3.46384 16.1087C3.67614 16.0841 3.88813 16.0559 4.09464 16.0282L4.134 16.0229C4.32465 15.9974 4.51222 15.9722 4.68245 15.9524C4.86243 15.9315 5.03936 15.9145 5.19291 15.9102C5.31522 15.9067 5.53145 15.9051 5.72223 15.9819C5.73198 15.9858 5.74162 15.99 5.75115 15.9944C8.60796 17.3156 12.0967 16.8048 14.4507 14.4497L14.4508 14.4496C17.4581 11.4418 17.4641 6.56076 14.4508 3.54784L14.4507 3.54773ZM15.3347 2.66391C11.8395 -0.832506 6.1618 -0.832467 2.66669 2.66402C-0.0533472 5.38364 -0.654392 9.40397 0.840893 12.7065C0.84134 12.7211 0.841546 12.7425 0.840717 12.7718C0.837963 12.8692 0.826185 13.0024 0.806314 13.173C0.787812 13.3318 0.764033 13.5089 0.737952 13.7031L0.733105 13.7392C0.705446 13.9453 0.675823 14.1675 0.64974 14.3923C0.598267 14.8359 0.556735 15.3195 0.5752 15.745C0.584456 15.9583 0.609476 16.1785 0.665583 16.3826C0.72041 16.5821 0.817401 16.8124 1.00269 16.9977L1.00298 16.998C1.18832 17.1831 1.41861 17.28 1.61799 17.3347C1.82205 17.3907 2.04215 17.4157 2.25538 17.4249C2.68076 17.4433 3.16427 17.4018 3.60781 17.3504C3.83256 17.3244 4.05475 17.2948 4.26077 17.2671L4.29654 17.2623C4.49086 17.2363 4.66803 17.2125 4.82691 17.194C4.99744 17.1742 5.13063 17.1624 5.22803 17.1597C5.25738 17.1589 5.27877 17.1591 5.29338 17.1595C8.5962 18.6541 12.6153 18.054 15.3347 15.3334C18.8294 11.8382 18.8369 6.16571 15.3347 2.66391Z" fill="white"/>
    </svg>
`,
    label: 'گفت‌وگو',
    route: '/chat',
  },
  {
    icon: `<svg class="size-5" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 15.25V13C20 8.02944 15.9706 4 11 4C6.02944 4 2 8.02944 2 13H14" stroke="white"/>
      <path d="M6 15H19.5C20.3284 15 21 15.6716 21 16.5V16.5C21 17.3284 20.3284 18 19.5 18H2.5C1.67157 18 1 17.3284 1 16.5V16C1 15.4477 1.44772 15 2 15V15M4 15H2M2 13V15" stroke="white"/>
      <path d="M20 13H16" stroke="white"/>
      <path d="M8.99998 4C8.86933 3.34679 9.00494 2.18155 10.2256 1.70835C11.0273 1.39755 12.0032 1.59492 12.4999 2.29683C12.7826 2.69643 13 3.25402 13 4" stroke="white"/>
      <ellipse cx="11" cy="1" rx="1" ry="1" fill="white"/>
      </svg>`,
    label: 'مدیر غذا',
    route: '/foodmanagment',
  },
  {
    icon: `<svg class="size-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.16675 16.25H17.5001" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16.6667 10.4166H17.5001" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9.16675 10.4166H13.7417" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9.16675 4.58337H17.5001" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M2.5 4.58329L3.33333 5.41663L5.83333 2.91663" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M2.5 10.4167L3.33333 11.25L5.83333 8.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M2.5 16.25L3.33333 17.0834L5.83333 14.5834" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
    label: 'وظایف',
    route: '/tasks',
  },
  {
    icon: `<svg class="size-5" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.66675 15.7084V13.4584C1.66675 11.5834 2.41675 10.8334 4.29175 10.8334H6.54175C8.41675 10.8334 9.16675 11.5834 9.16675 13.4584V15.7084C9.16675 17.5834 8.41675 18.3334 6.54175 18.3334H4.29175" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M18.3333 12.5C18.3333 15.725 15.725 18.3333 12.5 18.3333L13.375 16.875" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M1.66675 7.49996C1.66675 4.27496 4.27508 1.66663 7.50008 1.66663L6.62508 3.12496" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M14.5833 9.16663C16.6543 9.16663 18.3333 7.48769 18.3333 5.41663C18.3333 3.34556 16.6543 1.66663 14.5833 1.66663C12.5122 1.66663 10.8333 3.34556 10.8333 5.41663C10.8333 7.48769 12.5122 9.16663 14.5833 9.16663Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
    label: 'فرآیندها',
    route: '/processes',
  },

  {
    icon: `<svg class="size-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.66675 1.66663V4.16663" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M13.3333 1.66663V4.16663" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2.91675 7.57495H17.0834" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2.5 10.8416V7.08329C2.5 4.58329 3.75 2.91663 6.66667 2.91663H13.3333C16.25 2.91663 17.5 4.58329 17.5 7.08329V14.1666C17.5 16.6666 16.25 18.3333 13.3333 18.3333H6.66667C3.75 18.3333 2.5 16.6666 2.5 14.1666" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M13.0788 11.4167H13.0863" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M13.0788 13.9167H13.0863" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.99632 11.4167H10.0038" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.99632 13.9167H10.0038" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6.91185 11.4167H6.91933" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6.91185 13.9167H6.91933" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `,
    label: 'تقویم',
    route: '/calendar',
  },
  {
    icon: `<svg class="size-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.0834 12.8667H7.91675" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10 10.8334V15" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10 18.3334H6.75C6.55 18.3334 6.35 18.3167 6.15833 18.2917C3.50833 18.1167 2.09167 16.7001 1.91667 14.0501C1.89167 13.8584 1.875 13.6584 1.875 13.4584V11.8334C1.875 10.1584 2.89167 8.71672 4.34167 8.09172C4.84167 7.88339 5.375 7.76672 5.94167 7.76672H14.075C14.4833 7.76672 14.8833 7.82506 15.25 7.93339C16.9167 8.43339 18.1333 9.99172 18.1333 11.8251V13.4501C18.1333 13.6167 18.125 13.7834 18.1167 13.9501C17.9583 16.8667 16.3333 18.3334 13.25 18.3334" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.7499 2.09999L10.7249 2.15833L8.30825 7.76666H5.93325C5.36659 7.76666 4.82492 7.88333 4.33325 8.09166L5.79159 4.60833L5.82492 4.52499L5.88325 4.39166C5.89992 4.34166 5.91659 4.29166 5.94159 4.24999C7.03325 1.72499 8.26659 1.14999 10.7499 2.09999Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15.2417 7.93331C14.8667 7.81664 14.4667 7.76664 14.0667 7.76664H8.30835L10.725 2.15831L10.75 2.09998C10.875 2.14164 10.9917 2.19998 11.1167 2.24998L12.9583 3.02498C13.9833 3.44998 14.7 3.89164 15.1333 4.42498C15.2167 4.52498 15.2833 4.61664 15.3417 4.72498C15.4167 4.84164 15.475 4.95831 15.5084 5.08331C15.5417 5.15831 15.5667 5.23331 15.5834 5.29998C15.8084 5.99998 15.675 6.85831 15.2417 7.93331Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5.7917 4.60828L4.33337 8.09161C2.88337 8.71661 1.8667 10.1583 1.8667 11.8333V9.39161C1.8667 7.02494 3.55003 5.04994 5.7917 4.60828Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M18.1333 9.39171V11.8334C18.1333 10 16.9167 8.44171 15.25 7.94171C15.6833 6.85837 15.8083 6.00837 15.6 5.30004C15.5833 5.22504 15.5583 5.15004 15.525 5.08337C17.075 5.88337 18.1333 7.52504 18.1333 9.39171Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `,
    label: 'تنخواه',
    route: '/salary',
  },
  {
    icon: `<svg class="size-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_496_1522)">
          <path d="M2.48483 7.21865L2.9628 6.22303C3.02212 6.09922 3.00348 5.95134 2.91365 5.84645L2.0306 4.81473C1.91195 4.67716 1.92043 4.4691 2.05094 4.34185L4.1967 2.22509C4.32212 2.10129 4.51873 2.09441 4.65263 2.20962L5.70178 3.1141C5.80009 3.19836 5.93568 3.21899 6.05263 3.16912L7.67297 2.47615C7.79839 2.42284 7.87975 2.29732 7.87975 2.15975V0.859778C7.87975 0.670628 8.03229 0.515869 8.21873 0.515869H11.3628C11.5492 0.515869 11.7018 0.670628 11.7018 0.859778V2.14256C11.7018 2.27496 11.7764 2.39533 11.895 2.45207L13.5662 3.2637C13.695 3.3256 13.8475 3.29981 13.9492 3.19836L14.9679 2.18555C15.1001 2.05314 15.3136 2.05486 15.4442 2.18726L17.6611 4.43643C17.7916 4.56883 17.7933 4.78377 17.6645 4.9179L16.8323 5.79143C16.7374 5.89116 16.7103 6.03732 16.7628 6.16285L17.5408 8.04059C17.5933 8.16783 17.717 8.25037 17.8526 8.25037H19.1492C19.3357 8.25037 19.4882 8.40513 19.4882 8.59428V11.6963C19.4882 11.8855 19.3357 12.0402 19.1492 12.0402H17.9153C17.7831 12.0402 17.6628 12.1176 17.6086 12.2397L16.7747 14.0624C16.7153 14.1931 16.7425 14.3479 16.8425 14.451L17.8052 15.4277C17.9374 15.5619 17.9374 15.7802 17.8052 15.9144L15.6238 18.1274C15.4967 18.2564 15.2933 18.2615 15.1594 18.1429L14.0984 17.1937C13.9984 17.1043 13.8543 17.0819 13.7323 17.1387L13.0814 17.4413" stroke="white" stroke-miterlimit="10"/>
          <path d="M5.31689 7.24098C6.25249 5.65556 7.96096 4.5946 9.9152 4.5946C12.8711 4.5946 15.2694 7.02604 15.2694 10.0266C15.2694 11.9732 14.2593 13.6807 12.744 14.6402" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M4.12888 9.20813L0.508545 12.8226" stroke="#ECECF9" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M1.08472 9.20813H4.12878V12.1933" stroke="#ECECF9" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10.8662 15.8696L7.24585 19.4841" stroke="#ECECF9" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M7.82373 15.8696H10.8661V18.8548" stroke="#ECECF9" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M11.0169 8.99841L2.41187 17.7853" stroke="#ECECF9" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M6.89819 8.99841H11.0168V13.2921" stroke="#ECECF9" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          <defs>
          <clipPath id="clip0_496_1522">
          <rect class="size-5" fill="white"/>
          </clipPath>
          </defs>
          </svg>`,
    label: 'کارآیی',
    route: '/efficiency',
  },
  {
    icon: `<svg class="size-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.83341 6.66663H3.33341C2.41675 6.66663 1.66675 5.91663 1.66675 4.99996V3.33329C1.66675 2.41663 2.41675 1.66663 3.33341 1.66663H5.83341C6.75008 1.66663 7.50008 2.41663 7.50008 3.33329V4.99996C7.50008 5.91663 6.75008 6.66663 5.83341 6.66663Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M17.3333 5.83333H14.3332C13.7832 5.83333 13.3333 5.38332 13.3333 4.83332V3.50001C13.3333 2.95001 13.7832 2.5 14.3332 2.5H17.3333C17.8833 2.5 18.3333 2.95001 18.3333 3.50001V4.83332C18.3333 5.38332 17.8833 5.83333 17.3333 5.83333Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M17.3333 12.0833H14.3332C13.7832 12.0833 13.3333 11.6333 13.3333 11.0833V9.75001C13.3333 9.20001 13.7832 8.75 14.3332 8.75H17.3333C17.8833 8.75 18.3333 9.20001 18.3333 9.75001V11.0833C18.3333 11.6333 17.8833 12.0833 17.3333 12.0833Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M7.5 4.16663H13.3333" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10.4167 13.6333V15C10.4167 15.9166 11.1667 16.6666 12.0834 16.6666H13.3334" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10.4167 4.16663V10.2666" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M13.3334 10.4166H10.4167" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M17.3333 18.3333H14.3332C13.7832 18.3333 13.3333 17.8833 13.3333 17.3333V16C13.3333 15.45 13.7832 15 14.3332 15H17.3333C17.8833 15 18.3333 15.45 18.3333 16V17.3333C18.3333 17.8833 17.8833 18.3333 17.3333 18.3333Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
 `,
    label: 'برنامه ها',
    route: '/programs',
  },
  {
    icon: `<svg class="size-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_496_1550)">
      <path d="M19.1667 18.3333H4.16667C3.50363 18.3333 2.86774 18.0699 2.3989 17.6011C1.93006 17.1323 1.66667 16.4964 1.66667 15.8333V0.833333C1.66667 0.61232 1.57887 0.400358 1.42259 0.244078C1.26631 0.0877974 1.05435 0 0.833333 0C0.61232 0 0.400358 0.0877974 0.244078 0.244078C0.0877974 0.400358 0 0.61232 0 0.833333L0 15.8333C0.00132321 16.938 0.440735 17.997 1.22185 18.7782C2.00296 19.5593 3.062 19.9987 4.16667 20H19.1667C19.3877 20 19.5996 19.9122 19.7559 19.7559C19.9122 19.5996 20 19.3877 20 19.1667C20 18.9457 19.9122 18.7337 19.7559 18.5774C19.5996 18.4211 19.3877 18.3333 19.1667 18.3333Z" fill="#F0EFFF"/>
      <path d="M5.00008 16.6666C5.22109 16.6666 5.43305 16.5788 5.58933 16.4225C5.74561 16.2663 5.83341 16.0543 5.83341 15.8333V9.99996C5.83341 9.77895 5.74561 9.56698 5.58933 9.4107C5.43305 9.25442 5.22109 9.16663 5.00008 9.16663C4.77907 9.16663 4.56711 9.25442 4.41083 9.4107C4.25455 9.56698 4.16675 9.77895 4.16675 9.99996V15.8333C4.16675 16.0543 4.25455 16.2663 4.41083 16.4225C4.56711 16.5788 4.77907 16.6666 5.00008 16.6666Z" fill="#F0EFFF"/>
      <path d="M8.33325 8.33333V15.8333C8.33325 16.0543 8.42105 16.2663 8.57733 16.4226C8.73361 16.5789 8.94558 16.6667 9.16659 16.6667C9.38761 16.6667 9.59957 16.5789 9.75585 16.4226C9.91213 16.2663 9.99993 16.0543 9.99993 15.8333V8.33333C9.99993 8.11232 9.91213 7.90036 9.75585 7.74408C9.59957 7.5878 9.38761 7.5 9.16659 7.5C8.94558 7.5 8.73361 7.5878 8.57733 7.74408C8.42105 7.90036 8.33325 8.11232 8.33325 8.33333Z" fill="#F0EFFF"/>
      <path d="M12.5 10.8333V15.8333C12.5 16.0543 12.5878 16.2663 12.7441 16.4226C12.9004 16.5789 13.1123 16.6667 13.3333 16.6667C13.5544 16.6667 13.7663 16.5789 13.9226 16.4226C14.0789 16.2663 14.1667 16.0543 14.1667 15.8333V10.8333C14.1667 10.6123 14.0789 10.4004 13.9226 10.2441C13.7663 10.0878 13.5544 10 13.3333 10C13.1123 10 12.9004 10.0878 12.7441 10.2441C12.5878 10.4004 12.5 10.6123 12.5 10.8333Z" fill="#F0EFFF"/>
      <path d="M16.6667 7.49996V15.8333C16.6667 16.0543 16.7545 16.2663 16.9108 16.4225C17.0671 16.5788 17.2791 16.6666 17.5001 16.6666C17.7211 16.6666 17.9331 16.5788 18.0893 16.4225C18.2456 16.2663 18.3334 16.0543 18.3334 15.8333V7.49996C18.3334 7.27895 18.2456 7.06698 18.0893 6.9107C17.9331 6.75442 17.7211 6.66663 17.5001 6.66663C17.2791 6.66663 17.0671 6.75442 16.9108 6.9107C16.7545 7.06698 16.6667 7.27895 16.6667 7.49996Z" fill="#F0EFFF"/>
      <path d="M4.9999 7.49989C5.2209 7.49984 5.43283 7.41202 5.58907 7.25572L8.5774 4.26739C8.73624 4.11608 8.9472 4.03168 9.16657 4.03168C9.38594 4.03168 9.5969 4.11608 9.75574 4.26739L11.5657 6.07739C12.0346 6.54607 12.6703 6.80936 13.3332 6.80936C13.9961 6.80936 14.6319 6.54607 15.1007 6.07739L19.7557 1.42239C19.9075 1.26522 19.9915 1.05472 19.9896 0.836224C19.9877 0.617727 19.9001 0.408716 19.7456 0.25421C19.5911 0.0997028 19.3821 0.012062 19.1636 0.0101633C18.9451 0.00826466 18.7346 0.09226 18.5774 0.244058L13.9224 4.89822C13.7661 5.05445 13.5542 5.14221 13.3332 5.14221C13.1123 5.14221 12.9003 5.05445 12.7441 4.89822L10.9341 3.08906C10.4653 2.62038 9.82948 2.35709 9.16657 2.35709C8.50366 2.35709 7.86789 2.62038 7.39907 3.08906L4.41074 6.07739C4.29423 6.19393 4.21489 6.3424 4.18275 6.50403C4.15061 6.66566 4.16711 6.83319 4.23017 6.98544C4.29323 7.13769 4.40001 7.26782 4.53702 7.35939C4.67403 7.45096 4.83511 7.49986 4.9999 7.49989Z" fill="#F0EFFF"/>
      </g>
      <defs>
      <clipPath id="clip0_496_1550">
      <rect class="size-5" fill="white"/>
      </clipPath>
      </defs>
      </svg>
      
       `,
    label: 'گزارش',
    route: '/report',
  },
  {
    icon: `<svg class="size-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.3333 4.99996V7.01662C18.3333 8.33329 17.4999 9.16663 16.1833 9.16663H13.3333V3.34162C13.3333 2.41662 14.0916 1.66663 15.0166 1.66663C15.9249 1.67496 16.7583 2.04162 17.3583 2.64162C17.9583 3.24996 18.3333 4.08329 18.3333 4.99996Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.1416 7.52506L9.77493 6.89172" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5.2251 11.4416L7.0751 9.59162L7.5001 9.16663" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1.66675 9.16663V17.5C1.66675 18.1916 2.45008 18.5833 3.00008 18.1666L4.42508 17.1C4.75842 16.85 5.22508 16.8833 5.52508 17.1833L6.90842 18.575C7.23342 18.9 7.76675 18.9 8.09175 18.575L9.49175 17.175C9.78341 16.8833 10.2501 16.85 10.5751 17.1L12.0001 18.1666C12.5501 18.575 13.3334 18.1833 13.3334 17.5V3.33329C13.3334 2.41663 14.0834 1.66663 15.0001 1.66663H5.83341H5.00008C2.50008 1.66663 1.66675 3.15829 1.66675 4.99996V5.83329" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.93724 11.25H9.94472" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5.16233 7.08329H5.16982" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
    label: 'تخصیص ها',
    route: '/allocations',
  },
  {
    icon: `<svg class="size-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.79993 7.34167L3.7916 8.35001C1.8416 10.3 1.8416 13.4667 3.7916 15.425" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.2749 10.1251L8.21658 12.1834C7.07492 13.3251 7.07492 15.1667 8.21658 16.3084C9.35825 17.4501 11.1999 17.4501 12.3416 16.3084L15.5833 13.0667C17.8583 10.7917 17.8583 7.09172 15.5833 4.81672C13.3083 2.54172 9.60825 2.54172 7.33325 4.81672" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        `,
    label: 'قراردادها',
    route: '/contracts',
  },
  {
    icon: `<svg class="size-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.2749 13.2334L13.2332 3.27502" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.25 15.2333L10.25 14.2333" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11.4917 12.9917L13.4834 11" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M17.025 7.06665C18.775 8.81665 18.7666 9.69998 17 11.4666L11.4666 17C9.69998 18.7666 8.81665 18.775 7.06665 17.025L2.97498 12.9333C1.22498 11.1833 1.23331 10.3 2.99998 8.53331L8.53331 2.99998C10.3 1.23331 11.1833 1.22498 12.9333 2.97498L14.5166 4.55831" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1.66675 18.3334H18.3334" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
    label: 'پرداخت',
    route: '/payment',
  },
  {
    icon: `<svg class="size-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 17.7083C15.7808 17.7083 17.7083 15.7808 17.7083 10" stroke="#F0EFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10.0001 2.29163C4.21925 2.29163 2.29175 4.21913 2.29175 9.99996C2.29175 14.6275 3.52675 16.7858 6.98508 17.4625" stroke="#F0EFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2743 3.58661V3.58661C15.4468 2.85411 14.1827 2.93078 13.4502 3.75828C13.4502 3.75828 9.80934 7.87078 8.54684 9.29828C7.28267 10.7249 8.20934 12.6958 8.20934 12.6958C8.20934 12.6958 10.296 13.3566 11.541 11.9499C12.7868 10.5433 16.446 6.41078 16.446 6.41078C17.1785 5.58328 17.101 4.31911 16.2743 3.58661Z" stroke="#F0EFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12.5078 4.83411L14.0186 6.17161" stroke="#F0EFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      `,
    label: 'مدیر اطلاعیه',
    route: '/announcementManager',
  },
]

const scrollContainer = ref(null)
const isAtBottom = ref(false)
const isAtTop = ref(true)
const hasScroll = ref(false)

const handleScroll = () => {
  const el = scrollContainer.value
  if (!el) return

  const scrollTop = el.scrollTop
  const scrollHeight = el.scrollHeight
  const clientHeight = el.clientHeight

  isAtTop.value = scrollTop === 0
  isAtBottom.value = scrollTop + clientHeight >= scrollHeight
  hasScroll.value = scrollHeight > clientHeight
}

onMounted(() => {
  handleScroll() 
  scrollContainer.value?.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', handleScroll) 
})

onUnmounted(() => {
  scrollContainer.value?.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleScroll)
})

</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <div class="h-10">
      <div class="mb-3" v-show="hasScroll && !isAtTop">
        <Arrowup />
      </div>
    </div>
    <div
      ref="scrollContainer"
      class="!flex relative !flex-col items-center max-h-[60vh] text-neutral-100 text-lg font-semibold overflow-y-auto"
    >
      <!-- icons -->
      <div class="!flex !flex-col !gap-3" v-for="item in items" :key="item.label">
        <router-link
          :to="item.route"          
          class="cursor-pointer mt-5"
        >
          <div class="!flex !flex-col justify-center items-center gap-2">
            <span :class="[item.route === route.path ? ' bg-[#eeeeee83] px-4 py-1 rounded-2xl' : '']" v-html="item.icon"></span>
            <p class="text-xs">{{ item.label }}</p>
          </div>
        </router-link>
      </div>
    </div>
    <div class="h-10">
      <div class="mt-3" v-if="items.length > 8 && !isAtBottom">
        <Arrowdown />
      </div>
    </div>
  </div>
</template>

<style scoped>
.overflow-y-auto {
  scrollbar-width: none; 
}

.overflow-y-auto::-webkit-scrollbar {
  display: none;
}
</style>
