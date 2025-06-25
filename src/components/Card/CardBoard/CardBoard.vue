<script setup lang="ts">
import ItemCard from '../ItemCard.vue';
import items from '@/data/items.json'

const { page } = defineProps<{
  page: "client" | "admin"
}>()

</script>

<template>
  <div class="grid grid-cols-5 gap-5 w-fit">
    <ItemCard 
      v-for="(card, index) in items"
      :key="index"
      :card="card"
      :page="page"
    />
  </div>
</template>