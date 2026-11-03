import axios from "axios"
import { TOKEN } from "../utils/constants"

const BASE_URL = "http://localhost:5002"

const setupInterceptor = () => {
    axios.defaults.baseURL = BASE_URL

    axios.interceptors.request.use(
        (config) => {
            const token = localStorage.getItem(TOKEN)
            if (token) {
                config.headers["Authorization"] = `Bearer ${token}`
            }
            return config
        },
        (error) => {
            return Promise.reject(error)
        }
    )

    axios.interceptors.response.use(
        (response) => {
            return response
        },
        (error) => {
            if (error.response && error.response.status === 401) {
                localStorage.removeItem("token")
                window.location.href = "/login"
            }
            return Promise.reject(error)
        }
    )

}

export default setupInterceptor