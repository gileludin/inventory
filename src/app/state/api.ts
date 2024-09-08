import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // Use environment variable
});

// Optionally, set up a request interceptor to add token to headers if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Retrieve token from local storage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default api;
