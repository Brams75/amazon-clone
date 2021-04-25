import React, { FC } from "react";
import styled from "styled-components";
import CartItem from "./CartItem";

const Container = styled.div`
  height: 300px;
  flex: 0.8;
  padding: 20px;
  margin-right: 18px;
  background: white;
`;

const Title = styled.span``;

const ItemsContainer = styled.div``;

const CartItems: FC = () => {
  return (
    <Container>
      <Title>Shopping Cart</Title>
      <hr />
      <ItemsContainer>
        <CartItem />
      </ItemsContainer>
    </Container>
  );
};

export default CartItems;
