import { registerUser } from "./authOperations";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  user: {},
  token: '',
  loading: false,
  error: null,
  isLoggedIn: false,
}

const handlePending = (state) => {
  state.loading = true;
  state.error = null;
}

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
}



const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.loading = false;
        state.isLoggedIn = true;
      })
      .addCase(registerUser.pending, handlePending)
      .addCase(registerUser.rejected, handleRejected)
  }
})

export default authSlice.reducer;