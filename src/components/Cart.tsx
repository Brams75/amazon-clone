import React, { useEffect } from "react";
import styled from "styled-components";
import CartItems from "./CartItems";
import CartTotal from "./CartTotal";
import { useAppSelector, useAppDispatch } from "../hooks";
import { firebaseCartItems } from "../reducers/firebase";
import { db } from "../firebase";

const Container = styled.div`
  display: flex;
  padding: 0.875rem 0.88rem 0 0.88rem;
  align-items: flex-start;
`;

const Cart = (): JSX.Element => {
  const cartItems = useAppSelector((state) => state.firebase.cartItems);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getCartItems = () => {
      db.collection("cartItems").onSnapshot((snapshot) => {
        const tempCartItems = snapshot.docs.map((doc) => ({
          id: doc.id,
          cartItem: doc.data(),
        }));

        dispatch(firebaseCartItems(tempCartItems));
      });
    };

    getCartItems();
  }, [dispatch]);

  const getTotalPrice = (): number => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.cartItem.price * item.cartItem.quantity;
    });

    return total;
  };

  const getCount = (): number => {
    let count = 0;
    cartItems.forEach((item) => {
      count += item.cartItem.quantity;
    });

    return count;
  };
  return (
    <Container>
      <CartItems />
      <CartTotal getCount={getCount} getTotalPrice={getTotalPrice} />
    </Container>
  );
};

export default Cart;
