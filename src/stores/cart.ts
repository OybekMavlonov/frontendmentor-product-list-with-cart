import { defineStore } from 'pinia'
import {ref, computed} from "vue"

export const useCartStore = defineStore("cart", () => {
    const items = ref<any[]>([]);

    const isEmpty = computed(() => items.value.length === 0);

    const removeItem = (name: string) => {
        items.value = items.value.filter((item) => item.product.name !== name);
    };

    const incrementQuantity = (name: string) => {
        items.value = items.value.map((item) => {
            if (item.product.name === name) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
    };

    const decrementQuantity = (name: string) => {
        const item = items.value.find((item) => item.product.name === name);
        if (item.quantity === 1) {
            removeItem(name);
            return;
        }

        items.value = items.value.map((item) => {
            if (item.product.name === name) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });
    };

    const addToCart = (product: any) => {
        items.value.push({
            product,
            quantity: 1,
        });
    };

    const getItemByName = (name: string) => {
        return items.value.find((item) => item.product.name === name);
    };

    const totalPrice = computed(() => items.value.reduce((total, item) => total + item.product.price * item.quantity, 0));

    const totalItems = computed(() => items.value.reduce((total, item) => total + item.quantity, 0));

    return {
        items,
        isEmpty,
        removeItem,
        totalPrice,
        totalItems,
        incrementQuantity,
        decrementQuantity,
        addToCart,
        getItemByName,
    };
});
