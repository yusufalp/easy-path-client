import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    login: (state, action) => ({
      ...state,
      user: action.payload.user,
      token: action.payload.token,
    }),
    logout: (state, action) => ({
      ...state,
      user: action.payload.user,
      token: action.payload.token,
    }),
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
