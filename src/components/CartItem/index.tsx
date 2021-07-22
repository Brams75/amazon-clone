import React, { ReactElement, SyntheticEvent } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { db } from "../../firebase";
import ImageContainer from "./ImageContainer";
import CartItemInfo from "./CartItemInfo";
import CartItemInfoTop from "./CartItemInfoTop";
import CartItemInfoBottom from "./CartItemInfoBottom";
import CartItemQuantityContainer from "./CartItemQuantityContainer";
import CartItemDeleteContainer from "./CartItemDeleteContainer";
import CartItemPrice from "./CartItemPrice";

const Container = styled.div`
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
  display: flex;
  border-bottom: 1px solid #ddd;
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

  const deleteItem = (e: React.SyntheticEvent<Element, Event>): void => {
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

  const handleChangeQuantity = (newQuantity: string): void => {
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
