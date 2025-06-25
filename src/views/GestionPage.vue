<script setup lang="ts">
import CardBoard from '../components/Card/CardBoard/CardBoard.vue';
const page = "admin";
</script>
<template>
    <div class="flex justify-center">
      <CardBoard
      :page="page"
      />
    </div>
</template>