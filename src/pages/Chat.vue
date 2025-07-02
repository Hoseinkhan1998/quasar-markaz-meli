<script setup></script>
<template>
  <div class="grid grid-cols-12 gap-3">
    <!-- first content -->
    <div class="col-span-4">
      <!-- search input -->
      <div class="flex flex-col gap-3">
        <div class="bg-neutral-100 rounded-t-xl p-2 !flex items-center justify-between">
          <input
            type="text"
            class="w-full bg-transparent outline-none text-xs"
            placeholder="جستجو پیام ها, مخاطبین یا گروه‌ها..."
          />
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
      <!-- select chat -->
    </div>
  </div>
</template>

<style scoped></style>
