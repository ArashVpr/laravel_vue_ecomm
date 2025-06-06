import axiosClient from "../axios"

// The "login" action is like the waiter taking the guest's check-in request and sending it to the hotel's central system (API).
export function login({commit}, data) {
    return axiosClient.post('/login', data) // Sends the guest's login details to the backend (Laravel).
    .then(({data}) => {
        // Once the backend verifies the guest's details, the waiter updates the pantry (state) with the user's profile and security badge.
        commit('setUser', data.user) // Stores the user's profile information in the pantry (state).
        commit('setToken', data.token) // Stores the user's security badge (authentication token) in the pantry (state).
        return data // Returns the data for further use if needed.
    })
}

// The "logout" action is like the waiter handling the guest's check-out request.
export function logout({ commit }) {
    return axiosClient.post('/logout') // Sends the logout request to the backend (Laravel).
    .then((response) => {
        // Once the backend confirms the check-out, the waiter clears the user's profile and security badge from the pantry (state).
        commit('setToken', null) // Removes the user's security badge (authentication token) from the pantry (state).
        return response // Returns the response for further use if needed.
        
    })
}
