<template>
    <GuestLayout title="Sign in to your account">
        <div v-if="logoutMessage" class="text-green-500 text-center text-sm mb-4 font-semibold rounded-md p-2 bg-green-50">
            {{ logoutMessage }}
        </div>
        <form class="space-y-6" method="POST" @submit.prevent="login">
            <div v-if="errorMsg" class="text-red-500 text-center text-sm mb-4 font-semibold rounded-md p-2 bg-red-50">
                {{ errorMsg }}
            </div>
            <div>
                <label for="email" class="block text-sm/6 font-medium text-gray-900">Email address</label>
                <div class="mt-2">
                    <input type="email" name="email" id="email" autocomplete="email" required="" v-model="user.email"
                        class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                </div>
            </div>

            <div>
                <div class="flex items-center justify-between">
                    <label for="password" class="block text-sm/6 font-medium text-gray-900">Password</label>
                    <div class="text-sm">
                        <router-link :to="{ name: 'requestPassword' }"
                            class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</router-link>
                    </div>
                </div>
                <div class="mt-2">
                    <input type="password" name="password" id="password" autocomplete="current-password" required=""
                        v-model="user.password"
                        class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                </div>
                <div class="mt-2 flex items-center">
                    <input id="remember" name="remember" type="checkbox" v-model="user.remember"
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                    <label for="remember" class="ml-2 block text-sm/6 text-gray-900">Remember me</label>
                </div>
            </div>
            <div>
                <button type="submit" :disabled="loading"
                    class="cursor-pointer flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
                    :class="{
                        'hover:cursor-not-allowed opacity-50': loading,
                    }"
                    >
                    <svg v-if="loading" class="mr-3 -ml-1 size-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" ></path></svg>
                    Sign in</button>
            </div>
        </form>
    </GuestLayout>
</template>

<script setup>
// Importing the GuestLayout component to use it in the Login view
import GuestLayout from '../components/GuestLayout.vue';
// Importing the ref function from Vue to create reactive variables
import { ref } from 'vue'
import router from '../router';
import store from '../store';

import { computed } from 'vue'

const logoutMessage = computed(() => store.state.logoutMessage); // Get the logout message

// The "loading" state is like the "processing" sign at the front desk during check-in.
let loading = ref(false)

// The "errorMsg" is like the message displayed to the guest if their check-in fails.
let errorMsg = ref('')

// The "user" object holds the guest's check-in details: email, password, and whether they want to be remembered.
const user = {
    email: '',
    password: '',
    remember: false,
}

// The "login" function is like the receptionist handling the check-in process.
function login() {
    // The receptionist starts processing the guest's check-in request.
    loading.value = true

    // The receptionist sends the guest's details to the hotel's central system (Vuex store).
    store.dispatch('login', user)
        .then(() => {
            // If the system verifies the guest's details successfully, the receptionist completes the check-in process.
            loading.value = false
            // The guest is directed to their room (dashboard).
            router.push({ name: 'app.dashboard' })
        })
        .catch(({ response }) => {
            // If the system rejects the guest's details, the receptionist stops processing.
            loading.value = false
            // An error message is displayed to the guest, explaining why their check-in failed.
            errorMsg.value = response.data.message
        })
}
</script>