import React, { ReactElement, SyntheticEvent } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { db } from "../firebase";

const Container = styled.div`
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
  display: flex;
  border-bottom: 1px solid #ddd;
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
  align-items: center;
`;

const CartItemQuantityContainer = styled.div`
  select {
    border-radius: 0.4rem;
    background: #f0f2f2;
    padding: 0.5rem;
    box-shadow: 0 2px 5px rgba(15, 17, 17, 0.15);

    :focus {
      outline: none;
    }
  }
`;

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
  id: string;
  image: string;
  name: string;
  price: number;
  quantity: number;
};

const CartItem = ({
  id,
  image,
  name,
  price,
  quantity,
}: CardItem): ReactElement => {
  const options = [];

  const deleteItem = (e: SyntheticEvent): void => {
    e.preventDefault();
    db.collection("cartItems").doc(id).delete();
  };

  for (let i = 1; i < Math.max(quantity + 1, 20); i += 1) {
    options.push(
      <option key={uuidv4()} value={i}>
        Qty: {i}
      </option>
    );
  }

  const handleChangeQuantity = (newQuantity: string) => {
    db.collection("cartItems")
      .doc(id)
      .update({ quantity: Number(newQuantity) });
  };

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
          <CartItemQuantityContainer>
            <select
              value={quantity}
              onChange={(e) => handleChangeQuantity(e.target.value)}
            >
              {options}
            </select>
          </CartItemQuantityContainer>
          <CartItemDeleteContainer onClick={deleteItem}>
            Delete
          </CartItemDeleteContainer>
        </CartItemInfoBottom>
      </CartItemInfo>
      <CartItemPrice>€{price}</CartItemPrice>
    </Container>
  );
};

export default CartItem;
