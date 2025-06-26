<script setup lang="ts">
</script>

<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center">
    <div class="absolute inset-0 bg-black/50"></div>
    <div class="relative bg-[var(--blue)] h-fit w-fit p-5 rounded-lg">
      <slot />
    </div>
  </div>
</template>