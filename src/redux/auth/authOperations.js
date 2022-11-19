import { createAsyncThunk } from "@reduxjs/toolkit";
import { contactAxiosInstance, token } from "services/API";

export const registerUser = createAsyncThunk(
  'auth/register', async (user, { rejectWithValue }) => {
    try {
      const { data } = await contactAxiosInstance.post('/users/signup', user);
      token.set(data.token)
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
})

export const refreshCurrentUser = createAsyncThunk(
  'auth/refresh', async (_, { rejectWithValue, getState }) => {
    try {
      const currentToken = getState().auth.token;
      token.set(currentToken)
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)
  
