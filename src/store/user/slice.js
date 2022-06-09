import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token"),
  profile: null,
  isHost: null,
  reqReceived: [],
  reqSent: [],
  conversations: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      localStorage.setItem("token", action.payload.token);
      state.token = action.payload.token;
      state.profile = action.payload.user;
      state.isHost = action.payload.user.isHost;
      state.reqReceived = action.payload.user.receiver;
      if (action.payload.user.isHost === true) {
        state.conversations = action.payload.user.host;
      } else {
        state.conversations = action.payload.user.seeker;
      }
    },
    logOut: (state, action) => {
      localStorage.removeItem("token");
      state.token = null;
      state.profile = null;
      state.isHost = null;
      state.reqReceived = null;
      state.conversations = null;
    },
    tokenStillValid: (state, action) => {
      state.profile = action.payload.user;
      state.isHost = action.payload.user.isHost;
      state.reqReceived = action.payload.user.receiver;
      if (action.payload.user.isHost === true) {
        state.conversations = action.payload.user.host;
      } else {
        state.conversations = action.payload.user.seeker;
      }
    },
  },
});

export const { loginSuccess, logOut, tokenStillValid } = userSlice.actions;

export default userSlice.reducer;
