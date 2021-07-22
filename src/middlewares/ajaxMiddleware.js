import { db } from "../firebase";
import { getCartItems } from "../reducers/cartItems";

export default (store) => (next) => async (action) => {
  console.log(action);
  const { dispatch } = store;
  switch (action.type) {
    case "cartItems/cartInit": {
      try {
        db.collection("cartItems").onSnapshot((snapshot) => {
          const tempCartItems = snapshot.docs.map((doc) => ({
            id: doc.id,
            cartItem: doc.data(),
          }));

          dispatch(getCartItems(tempCartItems));
        });
      } catch (error) {
        // const actionToDispatch = fetchArticlesError();
        // store.dispatch(actionToDispatch);
      }
      break;
    }
    default:
      return next(action);
  }
  return undefined;
};
