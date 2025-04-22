<script setup lang="ts">
import {computed} from "vue"
import RemoveIcon from "./RemoveIcon.vue"

const props = defineProps(["item", "isConfirmed"])

const emit = defineEmits<{
  (e: "remove"): void;
}>();

const totalItemPrice = computed(() => props.item.quantity * props.item.product.price)

const imageUrl = computed(() => {
  return `${import.meta.env.BASE_URL}${props.item.product.image.thumbnail}`;
});
</script>

<template>
  <div class="flex items-center justify-between border-b border-b-rose-400 mb-4">
    <div class="flex items-center gap-x-2 mb-6">
      <img :src="imageUrl" alt="thumbnail" class="rounded-xl size-14">
      <div>
        <h3 class="text-rose-900 font-semibold">{{ item.product.name }}</h3>
        <div class="flex pt-2 gap-x-4">
          <span class="text-red font-semibold">{{ item.quantity }}x</span>
          <span class="text-rose-400">{{ item.product.price.toFixed(2) }}$</span>
          <span v-if="!isConfirmed" class="text-rose-500 font-semibold">{{ totalItemPrice.toFixed(2) }}$</span>
        </div>
      </div>
    </div>

    <button v-if="!isConfirmed" class="flex items-center text-white border border-rose-500 rounded-full size-5 hover:border-rose-900 hover:text-rose-900" @click.stop.prevent="emit('remove')">
      <RemoveIcon class="rounded-full p-1 size-5 text-rose-500 hover:text-rose-900" />
    </button>
    <div v-else class="text-rose-500 font-semibold">{{ totalItemPrice.toFixed(2) }}$</div>
  </div>
</template>