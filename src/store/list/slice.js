import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  detail_list: null,
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
    fetchOne: (state, action) => {
      state.detail_list = action.payload;
    },
    clearOne: (state, action) => {
      state.detail_list = null;
    },
  },
});

export const { fetchList, clearList, fetchOne, clearOne } = listSlice.actions;

export default listSlice.reducer;
