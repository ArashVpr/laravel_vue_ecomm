// Importing the tools needed for the delivery service:
// - axios: The delivery truck that transports packages (API requests).
// - store: The warehouse where security badges (authentication tokens) are stored.
// - router: The GPS system that redirects drivers (users) to the correct destinations (routes).
import axios from 'axios'
import store from './store'
import router from './router'

// Creating a customized delivery truck for the company.
// The baseURL is the starting point for all deliveries (API requests).
const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
})

// Adding a checkpoint before the truck departs (request interceptor).
axiosClient.interceptors.request.use(
    config => {
        // Retrieving the security badge (authentication token) from the warehouse (Vuex store).
        const token = store.state.user.token
        // Attaching the badge to the package (request headers) so it can pass security checks at the destination (API server).
        config.headers.Authorization = `Bearer ${token}`
        // Ensuring the package is ready to be sent.
        return config
    })

// Adding a checkpoint after the truck delivers the package (response interceptor).
axiosClient.interceptors.response.use( 
    response => {
    // If the delivery was successful, simply accept the package and move on.
    return response
},  (error) => {
        // If the package is rejected due to invalid security clearance (401 Unauthorized):
        if (error.response.status === 401) {
            // Remove the security badge (authentication token) from the warehouse (Vuex store).
            sessionStorage.removeItem('TOKEN')
            // Redirect the driver (user) back to the security office (login page) to get a new badge.
            router.push({ name: 'login' })
        }
        // Reject the package and let the company handle the issue.
        // return Promise.reject
        console.error(error)

    }
)

// Exporting the customized delivery truck so it can be used throughout the company (application).
export default axiosClient
