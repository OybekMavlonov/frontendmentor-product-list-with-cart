<script setup lang="ts">
import ProductList from "./components/ProductList.vue"
import Cart from "./components/Cart.vue"
</script>

<template>
  <div class="container mx-auto py-8 sm:py-20 px-5 grid grid-cols-1 xl:grid-cols-[70%_30%] gap-x-10">
    <ProductList />
    <Cart class="mt-8 xl:mt-0" />
  </div>
</template>

<style>
body {
  @apply bg-rose-100
}
</style>
