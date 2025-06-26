<script setup lang="ts">
import SearchBar from '@/components/SearchBar.vue';
import CardBoard from '../components/Card/CardBoard/CardBoard.vue';
import BaseModal from '../components/Modal/BaseModal.vue';
import items from '@/data/items.json';
import type { ItemType } from '@/types/Item';
import { useSearchFilter } from '@/composable/SearchFilter';

const allItems = items as ItemType[];
const { search, filteredItems } = useSearchFilter(allItems);
const page = "client"
</script>
<template>
  <div class="max-w-[1400px] mx-auto px-6 space-y-6">
    <div class="w-1/3">
      <SearchBar v-model="search" />
    </div>

    <!-- <BaseModal /> -->

    <CardBoard :page="page" :items="filteredItems" />
  </div>
</template>