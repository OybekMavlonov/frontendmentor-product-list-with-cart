<script setup lang="ts">
import { watch, onUnmounted } from 'vue'
import CartItem from "./CartItem.vue"
import {useCartStore} from "../stores/cart";
const props = defineProps<{
  open: boolean
}>()

const emit = defineEmits(['close'])

const cartStore = useCartStore()

const close = () => emit('close')

const startNewOrder= () => {
  close()
  cartStore.items = []
}

// 🧠 Disable scroll when open
const disableBodyScroll = () => document.body.classList.add('overflow-hidden')
const enableBodyScroll = () => document.body.classList.remove('overflow-hidden')

// Watch the `open` prop
watch(
    () => props.open,
    (newVal) => {
      if (newVal) {
        disableBodyScroll()
      } else {
        enableBodyScroll()
      }
    }
)

// Clean up just in case
onUnmounted(() => {
  enableBodyScroll()
})
</script>

<template>
  <Transition name="fade-scale">
    <div
        v-if="open"
        class="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
    >
      <div class="max-w-xs md:max-w-lg bg-white rounded-2xl shadow-xl max-w-sm w-full p-3 md:p-6">
        <img src="../assets/images/icon-order-confirmed.svg" alt="confirmed" class="size-8 md:size-12">
        <h2 class="text-2xl md:text-4xl font-bold text-black mb-0 md:mb-2 mt-0 md:mt-4">Order Confirmed</h2>
        <p class="text-rose-500 mb-2 md:mb-6">We hope you enjoy your food.</p>
        <div class="bg-rose-100 py-4 px-2 md:px-6 rounded-md">
          <CartItem v-for="item in cartStore.items" :key="item.name" :item="item" :isConfirmed="true" />
          <div class="flex items-center justify-between mt-2 md:my-6">
            <span class="text-rose-500 text-md">Order Total</span>
            <span class="text-rose-900 font-bold text-xl">${{ cartStore.totalPrice.toFixed(2) }}</span>
          </div>
        </div>
        <button
            @click="startNewOrder"
            class="w-full bg-red text-white px-6 py-2 rounded-full transition mt-6"
        >
          Start New Order
        </button>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.1s ease;
}
.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
