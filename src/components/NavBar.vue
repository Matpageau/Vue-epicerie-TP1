<script setup lang="ts"> 
import { RouterLink, useRoute } from 'vue-router';

const route = useRoute();

</script>
<template>
    <div class="flex w-full justify-center mt-2 mb-2">
        <RouterLink to="/" :class="['text-lg font-medium px-2 py-1 rounded-full transition-all duration-300 ease-in-out', { 'bg-[#012A36] text-white': route.path === '/' }]">Client</RouterLink>
        <RouterLink to="/gestion" :class="['text-lg font-medium px-2 py-1 rounded-full transition-all duration-300 ease-in-out', { 'bg-[#012a36] text-white': route.path === '/gestion' }]">Gestion</RouterLink>
    </div>
</template>