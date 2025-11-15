import { createAsyncThunk } from "@reduxjs/toolkit";
import otpService from "../../axios/service/otpService";

export const sendOtp = createAsyncThunk("otp/send", async (payload, thunkAPI) => {
  try {
    const data = await otpService.send(payload);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || "Failed to send otp");
  }
});

export const verifyOtp = createAsyncThunk("otp/verify", async (payload, thunkAPI) => {
  try {
    const data = await otpService.verify(payload);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || "OTP expired");
  }
});
