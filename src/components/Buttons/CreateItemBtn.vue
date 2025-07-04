<script setup lang="ts">
const emit = defineEmits<{
  (e: "create"): void
}>()
</script>

<template>
  <button
    class="bg-[var(--green)] rounded font-bold px-2 cursor-pointer hover:bg-[var(--green-hover)] transition-colors"
    @click="emit('create')"
  >
    Ajouter un produit
  </button>
</template>