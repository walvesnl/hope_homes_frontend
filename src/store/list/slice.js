import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    fetchList: (state, action) => {
      state.list = action.payload;
    },
    clearList: (state, action) => {
      state.list = [];
    },
  },
});

export const { fetchList, clearList } = listSlice.actions;

export default listSlice.reducer;
