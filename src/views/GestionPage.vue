<script setup lang="ts">
import CardBoard from '../components/Card/CardBoard/CardBoard.vue';
import SearchBar from '@/components/SearchBar.vue';
import type { ItemType } from '@/types/Item';
import items from '@/data/items.json';
import { useSearchFilter } from '@/composable/SearchFilter';

const allItems = items as ItemType[];
const { search, filteredItems } = useSearchFilter(allItems);
const page = "admin";
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