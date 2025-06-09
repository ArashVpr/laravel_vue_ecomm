<template>
  <div class="flex justify-center items-center mt-4 space-x-2">
    <!-- Previous button -->
    <button
      @click="prevPageUrl"
      :disabled="!products.prev_page_url"
      class="px-4 py-2 rounded border cursor-pointer border-gray-300 bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
      aria-label="Previous Page">
      Previous
    </button>

    <!-- Page buttons -->
    <button
      v-for="page in pages"
      :key="page"
      @click="goToPage(getPageUrl(page))"
      :class="['px-4 py-2 rounded border',
        page === products.current_page ? 'bg-blue-500 text-white' : 'bg-white hover:bg-gray-100']"
      aria-label="'Page ' + page"
      class="cursor-pointer"> 
      {{ page }}
    </button> 

    <!-- Next button -->
    <button
      @click="nextPageUrl"
      :disabled="!products.next_page_url"
      class="px-4 py-2 rounded border cursor-pointer border-gray-300 bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
      aria-label="Next Page">
      Next
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import store from '../store';

const products = computed(() => store.state.products);

const pages = computed(() => {
  const totalPages = products.value.last_page;
  const currentPage = products.value.current_page;
  const range = 2;
  const start = Math.max(1, currentPage - range);
  const end = Math.min(totalPages, currentPage + range);
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
})

function getPageUrl(page) {
  // Find the link in the API response corresponding to the page number
  const linkObj = products.value.links.find(link => Number(link.label) === page)
  return linkObj ? linkObj.url : null
}

function nextPageUrl() {
  if (products.value.next_page_url) {
    store.dispatch('getProducts', products.value.next_page_url)
  }
}

function prevPageUrl() {
  if (products.value.prev_page_url) {
    store.dispatch('getProducts', products.value.prev_page_url)
  }
}

function goToPage(url) {
  if (url) {
    store.dispatch('getProducts', url);
  }
}
</script>
