import { create } from "zustand";

const useItemsStore = create((set) => ({
  items: [],
  setItems: (items) => set({ items }),
  selectedItems: [],
  setSelectedItems: (selectedItems) => {
    set({ selectedItems });
  },
  resetSelectedItems: () => set({ selectedItems: [] }),
}));

export default useItemsStore;
