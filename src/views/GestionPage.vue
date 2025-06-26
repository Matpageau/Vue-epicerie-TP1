<script setup lang="ts">
import CardBoard from '../components/Card/CardBoard/CardBoard.vue';
import SearchBar from '@/components/SearchBar.vue';
import type { ItemType } from '@/types/Item';
import items from '@/data/items.json';
import { useSearchFilter } from '@/composable/SearchFilter';
import BaseModal from '../components/Modal/BaseModal.vue';
import ProductModal from '@/components/Modal/ProductModal.vue';
import CreateItemBtn from "@/components/Buttons/CreateItemBtn.vue"
import { ref } from 'vue';

const allItems = items as ItemType[];
const { search, filteredItems } = useSearchFilter(allItems);
const page = "admin";

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
    </div>
    <CreateItemBtn />
    <CardBoard :page="page" :items="filteredItems" @edit="openEditModal"/>
  </div>
</template>