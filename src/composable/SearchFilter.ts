import { ref, computed, type Ref } from 'vue';
import type { ItemType } from '@/types/Item';

export function useFilter(items: ItemType[], selectedCategories: Ref<string[]>) {
  const search = ref("");
  const selectedStockFilters = ref<string | null>(null);
  const filteredItems = computed(() => {
    let result =  items.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(search.value.toLowerCase());
      const matchesCategory = selectedCategories.value.length === 0 || selectedCategories.value.includes(item.category);
      return matchesSearch && matchesCategory;
    });

    if (selectedStockFilters.value === 'asc') {
      result = [...result].sort((a, b) => a.stock - b.stock);
    } else if (selectedStockFilters.value === 'desc') {
      result = [...result].sort((a, b) => b.stock - a.stock);
    }
    
    return result;
  });

  function toggleStockFilter(order: string) {
    selectedStockFilters.value = selectedStockFilters.value === order ? null : order;
  }

  return {
    search,
    filteredItems,
    selectedStockFilters,
    toggleStockFilter
  };
}
