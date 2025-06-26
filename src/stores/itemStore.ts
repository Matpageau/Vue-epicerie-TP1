import { defineStore } from "pinia";
import itemsRaw from '@/data/items.json'
import type { ItemType } from "@/types/Item";
import { ref } from "vue";

export const useItemStore = defineStore('itemStore', () => {
  const items = ref<ItemType[]>([...itemsRaw])

  const getById = (id: string) => items.value.find(item => item.id === id)

  const addOrUpdateItem = (item: ItemType) => {
    const index = items.value.findIndex(it => it.id === item.id)
    if (index == -1) {
      const newItem = createEmptyItem(item)
      items.value.push(newItem)
    } else {
      items.value[index] = item
    }
  }

  function createEmptyItem(item: ItemType): ItemType {
    return {
      id: crypto.randomUUID(),
      name: item.name ?? "",
      price: item.price ?? 0,
      category: item.category,
      stock: item.stock ?? 0
    }
  }

  function deleteItem(item: ItemType) {
    const index = items.value.findIndex(itm => itm.id == item.id)
    if(index == -1) return

    items.value.splice(index, 1)
  }

  return {
    items,
    getById,
    addOrUpdateItem,
    deleteItem
  }
})