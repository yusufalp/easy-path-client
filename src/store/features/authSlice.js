import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user: null,
    token: null,
  },
  reducers: {
    login: (state, action) => ({
      ...state,
      isAuthenticated: true,
      user: action.payload.user,
      token: action.payload.token,
    }),
    logout: (state, action) => ({
      ...state,
      isAuthenticated: false,
      user: action.payload.user,
      token: action.payload.token,
    }),
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
