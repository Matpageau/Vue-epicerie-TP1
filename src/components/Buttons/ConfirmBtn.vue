<script setup lang="ts">
const emit = defineEmits<{
  (e: "confirm"): void
}>()
</script>

<template>
  <button
    class="bg-[var(--green)] rounded font-bold px-2 cursor-pointer"
    @click="emit('confirm')"
  >
    Confirmer
  </button>
</template>