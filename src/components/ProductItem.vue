<script setup lang="ts">
import {computed} from "vue"
import { useCartStore } from '../stores/cart'
import AddToCartButton from "./AddToCartButton.vue"

const props = defineProps(["product"])

const cartStore = useCartStore()

const cartItem = computed(() => cartStore.getItemByName(props.product.name));

  const imagePath = computed(() => {
    return function (arg:string): string {
      const imageUrl = new URL(arg, import.meta.url)
          .href

      return imageUrl
    }
  })

// const imageUrl = computed(() => {
//   return `${import.meta.env.BASE_URL}images/${props.product.image.desktop}.svg`;
// });
</script>

<template>
  <div>
    <div class="relative mb-8 inline-block">
      <picture>
        <source :srcset="imagePath(product.image.desktop)" media="(min-width: 1024px)"/>
        <source :srcset="imagePath(product.image.tablet)" media="(min-width: 768px)"/>
        <img
            :src="imagePath(product.image.mobile)"
            :alt="product.name"
            class="w-full h-auto object-cover rounded-xl"
            :class="{'border-2 border-red': cartItem?.quantity }"
        />
      </picture>
      <AddToCartButton
          :quantity="cartItem?.quantity || 0"
          @add="cartStore.addToCart(product)"
          @increment="cartStore.incrementQuantity(product.name as string)"
          @decrement="cartStore.decrementQuantity(product.name as string)"
      />
    </div>
    <div class="text-rose-400 text-md">{{ product.category }}</div>
    <h3 class="text-rose-900 text-xl font-semibold">{{ product.name }}</h3>
    <p class="text-rose-500 text-lg font-semibold">${{ product.price.toFixed(2) }}</p>
  </div>
</template>