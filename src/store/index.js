import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/slice";
import appStateReducer from "./appState/slice";

const store = configureStore({
  reducer: {
    user: userReducer,
    appState: appStateReducer,
  },
});

export default store;
