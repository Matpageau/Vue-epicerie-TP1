<script setup lang="ts">
defineProps<{
    message: string;
}>();
</script>
<template>
    <div class='text-white p-4 rounded-lg shadow-md text-center font-bold text-xl bg-[var(--green)]'>
        <p>{{ message }}</p>
    </div>
</template>