import axiosInstance from "../axiosInstance";

const otpService = {
  send: async (payload) => {
    const { data } = await axiosInstance.post("/otp/send", payload);
    return data;
  },

  verify: async (payload) => {
    const { data } = await axiosInstance.post("/otp/verify", payload);
    return data;
  }
};

export default otpService;
