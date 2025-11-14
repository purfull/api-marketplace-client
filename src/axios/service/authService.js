import axiosInstance from "../axiosInstance";

const authService = {
  login: async (credentials) => {
    const { data } = await axiosInstance.post("/customer/login", credentials);
    localStorage.setItem("accessToken", data.accessToken);
    return data;
  },

  logout: async () => {
    await axiosInstance.post("/customer/logout");
    localStorage.removeItem("accessToken");
  },
};

export default authService;
