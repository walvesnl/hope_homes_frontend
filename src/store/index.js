import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/slice";
import appStateReducer from "./appState/slice";
import listReducer from "./list/slice";
import conversationReducer from "./conversation/slice";

const store = configureStore({
  reducer: {
    user: userReducer,
    appState: appStateReducer,
    list: listReducer,
    conversation: conversationReducer,
  },
});

export default store;
