<script setup lang="ts">
import { ref } from 'vue';

const isSelected = ref(false);
const props = defineProps<{
    category: string;
}>();
const emit = defineEmits<{
    (e: 'click', category: string): void;
}>()
const handleClick = () => {
    isSelected.value = !isSelected.value
    emit('click', props.category);
}
</script>

<template>
    <button :class="['border rounded-full px-4 py-1.5 cursor-pointer shadow-lg', {'border-[var(--buff)]' : isSelected}]" @click="handleClick">
        <slot></slot>
    </button>
</template>