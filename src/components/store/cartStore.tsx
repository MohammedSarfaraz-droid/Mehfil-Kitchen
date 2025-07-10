import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface MenuItem {
    title: string;
    price: string;
    image: string;
    categories: string;
    description: string;
}

export interface CartItem extends MenuItem {
    id: string;
    quantity: number;
}

interface CartStore {
    items: CartItem[];
    addItem: (item: MenuItem) => void;
    removeItem: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
    getTotalPrice: () => number;
    getTotalItems: () => number;
}

export const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            items: [],
            
            addItem: (item: MenuItem) => {
                const items = get().items;
                const existingItem = items.find(cartItem => cartItem.title === item.title);
                
                if (existingItem) {
                    set({
                        items: items.map(cartItem =>
                            cartItem.title === item.title
                                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                                : cartItem
                        )
                    });
                } else {
                    const newItem: CartItem = {
                        ...item,
                        id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
                        quantity: 1
                    };
                    set({ items: [...items, newItem] });
                }
            },
            
            removeItem: (id: string) => {
                set({ items: get().items.filter(item => item.id !== id) });
            },
            
            updateQuantity: (id: string, quantity: number) => {
                if (quantity <= 0) {
                    get().removeItem(id);
                    return;
                }
                
                set({
                    items: get().items.map(item =>
                        item.id === id ? { ...item, quantity } : item
                    )
                });
            },
            
            clearCart: () => {
                set({ items: [] });
            },
            
            getTotalPrice: () => {
                return get().items.reduce((total, item) => {
                    return total + (parseFloat(item.price) * item.quantity);
                }, 0);
            },
            
            getTotalItems: () => {
                return get().items.reduce((total, item) => total + item.quantity, 0);
            }
        }),
        {
            name: 'cart-storage',
        }
    )
);