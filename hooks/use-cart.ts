import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { CartItem, Product } from "@/types";
import toast from "react-hot-toast";

interface CartStore {
  items: CartItem[]; 
  addItem: (product: Product) => void;
  removeItem: (id: string) => void;
  updateItemQuantity: (id: string, newQuantity: number) => void; 
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (product: Product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.product.id === product.id);

        if (existingItem) {
          const newQuantity = existingItem.quantity + 1;

          if (newQuantity > product.quantity) { // Check against product's stock quantity
            toast.error("Not enough stock available.");
            return;
          }

          set({
            items: currentItems.map((item) =>
              item.product.id === product.id ? { ...item, quantity: newQuantity } : item
            ),
          });
          toast.success("Item quantity increased.");
        } else {
          set({ items: [...get().items, { product, quantity: 1 }] });
          toast.success("Item added to cart.");
        }
      },
      removeItem: (id: string) => {
        set({ items: get().items.filter((item) => item.product.id !== id) });
        toast.success("Item removed from cart.");
      },
      updateItemQuantity: (id: string, newQuantity: number) => {
        const productToUpdate = get().items.find((item) => item.product.id === id);

        if (!productToUpdate) return; // Handle case where product is not found

        if (newQuantity <= 0) {
          return get().removeItem(id);
        } else if (newQuantity > productToUpdate.product.quantity) { // Stock check
          toast.error("Not enough stock available.");
          return;
        }

        set({
          items: get().items.map((item) =>
            item.product.id === id ? { ...item, quantity: newQuantity } : item
          ),
        });
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
