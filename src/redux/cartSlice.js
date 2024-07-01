import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../constants/cartItem";

const initialState = cartItems;

export const cartSlice = createSlice({
  name: "cartfunction",
  initialState,
  reducers: {
    increment: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item) {
        item.amount += 1;
      }
    },
    decrement: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item && item.amount > 1) {
        item.amount -= 1;
      } else {
        return state.filter((item) => item.id !== action.payload);
      }
    },
    remove: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state = [];
      return state;
    },
  },
});

export const { increment, decrement, remove, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
