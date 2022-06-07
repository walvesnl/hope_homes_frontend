import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sent: [],
  received: [],
};

export const requestSlice = createSlice({
  name: "request",
  initialState,
  reducers: {
    fetchReqReceived: (state, action) => {
      state.received = action.payload;
    },
    fetchReqSent: (state, action) => {
      state.sent = action.payload;
    },
  },
});

export const { fetchReqReceived, fetchReqSent } = requestSlice.actions;

export default requestSlice.reducer;
