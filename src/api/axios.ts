import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
    baseURL: 'https://swapi.dev'
})

export default axiosInstance