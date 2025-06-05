import { createSlice } from "@reduxjs/toolkit";

const filtersReduser = createSlice({
  name: "filters",
  initialState: {
    name: "",
    tel: "",
  },
  reducers: {
    filterName: (state, action) => {
      state.name = action.payload;
    },
    filterTel: (state, action) => {
      state.tel = action.payload;
    },
  },
});

export const { filterName } = filtersReduser.actions;
export default filtersReduser.reducer;
