import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/slice";
import appStateReducer from "./appState/slice";
import listReducer from "./list/slice";

const store = configureStore({
  reducer: {
    user: userReducer,
    appState: appStateReducer,
    list: listReducer,
  },
});

export default store;
