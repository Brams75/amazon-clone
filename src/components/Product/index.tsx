import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { db } from '../../firebase';
import Price from './Price';
import Title from './Title';
import Rating from './Rating';
import Image from './Image';
import AddToCarteButton from './AddToCarteButton';

const Container = styled.div`
  background: white;
  z-index: 100;
  flex: 1;
  padding: 20px;
  margin: 10px;
  max-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

interface ProductProps {
  image: string;
  name: string;
  price: number;
  rating: number;
  id: string;
  test: string;
}

const Product = ({
  image,
  name,
  price,
  rating,
  id,
  test,
}: ProductProps): ReactElement => {
  const addToCart = () => {
    const cartItem = db.collection('cartItems').doc(id);
    cartItem.get().then((doc) => {
      const data = doc.data();
      if (doc.exists && data) {
        cartItem.update({ quantity: data.quantity + 1 });
      } else {
        db.collection('cartItems')
          .doc(id)
          .set({ name, image, price, quantity: 1 });
      }
    });
  };

  return (
    <Container>
      <Title>{name}</Title>
      <Price>€{price}</Price>
      <Rating>
        {Array(rating)
          .fill(undefined)
          .map(() => (
            <p key={uuidv4()}>⭐</p>
          ))}
      </Rating>
      <Image src={image} />
      <AddToCarteButton onClick={addToCart} data-testid={`button-${test}`}>
        Add to cart
      </AddToCarteButton>
    </Container>
  );
};

export default Product;
