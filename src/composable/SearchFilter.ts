import { ref, computed, type Ref } from 'vue';
import type { ItemType } from '@/types/Item';

export function useFilter(items: ItemType[], selectedCategories: Ref<string[]>) {
  const search = ref("");
  const filteredItems = computed(() => {
    return items.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(search.value.toLowerCase());
      const matchesCategory = selectedCategories.value.length === 0 || selectedCategories.value.includes(item.category);
      return matchesSearch && matchesCategory;
    });
  });

  return {
    search,
    filteredItems
  };
}
