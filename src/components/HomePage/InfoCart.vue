<script setup></script>
<template>
  <div class="grid grid-cols-12 gap-10">
    <!-- task cart -->
    <div class="col-span-4 text-neutral-900 h-[30vh] bg-neutral-100 rounded-xl cursor-pointer shadow-lg shadow-neutral-300">
      <div class="flex gap-5 justify-center items-center h-full flex-col">
        <div class="flex w-[20vh] h-[20vh] relative">
          <svg class="w-full h-full" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M68.75 121.875H131.25" stroke="#1E1B78" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M125 78.125H131.25" stroke="#1E1B78" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M68.75 78.125H103.063" stroke="#1E1B78" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M68.75 34.375H131.25" stroke="#1E1B78" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M18.75 34.375L25 40.625L43.75 21.875" stroke="#1E1B78" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M18.75 78.125L25 84.375L43.75 65.625" stroke="#1E1B78" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M18.75 121.875L25 128.125L43.75 109.375" stroke="#1E1B78" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <div style="border-width: 0.2rem" class="left-[0.7vh] top-[0.7vh] absolute border-solid border-neutral-100 bg-red-600 w-[15%] h-[15%] rounded-full hidden"></div>
        </div>
        <p class="font-semibold">شما 0 وظیفه با تاخیر دارید</p>
      </div>
    </div>
    <!-- Chat cart -->
    <div class="col-span-4 text-neutral-900 h-[30vh] bg-neutral-100 rounded-xl cursor-pointer shadow-lg shadow-neutral-300">
      <div class="flex gap-5 justify-center h-full items-center flex-col">
        <div class="flex w-[20vh] h-[20vh] relative">
          <svg class="w-full h-full" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M93.3713 77.5813C93.3713 74.1295 96.1696 71.3313 99.6213 71.3313H99.6776C103.129 71.3313 105.928 74.1295 105.928 77.5813C105.928 81.0331 103.129 83.8313 99.6776 83.8313H99.6213C96.1696 83.8313 93.3713 81.0331 93.3713 77.5813Z"
              fill="#1E1B78" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M68.3149 77.5813C68.3149 74.1295 71.1132 71.3313 74.5649 71.3313H74.6212C78.073 71.3313 80.8712 74.1295 80.8712 77.5813C80.8712 81.0331 78.073 83.8313 74.6212 83.8313H74.5649C71.1132 83.8313 68.3149 81.0331 68.3149 77.5813Z"
              fill="#1E1B78" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M43.2588 77.5813C43.2588 74.1295 46.057 71.3313 49.5088 71.3313H49.565C53.0168 71.3313 55.815 74.1295 55.815 77.5813C55.815 81.0331 53.0168 83.8313 49.565 83.8313H49.5088C46.057 83.8313 43.2588 81.0331 43.2588 77.5813Z"
              fill="#1E1B78" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M115.879 34.1083C93.3266 11.5472 56.6812 11.5472 34.129 34.1083L34.128 34.1093C16.4662 51.7676 12.6307 77.9432 22.5435 99.3649C22.5768 99.4368 22.6083 99.5096 22.6379 99.5831C23.2139 101.014 23.201 102.636 23.175 103.554C23.1425 104.705 23.0151 106.033 22.8578 107.383C22.7091 108.659 22.5202 110.065 22.3283 111.494L22.2884 111.792C22.0805 113.341 21.8688 114.931 21.684 116.523C21.3092 119.753 21.0739 122.769 21.1786 125.181C21.2308 126.384 21.3622 127.274 21.53 127.885C21.5866 128.091 21.6384 128.232 21.6766 128.324C21.7678 128.362 21.9095 128.413 22.1152 128.47C22.726 128.638 23.6171 128.769 24.8194 128.821C27.2321 128.925 30.2479 128.69 33.4772 128.316C35.0695 128.131 36.6594 127.92 38.2082 127.712L38.5034 127.672C39.9333 127.481 41.3401 127.292 42.6168 127.143C43.9666 126.986 45.2936 126.859 46.4452 126.827C47.3626 126.801 48.9843 126.788 50.4152 127.364C50.4882 127.394 50.5606 127.425 50.632 127.458C72.0581 137.367 98.2235 133.536 115.879 115.873L115.879 115.872C138.434 93.3138 138.479 56.706 115.88 34.1091L115.879 34.1083ZM122.508 27.4796C96.2946 1.25651 53.7119 1.2568 27.4986 27.4805C7.09831 47.8776 2.59047 78.0301 13.8051 102.799C13.8085 102.909 13.81 103.069 13.8038 103.289C13.7831 104.019 13.6948 105.018 13.5458 106.298C13.407 107.489 13.2287 108.817 13.0331 110.274L12.9967 110.544C12.7893 112.09 12.5671 113.757 12.3715 115.443C11.9854 118.77 11.6739 122.397 11.8124 125.588C11.8818 127.187 12.0695 128.839 12.4903 130.37C12.9015 131.866 13.6289 133.593 15.0186 134.983L15.0208 134.985C16.4108 136.374 18.138 137.1 19.6333 137.51C21.1638 137.931 22.8145 138.118 24.4138 138.187C27.6041 138.325 31.2304 138.014 34.557 137.628C36.2426 137.433 37.909 137.211 39.4542 137.004L39.7225 136.968C41.1799 136.772 42.5087 136.594 43.7002 136.455C44.9792 136.307 45.9781 136.218 46.7086 136.198C46.9287 136.192 47.0892 136.193 47.1988 136.197C71.9699 147.406 102.113 142.905 122.509 122.501C148.719 96.2868 148.775 53.7431 122.508 27.4796Z"
              fill="#1E1B78" />
          </svg>
          <div style="border-width: 0.2rem" class="left-[1.5vh] top-[1.5vh] absolute border-solid border-neutral-100 bg-red-600 w-[15%] h-[15%] rounded-full"></div>
        </div>
        <p class="font-semibold">شما 3 گفتگوی مشاهده نشده دارین</p>
      </div>
    </div>
    <!-- Process cart -->
    <div class="col-span-4 text-neutral-900 h-[30vh] bg-neutral-100 rounded-xl cursor-pointer shadow-lg shadow-neutral-300">
      <div class="flex gap-5 justify-center h-full items-center flex-col">
        <div class="flex w-[20vh] h-[20vh] relative">
          <svg class="w-full h-full" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12.5 117.813V100.937C12.5 86.875 18.125 81.25 32.1875 81.25H49.0625C63.125 81.25 68.75 86.875 68.75 100.937V117.813C68.75 131.875 63.125 137.5 49.0625 137.5H32.1875"
              stroke="#1E1B78"
              stroke-width="10"
              stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M137.5 93.75C137.5 117.937 117.937 137.5 93.75 137.5L100.312 126.562" stroke="#1E1B78" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12.5 56.25C12.5 32.0625 32.0625 12.5 56.25 12.5L49.6875 23.4375" stroke="#1E1B78" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M109.375 68.75C124.908 68.75 137.5 56.158 137.5 40.625C137.5 25.092 124.908 12.5 109.375 12.5C93.842 12.5 81.25 25.092 81.25 40.625C81.25 56.158 93.842 68.75 109.375 68.75Z"
              stroke="#1E1B78"
              stroke-width="10"
              stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
          <!-- badg -->
          <div style="border-width: 0.2rem" class="left-[0.7vh] top-[0.7vh] absolute border-solid border-neutral-100 bg-red-600 w-[15%] h-[15%] rounded-full"></div>
        </div>
        <p class="font-semibold">شما 3 فرآیند برای اقدام دارید</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
