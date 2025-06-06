<template>
    <Menu as="div" class="relative inline-block text-left">
        <div class="flex items-center">
            <MenuButton
                class="flex w-full justify-center text-center  rounded-m px-4 py-2 text-sm cursor-pointer text-black font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 hover:text-gray-500">
                <img src="https://randomuser.me/api/portraits/men/22.jpg" alt="user avatar"
                    class="rounded-full h-10 w-10">

                <div class="flex items-center text-sm font-semibold ml-2">
                    John Doe
                    <ChevronDownIcon class="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                </div>

            </MenuButton>
        </div>

        <transition enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0">
            <MenuItems
                class="absolute right-0 mt-2 w-42 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                <div class="px-1 py-1">
                    <MenuItem v-slot="{ active }">
                    <button :class="[
                        active ? 'bg-indigo-700 text-white cursor-pointer' : 'text-gray-900',
                        'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                    ]">
                        <UserIcon :active="active" class="mr-2 h-5 w-5 text-violet-400" aria-hidden="true" />
                        Profile
                    </button>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                    <button :class="[
                        active ? 'bg-indigo-700 text-white cursor-pointer' : 'text-gray-900',
                        'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                    ]" @click="logout">
                        <ArrowUturnLeftIcon :active="active" class="mr-2 h-5 w-5 text-violet-400" aria-hidden="true" />
                        Logout
                    </button>
                    </MenuItem>
                </div>
            </MenuItems>
        </transition>
    </Menu>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import { UserIcon, ArrowUturnLeftIcon } from '@heroicons/vue/24/outline'
import store from '../store'
import router from '../router'

function logout() {
   store.dispatch('logout')
   .then(() => {
    router.push({ name: 'login' })
   })
}


</script>
