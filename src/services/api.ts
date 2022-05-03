import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3333/api",
  headers: {
    "content-type": "application/json",
  },
});
api.interceptors.request.use(
  (config) => {
    const refresh_Token = window.localStorage.getItem("refresh_token");
    if (refresh_Token) {
      if (config?.headers) config.headers["x-access-token"] = refresh_Token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;

    if (originalConfig.url !== "/auth/login" && err.response) {
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;
        const token = window.localStorage.getItem("refresh_token");
        try {
          const response = await api.post("/auth/refresh-token", {
            token,
          });
          console.log(response.data);
          const refresh_Token = response.data;
          window.localStorage.setItem("token", refresh_Token);
          return api(originalConfig);
        } catch (error) {
          return Promise.reject(error);
        }
      }
    }
    return Promise.reject(err);
  }
);
