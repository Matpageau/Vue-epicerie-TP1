<script setup lang="ts">
import { ref, computed } from 'vue';

const isSelectedLocal = ref(false);

const props = defineProps<{
    category: string;
    forceSelected?: boolean;
}>();

const emit = defineEmits<{
    (e: 'click', category: string): void;
}>()

const isSelected = computed(() => {
    if (props.forceSelected !== undefined) {
        return props.forceSelected;
    }
    return isSelectedLocal.value;
});

const handleClick = () => {
    if (!props.forceSelected) {
        isSelectedLocal.value = !isSelectedLocal.value;
    }
    emit('click', props.category);
}
</script>

<template>
    <button :class="['border rounded-full px-4 py-1.5 cursor-pointer shadow-lg', {'border-[var(--buff)]' : isSelected}]" @click="handleClick">
        <slot></slot>
    </button>
</template>