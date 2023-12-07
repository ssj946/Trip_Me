import axios from "axios";

const http = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
});

http.interceptors.request.use((config) => {
  // config.headers.authorization = 'token'
  config.headers["Access-Control-Allow-Origin"] = "*";
  //config.headers["Content-Type"] = "application/json;charset=UTF-8";
  config.headers["Authorization"] = sessionStorage.getItem("accessToken");
  return config;
});

export default http;
