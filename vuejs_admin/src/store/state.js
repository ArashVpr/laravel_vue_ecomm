export default {
    logoutMessage: null, // State to hold the logout message
    user: {
        token: sessionStorage.getItem('TOKEN'), // User's authentication token, stored in sessionStorage for persistence
        data: {}
    },
    products: {
        // data: [], // State to hold the list of products, initialized as an empty array
        // loading: false, // State to indicate if products are currently being loaded
    }, 
}