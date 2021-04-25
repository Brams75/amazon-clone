import React from "react";
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
`;

export type ProductProps = {
  image: string;
  name: string;
  price: number;
  rating: number;
};

const Product = ({ image, name, price, rating }: ProductProps): JSX.Element => {
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
      <AddToCarteButton>Add to cart</AddToCarteButton>
    </Container>
  );
};

export default Product;
