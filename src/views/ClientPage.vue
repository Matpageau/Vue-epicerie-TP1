<script setup lang="ts">
import SearchBar from '@/components/SearchBar.vue';
import CardBoard from '../components/Card/CardBoard/CardBoard.vue';
import BaseModal from '../components/Modal/BaseModal.vue';
import items from '@/data/items.json';
import type { ItemType } from '@/types/Item';
import { useFilter } from '@/composable/SearchFilter';
import FilterButton from '@/components/Buttons/FilterBtn.vue';
import { ref } from 'vue';

const selectedCategories = ref<string[]>([]);

function toggleCategory(category: string) {
  const index = selectedCategories.value.indexOf(category);
  if (index > -1) {
    selectedCategories.value.splice(index, 1);
  } else {
    selectedCategories.value.push(category);
  }
}

const page = "client"
const allItems = items as ItemType[];
const { search, filteredItems } = useFilter(allItems, selectedCategories);

</script>
<template>
  <!-- <BaseModal>
    
  </BaseModal> -->
  <div class="max-w-[1400px] mx-auto px-6 space-y-6">
    <div class="flex items-center justify-between">
      <SearchBar v-model="search" class="w-1/3"/>
      <div class="flex space-x-2">
        <FilterButton category="fruits" @click="toggleCategory">Fruits</FilterButton>
        <FilterButton category="vegetables" @click="toggleCategory">Légumes</FilterButton>
        <FilterButton category="meat" @click="toggleCategory">Viande</FilterButton>
      </div>
    </div>
    <CardBoard :page="page" :items="filteredItems" />
  </div>
</template>