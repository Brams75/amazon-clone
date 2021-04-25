import React, { FC } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
  display: flex;
`;

const ImageContainer = styled.div`
  width: 180px;
  height: 180px;
  flex-shrink: 0;
  flex-grow: 0;
  img {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }
`;

const CartItemInfo = styled.div``;

const CartItemInfoTop = styled.div`
  color: #007185;
  h2 {
    font-size: 18px;
  }
`;

const CartItemInfoBottom = styled.div`
  display: flex;
  margin-top: 4px;
`;

const CartItemQuantityContainer = styled.div``;

const CartItemDeleteContainer = styled.div`
  color: #007185;
  margin-left: 1rem;
  cursor: pointer;
`;

const CartItemPrice = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  margin-left: 1rem;
`;

const CartItem: FC = () => {
  return (
    <Container>
      <ImageContainer>
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/81SGb5l%2BlZL._AC_SX342_.jpg"
          alt="Ipad"
        />
      </ImageContainer>
      <CartItemInfo>
        <CartItemInfoTop>
          <h2>Apple Ipad</h2>
        </CartItemInfoTop>
        <CartItemInfoBottom>
          <CartItemQuantityContainer>5</CartItemQuantityContainer>
          <CartItemDeleteContainer>Delete</CartItemDeleteContainer>
        </CartItemInfoBottom>
      </CartItemInfo>
      <CartItemPrice>$1449</CartItemPrice>
    </Container>
  );
};

export default CartItem;
