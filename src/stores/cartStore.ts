import type { CartItemType } from "@/types/CartItem";
import type { ItemType } from "@/types/Item";
import { defineStore } from "pinia";
import { computed, ref } from "vue";


export const useCartStore = defineStore('cartStore', () => {
  const items = ref<CartItemType[]>([])

  const addItemToCart = (item: ItemType, amount: number) => {
    const index = items.value.findIndex(it => it.item.id === item.id)    
    if (index == -1) {
      items.value.push({item, amount})
    } else {
      updateQuantity(item.id, items.value[index].amount += amount)
    }
  }

  const updateQuantity = (itemId: string, newQty: number) => {
    const index = items.value.findIndex(it => it.item.id == itemId)
    if(index > -1) {
      items.value[index].amount = newQty
    }
  }

  function deleteItem(item: ItemType) {
    const index = items.value.findIndex(itm => itm.item.id == item.id)
    if(index == -1) return

    items.value.splice(index, 1)
  }

  const totalAmount = computed(() =>
    items.value.reduce((acc, curr) => acc + curr.amount, 0)
  )

  return {
    items,
    addItemToCart,
    updateQuantity,
    deleteItem,
    totalAmount
  }
})