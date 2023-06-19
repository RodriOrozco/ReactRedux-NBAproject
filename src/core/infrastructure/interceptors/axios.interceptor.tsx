import axios from "axios";

// this interceptor add headers key to use the api without adding it anymore in all the fetching data.
export const accesKeyAxiosInterceptor = () => {
  axios.interceptors.request.use(function (config) {
    config.headers["X-RapidAPI-Key"] = import.meta.env.VITE_API_KEY;
    config.headers["X-RapidAPI-Host"] = import.meta.env.VITE_API_HOST;
    return config;
  });
};
