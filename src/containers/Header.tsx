import { connect } from "react-redux";
import Header from "../components/Header";

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

export default connect(mapState, mapDispatch)(Header);
