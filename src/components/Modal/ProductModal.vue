<script setup lang="ts">
import type { ItemType } from '@/types/Item';
import CancellBtn from '../Buttons/CancellBtn.vue';
import ConfirmBtn from '../Buttons/ConfirmBtn.vue'
import { ref } from 'vue';

const { item } = defineProps<{
  item: ItemType;
}>();

const emit = defineEmits<{
  (e: "cancel"): void
}>()

const name = ref(item.name)
const price = ref(item.price)
const stock = ref(item.stock)
const category = ref(item.category)
</script>

<template>
  <div>
    <div class="flex flex-col mb-5 px-15">
      <h1 class="text-white font-bold text-xl mb-7">Produit</h1>
      <label for="name" class="block text-white">Nom</label>
      <input 
        id="name"
        name="nom"
        type="text"
        v-model="name"
        class="bg-neutral-800 rounded text-white p-1 focus:outline-none focus:ring-2 focus:ring-white"
      />
      <label for="prix" class="block text-white mt-2">Prix</label>
      <input 
        id="prix"
        name="prix"
        type="number"
        v-model="price"
        min="0"
        class="bg-neutral-800 rounded text-white p-1 focus:outline-none focus:ring-2 focus:ring-white"
      />
      <label for="category" class="block text-white mt-2">Catégorie</label>
      <select v-model="category" id="category" class="bg-neutral-800 rounded text-white p-1 focus:outline-none focus:ring-2 focus:ring-white">
        <option hidden value=""></option>
        <option value="fruit">Fruit</option>
        <option value="legume">Légume</option>
        <option value="viande">Viande</option>
      </select>
      <label for="stock" class="block text-white mt-2">Stock</label>
      <input 
        id="stock"
        name="stock"
        type="number"
        v-model="stock"
        min="0"
        class="bg-neutral-800 rounded text-white p-1 focus:outline-none focus:ring-2 focus:ring-white"
      />
    </div>
    <div class="flex justify-end gap-2">
      <CancellBtn @cancel="emit('cancel')"/>
      <ConfirmBtn />
    </div>
  </div>
</template>