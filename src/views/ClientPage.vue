<script setup lang="ts">
import SearchBar from '@/components/SearchBar.vue';
import CardBoard from '../components/Card/CardBoard/CardBoard.vue';
import { useSearchFilter } from '@/composable/SearchFilter';
import { useItemStore } from '@/stores/itemStore';
import { storeToRefs } from 'pinia';

const itemStore = useItemStore()
const { items } = storeToRefs(itemStore)
const { search, filteredItems } = useSearchFilter(items.value);
const page = "client"


</script>
<template>
  <!-- <BaseModal>
    
  </BaseModal> -->
  <div class="max-w-[1400px] mx-auto px-6 space-y-6">
    <div class="w-1/3">
      <SearchBar v-model="search"/>
    </div>
    <CardBoard :page="page" :items="filteredItems" />
  </div>
</template>