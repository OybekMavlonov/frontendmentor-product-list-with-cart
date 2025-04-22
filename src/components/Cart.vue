<script setup lang="ts">
import {ref} from "vue"
import { useCartStore } from '../stores/cart'
import CartItem from "./CartItem.vue"
import OrderConfirmedDialog from "./OrderConfirmedDialog.vue"

const cartStore = useCartStore()

const showDialog = ref(false)
</script>

<template>
  <div class="bg-white p-6 rounded-xl" :class="[cartStore.isEmpty ? 'max-h-[300px]' : 'h-fit']">
    <h1 class="text-3xl font-bold text-rose-500 mb-10">Your Cart ({{ cartStore.totalItems }})</h1>
    <div v-if="cartStore.isEmpty">
      <div class="flex items-center justify-center">
        <img src="../assets/images/illustration-empty-cart.svg" alt="empty-cart">
      </div>
      <p class="text-center text-rose-500 font-semibold">Your added items will appear here</p>
    </div>
    <div v-else>
      <CartItem v-for="item in cartStore.items" :key="item.name" :item="item" @remove="cartStore.removeItem(item.product.name)" :isConfirmed="false" />
      <div class="flex items-center justify-between my-6">
        <span class="text-rose-500 text-md">Order Total</span>
        <span class="text-rose-900 font-bold text-xl">${{ cartStore.totalPrice.toFixed(2) }}</span>
      </div>
      <div class="bg-rose-100 p-3 flex items-center justify-center gap-x-2 rounded-md">
        <img src="../assets/images/icon-carbon-neutral.svg" alt="carbon">
        <span class="text-rose-500">This is a <span class="text-rose-900 font-semibold">carbon-neutral</span> delivery</span>
      </div>
      <button class="w-full p-4 mt-6 rounded-full bg-red text-white" @click="showDialog = true">Confirm Order</button>
    </div>
    <OrderConfirmedDialog :open="showDialog" @close="showDialog = false" />
  </div>
</template>