<script setup lang="ts">
import { ref } from 'vue';

const amount = ref(1)

const add = () => {
  amount.value ++
}

const sub = () => {
  if(amount.value > 1) amount.value --
}
</script>

<template>
  <div class="flex justify-between">
    <button
      class="cursor-pointer"
      @click="sub"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
      </svg>

    </button>
    <input
      type="text"
      v-model="amount"
      class="border p-1 w-[50px] text-center border-none"
    />
    <button 
      class="cursor-pointer"
      @click="add"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>

    </button>
  </div>
</template>