import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Product } from '@prisma/client'; // Беремо тип прямо з твоєї бази!

// Ми розширюємо тип Product, додаючи до нього кількість (quantity)
export interface CartItem extends Product {
    quantity: number;
}

interface CartState {
    items: CartItem[];
    addItem: (product: Product) => void;
    removeItem: (productId: string) => void;
    updateQuantity: (productId: string, action: 'increase' | 'decrease') => void;
    clearCart: () => void;
}

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            items: [],

            // Функція додавання товару
            addItem: (product) => {
                const currentItems = get().items;
                const existingItem = currentItems.find((item) => item.id === product.id);

                if (existingItem) {
                    // Якщо товар вже є в кошику — збільшуємо кількість на +1
                    set({
                        items: currentItems.map((item) =>
                            item.id === product.id
                                ? { ...item, quantity: item.quantity + 1 }
                                : item
                        ),
                    });
                } else {
                    // Якщо товару немає — додаємо його з quantity: 1
                    set({ items: [...currentItems, { ...product, quantity: 1 }] });
                }
            },

            // Видалення товару повністю
            removeItem: (productId) => {
                set({ items: get().items.filter((item) => item.id !== productId) });
            },

            // Зміна кількості (+/-)
            updateQuantity: (productId, action) => {
                set({
                    items: get().items.map((item) => {
                        if (item.id === productId) {
                            if (action === 'increase') return { ...item, quantity: item.quantity + 1 };
                            if (action === 'decrease') return { ...item, quantity: Math.max(1, item.quantity - 1) };
                        }
                        return item;
                    }),
                });
            },

            // Очищення кошика (наприклад, після покупки)
            clearCart: () => set({ items: [] }),
        }),
        {
            name: 'shopping-cart-storage', // Унікальне ім'я ключа в LocalStorage
            storage: createJSONStorage(() => localStorage), // Явно вказуємо використовувати localStorage
        }
    )
);