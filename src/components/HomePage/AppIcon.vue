<template>
  <div class="card flex justify-center">
    <SplitButton label="Save" :model="items" />
  </div>
</template>

<script setup>
const items = [
  {
    label: 'Update',
  },
  {
    label: 'Delete',
  },
  {
    separator: true,
  },
  {
    label: 'Quit',
  },
]
</script>
