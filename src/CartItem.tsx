import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
  display: flex;
`;

const ImageContainer = styled.div`
  width: 11.25rem;
  height: 11.25rem;
  flex-shrink: 0;
  flex-grow: 0;
  margin-right: 1rem;
  img {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }
`;

const CartItemInfo = styled.div`
  flex-grow: 1;
`;

const CartItemInfoTop = styled.div`
  color: #007185;
  h2 {
    font-size: 1.1rem;
  }
`;

const CartItemInfoBottom = styled.div`
  display: flex;
  margin-top: 0.25rem;
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

type CardItem = {
  image: string;
  name: string;
  price: number;
  quantity: number;
};

const CartItem = ({ image, name, price, quantity }: CardItem): JSX.Element => {
  return (
    <Container>
      <ImageContainer>
        <img src={image} alt="Ipad" />
      </ImageContainer>
      <CartItemInfo>
        <CartItemInfoTop>
          <h2>{name}</h2>
        </CartItemInfoTop>
        <CartItemInfoBottom>
          <CartItemQuantityContainer>{quantity}</CartItemQuantityContainer>
          <CartItemDeleteContainer>Delete</CartItemDeleteContainer>
        </CartItemInfoBottom>
      </CartItemInfo>
      <CartItemPrice>${price}</CartItemPrice>
    </Container>
  );
};

export default CartItem;
