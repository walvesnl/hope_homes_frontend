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
      state.reqReceived = action.payload.user.receiver
        ? action.payload.user.receiver
        : [];
      state.reqSent = action.payload.user.sender
        ? action.payload.user.sender
        : [];
      state.conversations =
        action.payload.user.isHost === true
          ? action.payload.user.host
            ? action.payload.user.host
            : []
          : action.payload.user.seeker
          ? action.payload.user.seeker
          : [];
    },
    logOut: (state, action) => {
      localStorage.removeItem("token");
      state.token = null;
      state.profile = null;
      state.isHost = null;
      state.reqReceived = null;
      state.reqSent = null;
      state.conversations = null;
    },
    tokenStillValid: (state, action) => {
      state.profile = action.payload.user;
      state.isHost = action.payload.user.isHost;
      state.reqReceived = action.payload.user.receiver;
      state.reqSent = action.payload.user.sender;

      if (action.payload.user.isHost === true) {
        state.conversations = action.payload.user.host;
      } else {
        state.conversations = action.payload.user.seeker;
      }
    },
    requestSent: (state, action) => {
      state.reqSent = [...state.reqSent, action.payload];
    },
    newConversation: (state, action) => {
      state.conversations = [...state.conversations, action.payload];
    },
    deleteRequest: (state, action) => {
      state.reqReceived = state.reqReceived.filter((r) => {
        return r.id !== action.payload;
      });
    },
  },
});

export const {
  loginSuccess,
  logOut,
  tokenStillValid,
  requestSent,
  newConversation,
  deleteRequest,
} = userSlice.actions;

export default userSlice.reducer;
