import { createSlice } from '@reduxjs/toolkit';
import { loginUserThunk, logoutUserThunk, refreshUserThunk, registerUserThunk } from './operations';

const initialState = {
  isLoading: false,
  error: null,
  userData: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      // REGISTRATION
      .addCase(registerUserThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(registerUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // LOGIN
      .addCase(loginUserThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn  = true;
      })
      .addCase(loginUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // REFRESH
      .addCase(refreshUserThunk.pending, state => {
          state.isLoading = true;
          state.error = null;
          state.isRefreshing = true;
      })
      .addCase(refreshUserThunk.fulfilled, (state, action) => {
          state.isLoading = false;
          state.userData = action.payload;
          state.isLoggedIn= true;
          state.isRefreshing = false;
      })
      .addCase(refreshUserThunk.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
          state.isRefreshing = false;
      })
      // LOGOUT
      .addCase(logoutUserThunk.pending, state => {
          state.isLoading = true;
          state.error = null;
      })
      .addCase(logoutUserThunk.fulfilled, (state, action) => {
          state.isLoading = false;
          state.userData = null;
          state.token = null;
          state.isLoggedIn = false;
      })
      .addCase(logoutUserThunk.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
      })
});

export  const authReducer = authSlice.reducer;
