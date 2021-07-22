import React, { ReactElement, useEffect } from "react";
import styled from "styled-components";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { getCartItems } from "../../reducers/cartItems";
import { db } from "../../firebase";
import CartItem from "../CartItem";

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

const CartItems = ({
  cartInit,
  cartItems,
}: {
  cartInit: () => void;
  cartItems: any;
}): ReactElement => {
  useEffect(() => {
    cartInit();
  }, []);

  return (
    <Container>
      <Title>Shopping Cart</Title>
      <hr />
      <ItemsContainer>
        {cartItems.map((item: any) => {
          const { image, name, price, quantity } = item.cartItem;
          return (
            <CartItem
              key={item.id}
              id={item.id}
              image={image}
              name={name}
              price={price}
              quantity={quantity}
            />
          );
        })}
      </ItemsContainer>
    </Container>
  );
};

export default CartItems;
