<template>
  <header class="bg-white border border-gray-200 rounded-tr-lg">
    <nav class="mx-auto flex items-center justify-between p-2 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <router-link :to="{ name: 'app.dashboard' }" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img class="h-8 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            alt="" />
        </router-link>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="size-6" aria-hidden="true" />
        </button>
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
import { ArrowPathIcon } from '@heroicons/vue/24/outline'


const mobileMenuOpen = ref(false)
</script>