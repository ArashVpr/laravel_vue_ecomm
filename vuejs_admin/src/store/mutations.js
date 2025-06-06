// The "setUser" mutation is like the chef updating the pantry with the user's profile information.
export function setUser(state, user) {
    state.user.data = user // Stores the user's profile information in the pantry (state).
}

// The "setToken" mutation is like the chef updating the pantry with the user's security badge (authentication token).
export function setToken(state, token) {
    state.user.token = token // Stores the authentication token in the pantry (state).
    if (token) {
        // If the security badge exists, the chef stores it securely in the pantry (sessionStorage).
        sessionStorage.setItem('TOKEN', token)
    } else {
        // If the security badge is removed, the chef clears it from the pantry (sessionStorage).
        sessionStorage.removeItem('TOKEN')
    }
}