import axios from "axios"

export const get = async (url, config) => {
    return axios.get(url, config)
}

export const post = async (url, data, config) => {
    return await axios.post(url, data, config)
}

export const del = async (url, data) => {
    return await axios.delete(url, data)
}