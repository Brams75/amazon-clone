import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the product state
interface ProductState {
  products: {
    id: string;
    product: { image: string; name: string; price: number; rating: number };
  }[];
  cartItems: {
    id: string;
    cartItem: { image: string; name: string; price: number; quantity: number };
  }[];
}

// Define the initial state using that type
const initialState = {
  products: [],
  cartItems: [],
} as ProductState;

export const firebase = createSlice({
  name: "firebase",
  initialState,
  reducers: {
    firebaseProducts: (state, action) => {
      state.products = action.payload;
    },
    firebaseCartItems: (state, action) => {
      state.cartItems = action.payload;
    },
  },
});

export const { firebaseProducts, firebaseCartItems } = firebase.actions;

// Other code such as selectors can use the imported `RootState` type
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const selectProducts = (state: RootState) => state.firebase.products;
export const selectCartItems = (state: RootState) => state.firebase.cartItems;

export default firebase.reducer;
