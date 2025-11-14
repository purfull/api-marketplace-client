import { createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../axios/service/authService";

export const loginUser = createAsyncThunk("auth/login", async (credentials, thunkAPI) => {
  try {
    const data = await authService.login(credentials);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || "Login failed");
  }
});

export const logoutUser = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await authService.logout();
    return true;
  } catch (error) {
    return thunkAPI.rejectWithValue("Logout failed");
  }
});
