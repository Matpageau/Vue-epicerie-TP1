<script setup lang="ts">
import SearchBar from '@/components/SearchBar.vue';
import CardBoard from '../components/Card/CardBoard/CardBoard.vue';
import { useFilter } from '@/composable/SearchFilter';
import { useItemStore } from '@/stores/itemStore';
import { useCartStore } from '@/stores/cartStore';
import { storeToRefs } from 'pinia';
import FilterButton from '@/components/Buttons/FilterBtn.vue';
import { ref } from 'vue';
import CartBtn from '@/components/Buttons/CartBtn.vue';
import BaseModal from '@/components/Modal/BaseModal.vue';
import ShoppingCartModal from '@/components/Modal/ShoppingCartModal.vue';
import ConfirmationBanner from '@/components/Banner/ConfirmationBanner.vue';

const selectedCategories = ref<string[]>([]);
const page = "client"
const itemStore = useItemStore()
const cartStore = useCartStore()
const { items } = storeToRefs(itemStore)
const { totalAmount } = storeToRefs(cartStore)
const { search, filteredItems } = useFilter(items.value, selectedCategories);
const isCartModalOpen = ref(false)
const isPaymentBannerVisible = ref(false)

function toggleCategory(category: string) {
  const index = selectedCategories.value.indexOf(category);
  if (index > -1) {
    selectedCategories.value.splice(index, 1);
  } else {
    selectedCategories.value.push(category);
  }
}

const openCartModal = () => {
  isCartModalOpen.value = true
}

const closeEditModal = () => {
  isCartModalOpen.value = false
}

function showPaymentBanner() {
  isPaymentBannerVisible.value = true;
  setTimeout(() => {
    isPaymentBannerVisible.value = false;
  }, 5000);
}

function handlePaymentSuccess() {
  closeEditModal();
  showPaymentBanner();
}
</script>

<template>
  <BaseModal v-if="isCartModalOpen">
    <ShoppingCartModal @payment-success="handlePaymentSuccess"/>
  </BaseModal>
  <div class="max-w-[1400px] mx-auto px-6 space-y-6">
    <div class="absolute top-0 right-0">
      <CartBtn @open-cart="openCartModal" :cart-amount="totalAmount"/>
    </div>
    <div class="flex items-center justify-between">
      <SearchBar v-model="search" class="w-1/3"/>
      <div class="flex space-x-2">
          <FilterButton category="fruit" :force-selected="selectedCategories.includes('fruit')" @click="toggleCategory">Fruits</FilterButton>
          <FilterButton category="vegetable" :force-selected="selectedCategories.includes('vegetable')" @click="toggleCategory">Légumes</FilterButton>
          <FilterButton category="meat" :force-selected="selectedCategories.includes('meat')" @click="toggleCategory">Viande</FilterButton>
      </div>
    </div>
    <ConfirmationBanner v-if="isPaymentBannerVisible" message="Commande effectuez avec succès !"/>
    <CardBoard :page="page" :items="filteredItems" />
  </div>
</template>