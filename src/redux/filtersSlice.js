import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: "",
};

const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filters = action.payload;
    },
  },
});

export const filtersReducer = slice.reducer;
export const { setFilter } = slice.actions;
