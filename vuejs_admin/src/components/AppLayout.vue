<template>
    <div class="min-h-full flex">
        <Sidebar :class="{ 'hidden': !sidebarOpen }" />
        <div class="flex-1 flex flex-col">
            <Navbar @toggle-sidebar="toggleSidebar" />
            <div class="p-10">
                <main class="text-center border border-gray-400 border-dashed p-6 rounded-2xl">
                    <router-view></router-view>
                    </main>
            </div>

            <!-- <footer class="text-center border">Footer Content</footer> -->
        </div>
    </div>
</template>


<script setup>
import Sidebar from './Sidebar.vue';
import Navbar from './Navbar.vue';
import { ref } from 'vue';

const sidebarOpen = ref(true);

function toggleSidebar() {

    sidebarOpen.value = !sidebarOpen.value;
}

</script>