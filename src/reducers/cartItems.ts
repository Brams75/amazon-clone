import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// Define a type for the product state
interface CartItemState {
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
  name: 'cartItems',
  initialState,
  reducers: {
    firebaseCartItems: (state, action) => {
      state.cartItems = action.payload;
    },
  },
});

export const { firebaseCartItems } = cartItems.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCartItems = (state: RootState): CartItemState['cartItems'] =>
  state.cartItems.cartItems;

export default cartItems.reducer;
