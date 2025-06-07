export default {
    logoutMessage: null, // State to hold the logout message
    user: {
        token: sessionStorage.getItem('TOKEN'), // User's authentication token, stored in sessionStorage for persistence
        data: {}
    }
}