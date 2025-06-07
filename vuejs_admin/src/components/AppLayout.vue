<template>
    <div v-if="currentUser.id" class="min-h-full flex">
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
    <div v-else class="flex justify-center items-center h-screen">

        <svg class="mr-3 -ml-1 size-10 animate-spin text-grey-700 bg-grey-200" xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
            </path>
        </svg>
    </div>
</template>


<script setup>
import Sidebar from './Sidebar.vue';
import Navbar from './Navbar.vue';
import { ref, onMounted, onUnmounted, computed } from 'vue';
import store from '../store';

const sidebarOpen = ref(true);

const currentUser = computed(() => store.state.user.data)
function toggleSidebar() {

    sidebarOpen.value = !sidebarOpen.value;
}

onMounted(() => {

    store.dispatch('getUser'); // Fetch user data when component mounts

    handleResize()
    window.addEventListener('resize', handleResize)
})

function handleResize() {
    sidebarOpen.value = window.innerWidth >= 768; // Show sidebar on larger screens
}

onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
});

</script>