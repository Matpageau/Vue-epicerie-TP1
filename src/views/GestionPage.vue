<script setup lang="ts">
import CardBoard from '../components/Card/CardBoard/CardBoard.vue';
import SearchBar from '@/components/SearchBar.vue';
import type { ItemType } from '@/types/Item';
import items from '@/data/items.json';
import { useFilter } from '@/composable/SearchFilter';
import BaseModal from '../components/Modal/BaseModal.vue';
import ProductModal from '@/components/Modal/ProductModal.vue';
import CreateItemBtn from "@/components/Buttons/CreateItemBtn.vue"
import { ref } from 'vue';
import FilterButton from '@/components/Buttons/FilterBtn.vue';

const selectedCategories = ref<string[]>([]);
function toggleCategory(category: string) {
  const index = selectedCategories.value.indexOf(category);
  if (index > -1) {
    selectedCategories.value.splice(index, 1);
  } else {
    selectedCategories.value.push(category);
  }
}

const page = "admin";
const allItems = items as ItemType[];
const { search, filteredItems } = useFilter(allItems, selectedCategories);

const isModalOpen = ref(false)
const selectedItem = ref<ItemType | null>(null)

const openEditModal = (item: ItemType) => {
  selectedItem.value = item
  isModalOpen.value = true
}

const closeEditModal = () => {
  isModalOpen.value = false
}
</script>

<template>
  <BaseModal v-if="isModalOpen">
    <ProductModal 
      :item="selectedItem!"
      @cancel="closeEditModal"
    />
  </BaseModal>
  <div class="max-w-[1400px] mx-auto px-6 space-y-6">
    <div class="w-1/3">
      <SearchBar v-model="search" />
      <FilterButton category="fruits" @click="toggleCategory">Fruits</FilterButton>
      <FilterButton category="vegetables" @click="toggleCategory">Légumes</FilterButton>
      <FilterButton category="meat" @click="toggleCategory">Viande</FilterButton>
    </div>
    <CreateItemBtn />
    <CardBoard :page="page" :items="filteredItems" @edit="openEditModal"/>
  </div>
</template>