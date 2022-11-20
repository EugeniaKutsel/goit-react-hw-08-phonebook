import { logInUser, logOutUser, refreshCurrentUser, registerUser } from "./authOperations";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  user: {name: null, email: null},
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
      .addCase(logInUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.loading = false;
        state.isLoggedIn = true;
      })
      .addCase(logInUser.pending, handlePending)
      .addCase(logInUser.rejected, handleRejected)
      .addCase(logOutUser.fulfilled, (state) => {
        state.user = {name: null, email: null};
        state.token = '';
        state.loading = false;
        state.isLoggedIn = false;
      })
      .addCase(logOutUser.pending, handlePending)
      .addCase(logOutUser.rejected, handleRejected)
      .addCase(refreshCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.isLoggedIn = true;
      })
      .addCase(refreshCurrentUser.pending, handlePending)
      .addCase(refreshCurrentUser.rejected, handleRejected)
  }
})

export default authSlice.reducer;