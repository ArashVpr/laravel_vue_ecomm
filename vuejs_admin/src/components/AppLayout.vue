<template>
    <div>
        <Navbar />
        <header class="text-center border">Header Content</header>
        <main class="text-center border">Main Content</main>
        <footer class="text-center border">Footer Content</footer>
        <Sidebar />

    </div>
</template>


<script setup>
import Sidebar from './Sidebar.vue';
import Navbar from './Navbar.vue';
</script>