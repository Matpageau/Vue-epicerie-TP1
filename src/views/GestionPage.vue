<script setup lang="ts">
import CardBoard from '../components/Card/CardBoard/CardBoard.vue';
import SearchBar from '@/components/SearchBar.vue';
import type { ItemType } from '@/types/Item';
import { useItemStore } from "@/stores/itemStore"
import { storeToRefs } from 'pinia';
import { useSearchFilter } from '@/composable/SearchFilter';
import BaseModal from '../components/Modal/BaseModal.vue';
import ProductModal from '@/components/Modal/ProductModal.vue';
import CreateItemBtn from "@/components/Buttons/CreateItemBtn.vue"
import { ref } from 'vue';

const itemStore = useItemStore()
const { items } = storeToRefs(itemStore)
const { addOrUpdateItem, deleteItem } = itemStore
const { search, filteredItems } = useSearchFilter(items.value);
const page = "admin";

const isModalOpen = ref(false)
const selectedItem = ref<ItemType | null>(null)

const openEditModal = (item?: ItemType) => {
  if(item) {
    selectedItem.value = item
  }
  isModalOpen.value = true
}

const closeEditModal = () => {
  isModalOpen.value = false
  selectedItem.value = null
}

const saveItem = (item: ItemType) => {
  addOrUpdateItem(item)
  closeEditModal()
}
</script>

<template>
  <BaseModal v-if="isModalOpen">
    <ProductModal 
      :item="selectedItem!"
      @cancel="closeEditModal"
      @confirm="saveItem"
    />
  </BaseModal>
  <div class="max-w-[1400px] mx-auto px-6 space-y-6">
    <div class="w-1/3">
      <SearchBar v-model="search" />
    </div>
    <CreateItemBtn @create="openEditModal"/>
    <CardBoard :page="page" :items="filteredItems" @edit="openEditModal" @delete="deleteItem"/>
  </div>
</template>