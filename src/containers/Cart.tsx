import { connect } from "react-redux";
import Cart from "../components/Cart";

import { cartInit } from "../reducers/cartItems";

const mapState = (state: any) => ({
  cartItems: state.cartItems.cartItems,
});

const mapDispatch = (dispatch: any) => ({
  cartInit: () => {
    const action = cartInit();
    dispatch(action);
  },
});

export default connect(mapState, mapDispatch)(Cart);
