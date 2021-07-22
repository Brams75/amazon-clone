import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the product state
export interface CartItemState {
  cartItems: {
    id: string;
    cartItem: { image: string; name: string; price: number; quantity: number };
  }[];
}

// Define the initial state using that type
const initialState = {
  cartItems: [],
} as CartItemState;

export const cartItems = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    cartInit: (state) => {},
    getCartItems: (state, action) => {
      state.cartItems = action.payload;
    },
  },
});

export const { getCartItems, cartInit } = cartItems.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCartItems = (state: RootState): CartItemState["cartItems"] =>
  state.cartItems.cartItems;

export default cartItems.reducer;
