import React, { useEffect } from "react";
import styled from "styled-components";
import { useAppSelector, useAppDispatch } from "../hooks";
import { firebaseCartItems } from "../reducers/firebase";
import { db } from "../firebase";
import CartItem from "./CartItem";

const Container = styled.div`
  min-height: 100%;
  flex: 0.8;
  padding: 1.2rem;
  margin-right: 1.1rem;
  background: white;
`;

const Title = styled.h1`
  margin-bottom: 0.5rem;
`;

const ItemsContainer = styled.div``;

const CartItems = (): JSX.Element => {
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

  if (cartItems.length < 1) {
    return <p>Hello</p>;
  }

  return (
    <Container>
      <Title>Shopping Cart</Title>
      <hr />
      <ItemsContainer>
        {cartItems.map((cartItem) => (
          <CartItem
            key={cartItem.id}
            image={cartItem.cartItem.image}
            name={cartItem.cartItem.name}
            price={cartItem.cartItem.price}
            quantity={cartItem.cartItem.quantity}
          />
        ))}
      </ItemsContainer>
    </Container>
  );
};

export default CartItems;
