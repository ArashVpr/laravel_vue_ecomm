import axios from 'axios'
import store from './store'
import router from './router'

const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
})

axiosClient.interceptors.request.use(
    (config) => {
        const token = store.state.auth.token
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    })
    
axiosClient.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        if (error.response.status === 401) {
            store.commit('auth/logout')
            router.push({ name: 'login' })
        }
        return Promise.reject(error)
        // throw error
    }
)

export default axiosClient