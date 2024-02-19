import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  title: "cart",
  initialState: { items: [] },
  reducers: {
    addData(state, action) {
      state.items.push(action.payload);
    },
    removeData(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addData, removeData } = cartSlice.actions;
export default cartSlice.reducer;
