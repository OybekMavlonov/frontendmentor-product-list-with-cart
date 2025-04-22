<script setup lang="ts">
import IncrementIcon from "./IncrementIcon.vue"
import DecrementIcon from "./DecrementIcon.vue"
defineProps<{
  quantity: number;
}>();

const emit = defineEmits<{
  (e: "add"): void;
  (e: "increment"): void;
  (e: "decrement"): void;
}>();
</script>

<template>
  <button
      v-if="quantity === 0"
      class="flex items-center gap-x-2 text-rose-900 font-semibold bg-white max-w-40 py-2 xs:py-3 px-3 xs:px-5 absolute
      bottom-[-20px] left-[30%] sm:left-1/4 border border-rose-500 rounded-full text-sm sm:text-base"
      @click.stop.prevent="emit('add')"
  >
    <img src="../assets/images/icon-add-to-cart.svg" alt="icon-add">
    <span>Add to Cart</span>
  </button>
  <div
      v-else
      class="w-40 flex items-center justify-between bg-red py-3 px-5 absolute bottom-[-20px] left-1/4 rounded-full"
      @click.stop.prevent
  >
    <button class="flex items-center" @click.stop.prevent="emit('decrement')">
      <DecrementIcon class="text-white border border-white rounded-full p-1 size-5 hover:bg-white hover:text-red" />
    </button>
    <span class="text-white text-l md:text-xl">{{ quantity }}</span>
    <button class="flex items-center" @click.stop.prevent="emit('increment')">
      <IncrementIcon class="text-white border border-white rounded-full p-1 size-5 hover:bg-white hover:text-red" />
    </button>
  </div>
</template>
