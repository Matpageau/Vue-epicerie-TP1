<script setup lang="ts">
import { ref, watch } from 'vue';


const props = defineProps<{
  modelValue: number
}>()

const emit = defineEmits<{
  (e: "update:modelValue", amount: number): void
}>()

const localAmount = ref(props.modelValue)

watch(() => props.modelValue, (val) => {
  localAmount.value = val
})

watch(localAmount, (newVal) => {
  const parsed = parseInt(newVal.toString())
  if (!isNaN(parsed) && parsed > 0) {
    emit('update:modelValue', parsed)
  }
})

const add = () => {
  localAmount.value ++
  emit('update:modelValue', localAmount.value)
}

const sub = () => {
  if(localAmount.value > 1) {
    localAmount.value --
    emit('update:modelValue', localAmount.value)
  }
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
      type="number"
      min="1"
      v-model="localAmount"
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