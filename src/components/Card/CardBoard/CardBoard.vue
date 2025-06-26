<script setup lang="ts">
import ItemCard from '../ItemCard.vue';
import type { ItemType } from '@/types/Item';

const { page } = defineProps<{
  items: ItemType[]
  page: "client" | "admin"
}>()

const emit = defineEmits<{
  (e: "edit", item: ItemType): void
}>()

</script>

<template>
  <div class="grid grid-cols-5 gap-5">
    <ItemCard 
      v-for="(card, index) in items"
      :key="index"
      :card="card"
      :page="page"
      @edit="emit('edit', $event)"
    />
  </div>
</template>