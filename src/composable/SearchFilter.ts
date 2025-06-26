import { ref, computed } from 'vue';
import type { ItemType } from '@/types/Item';

export function useSearchFilter(items: ItemType[]) {
  const search = ref("");
  const filteredItems = computed(() => {
    return items.filter(item => item.name.toLowerCase().includes(search.value.toLowerCase()));
  });

  return {
    search,
    filteredItems
  };
}
