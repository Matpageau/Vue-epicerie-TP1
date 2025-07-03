<script setup lang="ts">
import { computed } from 'vue';

const { cartAmount } = defineProps<{
  cartAmount: number
}>()

const emit = defineEmits<{
  (e: 'openCart'): void
}>()

const displayAmount = computed(() => cartAmount ?? 0)
</script>

<template>
  <button class="bg-[var(--blue)] w-[150px] h-[75px] rounded-bl-full hover:bg-[var(--blue-hover)] transition-colors cursor-pointer" @click="emit('openCart')">
    <div class="flex justify-center items-center w-full h-full pl-5">
      <div class="flex flex-col text-right justify-end items-end">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10 text-white justify-self-end">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>
        <span class="absolute text-white bg-red-500 p-2 rounded-full leading-1">{{ displayAmount }}</span>
      </div>
    </div>
  </button>
</template>