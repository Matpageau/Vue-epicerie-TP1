<script setup lang="ts">
import SearchBar from './components/SearchBar.vue';
import NavBar from './components/NavBar.vue';
</script>

<template>
  <NavBar />
  <main>
    <RouterView />
  </main>
</template>
