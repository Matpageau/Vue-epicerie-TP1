<script setup lang="ts">
import CardBoard from '../components/Card/CardBoard/CardBoard.vue';
import BaseModal from '../components/Modal/BaseModal.vue';

const page = "client"
</script>
<template>
    <!-- <BaseModal /> -->
    <div class="flex justify-center">
      <CardBoard
      :page="page"
      />
    </div>
</template>