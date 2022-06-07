import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/slice";
import appStateReducer from "./appState/slice";
import listReducer from "./list/slice";
import requestReducer from "./request/slice";

const store = configureStore({
  reducer: {
    user: userReducer,
    appState: appStateReducer,
    list: listReducer,
    request: requestReducer,
  },
});

export default store;
