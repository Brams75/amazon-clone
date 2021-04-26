import React from "react";
import styled from "styled-components";
import { db } from "../firebase";

const Container = styled.div`
  background: white;
  z-index: 100;
  flex: 1;
  padding: 20px;
  margin: 10px;
  max-height: 400px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.span``;
const Price = styled.span`
  font-weight: 500;
  margin-top: 3px;
`;
const Rating = styled.div`
  display: flex;
`;
const Image = styled.img`
  max-height: 200px;
  object-fit: contain;
`;
const AddToCarteButton = styled.button`
  margin-top: 12px;
  width: 100px;
  height: 30px;
  background-color: #f0c14b;
  border: 2px solid #a88734;
  border-radius: 3px;
  align-self: center;
  :hover {
    filter: brightness(95%);
  }
  cursor: pointer;
`;

type ProductProps = {
  image: string;
  name: string;
  price: number;
  rating: number;
  id: string;
};

const Product = ({
  image,
  name,
  price,
  rating,
  id,
}: ProductProps): JSX.Element => {
  const addToCart = () => {
    const cartItem = db.collection("cartItems").doc(id);
    cartItem.get().then((doc) => {
      const data = doc.data();
      if (doc.exists && data) {
        cartItem.update({ quantity: data.quantity + 1 });
      } else {
        db.collection("cartItems")
          .doc(id)
          .set({ name, image, price, quantity: 1 });
      }
    });
  };

  return (
    <Container>
      <Title>{name}</Title>
      <Price>${price}</Price>
      <Rating>
        {Array(rating)
          .fill(undefined)
          .map(() => (
            <p>⭐</p>
          ))}
      </Rating>
      <Image src={image} />
      <AddToCarteButton onClick={addToCart}>Add to cart</AddToCarteButton>
    </Container>
  );
};

export default Product;
