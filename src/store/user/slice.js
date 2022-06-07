import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token"),
  profile: null,
  reqReceived: [],
  reqSent: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      localStorage.setItem("token", action.payload.token);
      state.token = action.payload.token;
      state.profile = action.payload.user;
      state.reqReceived = action.payload.user.receiver;
    },
    logOut: (state, action) => {
      localStorage.removeItem("token");
      state.token = null;
      state.profile = null;
      state.reqReceived = null;
    },
    tokenStillValid: (state, action) => {
      state.profile = action.payload.user;
      state.reqReceived = action.payload.user.receiver;
    },
  },
});

export const { loginSuccess, logOut, tokenStillValid } = userSlice.actions;

export default userSlice.reducer;
