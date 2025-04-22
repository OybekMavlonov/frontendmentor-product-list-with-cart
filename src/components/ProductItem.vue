<script setup lang="ts">
import {computed} from "vue"
import { useCartStore } from '../stores/cart'
import AddToCartButton from "./AddToCartButton.vue"

const props = defineProps(["product"])

const cartStore = useCartStore()

const cartItem = computed(() => cartStore.getItemByName(props.product.name));

const imageUrl = computed(() => {
  const width = window.innerWidth
  let selectedImage = props.product.image.mobile

  if (width >= 1024) {
    selectedImage = props.product.image.desktop
  } else if (width >= 768) {
    selectedImage = props.product.image.tablet
  }

  return `${import.meta.env.BASE_URL}${selectedImage}`
})
</script>

<template>
  <div>
    <div class="relative mb-8 inline-block">
      <img
          :src="imageUrl"
          :alt="product.name"
          class="w-full h-auto object-cover rounded-xl"
          :class="{ 'border-2 border-red': cartItem?.quantity }"
      />

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