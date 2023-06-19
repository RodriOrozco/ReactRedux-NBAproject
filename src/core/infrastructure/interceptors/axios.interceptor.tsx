import axios from "axios";

// this interceptor add headers key to use the api without adding it anymore in all the fetching data.
export const accesKeyAxiosInterceptor = () => {
  axios.interceptors.request.use(function (config) {
    config.headers["X-RapidAPI-Key"] =
      "f3292ebbdbmsh9c2bc69a66306a7p139469jsncbd71041fc17";
    config.headers["X-RapidAPI-Host"] = "api-nba-v1.p.rapidapi.com";
    return config;
  });
};
