<template>
    <div class="bg-indigo-700 text-white p-4">
        <img class="h-8 w-auto mb-6 ml-2 mt-2" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=white"
            alt="" />
        <router-link :to="{ name: 'app.dashboard' }" class="flex items-center py-2 px-3 rounded hover:bg-black/30">
            <HomeIcon class="w-6"></HomeIcon>
            <span class="font-semibold text-xl ml-4">Dashboard</span>
        </router-link>
        <router-link :to="{ name: 'app.dashboard' }" class="flex items-center py-2 px-3 rounded hover:bg-black/30">
            <CubeIcon class="w-6"></CubeIcon>
            <span class="font-semibold text-xl ml-4">Products</span>
        </router-link>
        <router-link :to="{ name: 'app.dashboard' }" class="flex items-center py-2 px-3 rounded hover:bg-black/30">
            <UserIcon class="w-6"></UserIcon>
            <span class="font-semibold text-xl ml-4">Users</span>
        </router-link>
        <router-link :to="{ name: 'app.dashboard' }" class="flex items-center py-2 px-3 rounded hover:bg-black/30">
            <ChartBarIcon class="w-6"></ChartBarIcon>
            <span class="font-semibold text-xl ml-4">Reports</span>
        </router-link>
    </div>
</template>

<script setup>
import { HomeIcon, CubeIcon, UserIcon, ChartBarIcon } from '@heroicons/vue/24/outline';
</script>

<style></style>