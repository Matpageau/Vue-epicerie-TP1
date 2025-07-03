<script setup lang="ts">
import type { ItemType } from '@/types/Item';
import AmountSelector from './AmountSelector/AmountSelector.vue';
import { computed, ref, watch } from 'vue';
import { useCartStore } from '@/stores/cartStore'

const { item, quantity } = defineProps<{
  item: ItemType
  quantity: number
}>()

const cartStore = useCartStore()

const localQuantity = ref(quantity)

watch(localQuantity, (newQty) => {
  cartStore.updateQuantity(item.id, newQty)
})

const totalPrice = computed(() => item.price * quantity)
</script>

<template>
  <div class="grid grid-cols-3 items-center w-full bg-white rounded-md p-2">
    <div>
      <h1>{{ item.name }}</h1>
      <p>{{ item.price }}$</p>
    </div>
    <div class="">
      <AmountSelector v-model="localQuantity"/>
    </div>
    <div class="flex items-center justify-self-end">
      <h1 class="h-fit">{{ totalPrice }}$</h1>
      <button class="cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </div>
</template>