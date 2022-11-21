import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { contactAxiosInstance, token } from "services/contactsAxiosInstance";

export const registerUser = createAsyncThunk(
  'auth/register', async (user, { rejectWithValue }) => {
    try {
      const { data } = await contactAxiosInstance.post('/users/signup', user);
      token.set(data.token)
      return data;
    } catch (error) {
      toast.error('')
      return rejectWithValue(error.message);
    }
  }
)

export const logInUser = createAsyncThunk(
  'auth/log_in', async (user, { rejectWithValue }) => {
    try {
      const { data } = await contactAxiosInstance.post('/users/login', user);
      token.set(data.token);
      return data;
    } catch (error) {
      toast.error('Oops, something wrong, check your email or password')
      return rejectWithValue(error.message);
    }
  }
)

export const logOutUser = createAsyncThunk(
  'auth/log_out', async (_, { rejectWithValue }) => {
    try {
      await contactAxiosInstance.post('/users/logout');
      token.unset();
    } catch (error) {
      toast.error(error.message)
      return rejectWithValue(error.message);
    }
  }
)

export const refreshCurrentUser = createAsyncThunk(
  'auth/refresh', async (_, { rejectWithValue, getState }) => {
    const currentToken = getState().auth.token;

    if (!currentToken) {
      return rejectWithValue();
    }

    token.set(currentToken);

    try {
      const { data } = await contactAxiosInstance.get('/users/current');
      return data;
    } catch (error) {
      toast.error(error.message)
      return rejectWithValue(error.message)
    }
  }
)
  
