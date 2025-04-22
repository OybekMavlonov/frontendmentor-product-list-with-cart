<script setup lang="ts">
import ProductItem from "./ProductItem.vue"

import products from "../data.json"
</script>

<template>
  <div>
    <h1 class="font-bold text-2xl md:text-5xl text-rose-900 mb-8 md:mb-12">Desserts</h1>
    <div class="grid sm:grid-cols-2 md:grid-cols-3 items-stretch gap-x-6 gap-y-10">
      <ProductItem v-for="item in products" :key="item.name" :product="item"/>
    </div>
  </div>
</template>