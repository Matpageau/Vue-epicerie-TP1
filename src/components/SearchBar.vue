<script setup lang="ts">
const modelValue = defineModel<string>()
</script>
<template>
    <div class="relative">
        <span class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg class="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 6.65a7.5 7.5 0 010 10.6z" />
            </svg>
        </span>
        <input type="text" placeholder="Rechercher..." class="w-full border border-color: #999999 rounded-2xl pl-10 pt-2 pb-2 text-lg shadow-lg" v-model="modelValue" />
    </div>
</template>