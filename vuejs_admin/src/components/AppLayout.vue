<template>
    <div class="min-h-full flex">
        <div class="w-75 bg-indigo-700">
            <Sidebar />
        </div>
        <div class="flex-1 flex flex-col">
            <Navbar />
            <div class="p-10">
                <main class="text-center border border-gray-400 border-dashed p-6 rounded-2xl">Main Content</main>
            </div>

            <!-- <footer class="text-center border">Footer Content</footer> -->
        </div>
    </div>
</template>


<script setup>
import Sidebar from './Sidebar.vue';
import Navbar from './Navbar.vue';
</script>