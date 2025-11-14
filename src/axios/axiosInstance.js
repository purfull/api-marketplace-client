import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5500",
  withCredentials: true, 
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshResponse = await axios.post(
          "/auth/get-auth-token",
          {},
          { baseURL: axiosInstance.defaults.baseURL }
        );

        const newAccessToken = refreshResponse.data?.accessToken;

        if (!newAccessToken) {
          throw new Error("Invalid refresh response");
        }
        localStorage.setItem("accessToken", newAccessToken);
        axiosInstance.defaults.headers.Authorization = `Bearer ${newAccessToken}`;
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        return axiosInstance(originalRequest);

      } catch (err) {
        console.error("Token refresh failed:", err);
        localStorage.removeItem("accessToken");
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  }
);


export default axiosInstance;
