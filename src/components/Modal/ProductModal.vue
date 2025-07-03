<script setup lang="ts">
import type { ItemType } from '@/types/Item';
import CancellBtn from '../Buttons/CancellBtn.vue';
import ConfirmBtn from '../Buttons/ConfirmBtn.vue'
import { ref } from 'vue';
import { watch } from 'vue';

const { item } = defineProps<{
  item: ItemType | null;
}>();

const emit = defineEmits<{
  (e: "cancel"): void
  (e: "confirm", updatedItem: ItemType): void
}>()

const id = ref(item?.id ?? crypto.randomUUID())
const name = ref(item?.name ?? "")
const price = ref(item?.price ?? 0)
const stock = ref(item?.stock ?? 0)
const category = ref(item?.category ?? "")

watch(() => item, (newItem) => {
  name.value = newItem?.name ?? ''
  price.value = newItem?.price ?? 0
  stock.value = newItem?.stock ?? 0
  category.value = newItem?.category ?? ''
}, { immediate: true })

const saveProduct = () => {
  if (!name.value || !category.value || price.value === null || stock.value === null) {
    return
  }

  emit("confirm", {
    id: id.value,
    name: name.value,
    price: price.value,
    stock: stock.value,
    category: category.value
  })
}
</script>

<template>
  <div class="flex flex-col mb-5 px-15">
    <h1 class="text-white font-bold text-xl mb-7">Produit</h1>
    <label for="name" class="block text-white">Nom</label>
    <input 
      id="name"
      name="nom"
      type="text"
      v-model="name"
      class="bg-neutral-300 rounded p-1 focus:outline-none focus:ring-2 focus:ring-white"
    />
    <label for="prix" class="block text-white mt-2">Prix</label>
    <input 
      id="prix"
      name="prix"
      type="number"
      v-model="price"
      min="0"
      class="bg-neutral-300 rounded p-1 focus:outline-none focus:ring-2 focus:ring-white"
    />
    <label for="category" class="block text-white mt-2">Catégorie</label>
    <select v-model="category" id="category" class="bg-neutral-300 rounded p-1 focus:outline-none focus:ring-2 focus:ring-white">
      <option hidden value=""></option>
      <option value="fruit">Fruit</option>
      <option value="vegetable">Légume</option>
      <option value="meat">Viande</option>
    </select>
    <label for="stock" class="block text-white mt-2">Stock</label>
    <input 
      id="stock"
      name="stock"
      type="number"
      v-model="stock"
      min="0"
      class="bg-neutral-300 rounded p-1 focus:outline-none focus:ring-2 focus:ring-white"
    />
  </div>
  <div class="flex justify-end gap-2">
    <CancellBtn @cancel="emit('cancel')"/>
    <ConfirmBtn @confirm="saveProduct"/>
  </div>
</template>