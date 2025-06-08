<template>
  <div>
    <h1>Products</h1>
    <div v-for="(product, index) in products" :key="index">
      <h2>{{ product.title }}</h2>
      <p>Price: ${{ product.price }}</p>
    </div>
  </div>
</template>

<script setup>
import store from '../store';
import { computed, onMounted } from 'vue';

const products = computed(() => store.state.products);

onMounted(() => {
  store.dispatch('getProducts') // Fetch products when component mounts
})

</script>
