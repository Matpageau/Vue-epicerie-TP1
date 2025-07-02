<script setup lang="ts">
import CardBoard from '../components/Card/CardBoard/CardBoard.vue';
import SearchBar from '@/components/SearchBar.vue';
import type { ItemType } from '@/types/Item';
import { useItemStore } from "@/stores/itemStore"
import { storeToRefs } from 'pinia';
import { useFilter } from '@/composable/SearchFilter';
import BaseModal from '../components/Modal/BaseModal.vue';
import ProductModal from '@/components/Modal/ProductModal.vue';
import CreateItemBtn from "@/components/Buttons/CreateItemBtn.vue"
import { ref } from 'vue';
import FilterButton from '@/components/Buttons/FilterBtn.vue';
import DeleteModal from '@/components/Modal/DeleteModal.vue';

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
const itemStore = useItemStore()
const { items } = storeToRefs(itemStore)
const { addOrUpdateItem, deleteItem } = itemStore
const { search, filteredItems, selectedStockFilters, toggleStockFilter } = useFilter(items.value, selectedCategories);

const isProductModalOpen = ref(false)
const isDeleteModalOpen = ref(false)
const selectedItem = ref<ItemType | null>(null)

const openEditModal = (item?: ItemType) => {
  if(item) {
    selectedItem.value = item
  }
  isProductModalOpen.value = true
}

const closeEditModal = () => {
  isProductModalOpen.value = false
  selectedItem.value = null
}

const openDeleteModal = (item: ItemType) => {
  selectedItem.value = item
  isDeleteModalOpen.value = true
}

const closeDeleteModal = () => {
  isDeleteModalOpen.value = false
}

const confirmDelete = () => {
  if (selectedItem.value) {
    console.log(selectedItem.value)
    deleteItem(selectedItem.value)
    selectedItem.value = null
  }
  closeDeleteModal()
}

const saveItem = (item: ItemType) => {
  addOrUpdateItem(item)
  closeEditModal()
}

</script>

<template>
  <BaseModal v-if="isProductModalOpen">
    <ProductModal 
      :item="selectedItem!"
      @cancel="closeEditModal"
      @confirm="saveItem"
    />
  </BaseModal>
  <BaseModal v-if="isDeleteModalOpen">
    <DeleteModal 
      @cancel="closeDeleteModal"
      @confirm="confirmDelete"
    />
  </BaseModal>
  <div class="max-w-[1400px] mx-auto px-6 space-y-6">
    <div class="flex items-center justify-between">
      <SearchBar v-model="search" class="w-1/3" />
        <div class="flex space-x-2">
          <FilterButton category="fruits" :force-selected="selectedCategories.includes('fruits')" @click="toggleCategory">Fruits</FilterButton>
          <FilterButton category="vegetables" :force-selected="selectedCategories.includes('vegetables')" @click="toggleCategory">Légumes</FilterButton>
          <FilterButton category="meat" :force-selected="selectedCategories.includes('meat')" @click="toggleCategory">Viande</FilterButton>
          <FilterButton category="asc" :force-selected="selectedStockFilters === 'asc'" @click="toggleStockFilter">Stock: ASC</FilterButton>
          <FilterButton category="desc" :force-selected="selectedStockFilters === 'desc'" @click="toggleStockFilter">Stock: DESC</FilterButton>
      </div>
    </div>
    <CreateItemBtn @create="openEditModal"/>
    <CardBoard :page="page" :items="filteredItems" @edit="openEditModal" @delete="openDeleteModal" />
  </div>
</template>