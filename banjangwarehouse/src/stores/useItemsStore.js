import { create } from "zustand";

const useItemsStore = create((set) => ({
  items: [],
  setItems: (items) => set({ items }),
}));

export default useItemsStore;
