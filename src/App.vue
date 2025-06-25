<script setup lang="ts">
import CardBoard from './components/Card/CardBoard/CardBoard.vue';
import BaseModal from './components/Modal/BaseModal.vue';

const page = "admin"
</script>

<template>
  <main>
    <BaseModal />
    <div class="flex justify-center">
      <CardBoard
      :page="page"
      />
    </div>
  </main>
</template>
