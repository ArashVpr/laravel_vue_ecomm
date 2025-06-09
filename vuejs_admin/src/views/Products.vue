<template>
  <div>
    <div class="flex flex-wrap justify-center gap-10">
      <div v-for="(product, index) in products.data" :key="index"
        class=" p-4 mb-4 rounded-lg w-100 flex flex-col items-center shadow-lg hover:shadow-xl transition-shadow duration-300">
        <img :src="product.image" alt="Product Image" class="w-32 h-32 mb-4 rounded object-cover">
        <h2 class="text-lg font-semibold mb-2">{{ product.title }}</h2>
        <p class="text-gray-600 mb-4">Price: ${{ product.price }}</p>
        <button
          class="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600 transition-colors duration-300">
          Add to Cart
        </button>
      </div>
    </div>
    <Pagination  />
    <!-- Use Pagination component -->
    <div class="flex justify-center mt-4">
      <p class="text-gray-600">Showing {{ products.from }} to {{ products.to }} of {{ products.total }} products</p>
    </div>
  </div>
</template>

<script setup>
import store from '../store';
import Pagination from '../components/Pagination.vue'; // Import Pagination component
import { computed, onMounted } from 'vue';

const products = computed(() => store.state.products) // Access products from the Vuex store

onMounted(() => {
  store.dispatch('getProducts') // Fetch products when component mounts
})




</script>
