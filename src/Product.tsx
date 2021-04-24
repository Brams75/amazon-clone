import React, { FC } from "react";
import styled from "styled-components";

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
const Rating = styled.div``;
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
`;

const Product: FC = () => {
  return (
    <Container>
      <Title>Ipad Pro</Title>
      <Price>$1449</Price>
      <Rating>⭐⭐⭐⭐⭐</Rating>
      <Image src="https://images-na.ssl-images-amazon.com/images/I/81SGb5l%2BlZL._AC_SX342_.jpg" />
      <AddToCarteButton>Add to cart</AddToCarteButton>
    </Container>
  );
};

export default Product;
