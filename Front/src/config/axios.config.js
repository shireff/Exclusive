import axios from "axios";
const apiKey = import.meta.env.VITE_STRAPI_BASE_URL;
const axiosInstance = axios.create({
  baseURL: apiKey,
});

export default axiosInstance;
