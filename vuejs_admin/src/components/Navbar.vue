<template>
  <header class="bg-white border border-gray-200 rounded-tr-lg">
    <nav class="mx-auto flex items-center justify-between p-2 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <Bars3Icon class="h-8 w-auto cursor-pointer" @click="emitted('toggle-sidebar')"></Bars3Icon>
        <router-link :to="{ name: 'app.dashboard' }" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
        </router-link>
      </div>
      
      <!-- <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" class="text-sm/6 font-semibold text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
      </div> -->
      <DropdownMenu />
    </nav>
  </header>
</template>

<script setup>
import DropdownMenu from './DropdownMenu.vue'
import { ref } from 'vue'
import { Dialog } from '@headlessui/vue'
import { ArrowPathIcon, Bars3Icon } from '@heroicons/vue/24/outline'

const emitted = defineEmits(['toggle-sidebar'])


</script>