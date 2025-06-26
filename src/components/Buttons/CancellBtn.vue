<script setup lang="ts">
const emit = defineEmits<{
  (e: "cancel"): void
}>()
</script>

<template>
  <button
    class="bg-neutral-200 rounded font-bold px-2 cursor-pointer"
    @click="emit('cancel')"
  >
    Annuler
  </button>
</template>