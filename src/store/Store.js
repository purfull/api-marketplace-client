import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import otpReducer from "./slice/otpSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    otp: otpReducer,
  },
});

export default store;
