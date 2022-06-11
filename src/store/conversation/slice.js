import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  conversation: null,
  messages: [],
};

export const conversationSlice = createSlice({
  name: "conversation",
  initialState,
  reducers: {
    fetchConversation: (state, action) => {
      state.conversation = action.payload;
      state.messages = action.payload.messages;
    },
  },
});

export const { fetchConversation } = conversationSlice.actions;

export default conversationSlice.reducer;
