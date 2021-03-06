import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// Define a type for the product state
interface ProductState {
  products: {
    id: string;
    product: { image: string; name: string; price: number; rating: number };
  }[];
}

// Define the initial state using that type
const initialState = {
  products: [],
} as ProductState;

export const products = createSlice({
  name: 'products',
  initialState,
  reducers: {
    firebaseProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { firebaseProducts } = products.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectProducts = (state: RootState): ProductState['products'] =>
  state.products.products;

export default products.reducer;
