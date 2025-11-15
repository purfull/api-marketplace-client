import axiosInstance from "../axiosInstance";

const authService = {
  login: async (credentials) => {
    const { data } = await axiosInstance.post("/customer/login", credentials);
    localStorage.setItem("accessToken", data.data.accessToken);
    return data;
  },

  register: async (credentials) => {
    const { data } = await axiosInstance.post("/customer/create-customer", credentials);
    console.log("dataaaaaaaaaaaa",data);
    
    localStorage.setItem("accessToken", data.data.accessToken);
    return data;
  },

  logout: async () => {
    await axiosInstance.post("/customer/logout");
    localStorage.removeItem("accessToken");
  },
};

export default authService;
