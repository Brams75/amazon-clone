import { configureStore } from "@reduxjs/toolkit";
import ajaxMiddleware from "../middlewares/ajaxMiddleware";
import productReducer from "../reducers/products";
import cartItemReducer from "../reducers/cartItems";

const store = configureStore({
  reducer: {
    products: productReducer,
    cartItems: cartItemReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ajaxMiddleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
