<script setup></script>
<template>
  <div class="flex flex-col justify-center items-center">
    <div class="text-neutral-100 opacity-55 animate-arrow animation-delay-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6 rotate-180"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
      </svg>
    </div>
    <div class="text-neutral-100 opacity-75 -mt-4 animate-arrow animation-delay-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-5 rotate-180"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
      </svg>
    </div>
    <div class="text-neutral-100 -mt-3 animate-arrow animation-delay-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-4 rotate-180"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
      </svg>
    </div>
  </div>
</template>

<style scoped>
@keyframes arrowBlink {
  0% {
    opacity: 0;
    transform: translateY(2px);
  }
  30% {
    opacity: 1;
    transform: translateY(0);
  }
  60% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-2px);
  }
}

.animate-arrow {
  animation: arrowBlink 1.5s infinite ease-in-out;
}

/* ایجاد تاخیر زمانی برای ترتیب ظاهر شدن */
.animation-delay-0 {
  animation-delay: 0s;
}

.animation-delay-1 {
  animation-delay: 0.2s;
}

.animation-delay-2 {
  animation-delay: 0.4s;
}
</style>
