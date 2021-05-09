import React, { ReactElement, useEffect } from 'react';
import styled from 'styled-components';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { firebaseProducts } from '../../reducers/products';
import Product from '../Product';
import { db } from '../../firebase';
import Banner from './Banner';
import HomeContent from './HomeContent';

const Container = styled.div`
  max-width: 1500px;
  margin: auto;
`;

const Home = (): ReactElement => {
  const products = useAppSelector((state) => state.products.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getProducts = (): void => {
      db.collection('products').onSnapshot((snapshot) => {
        const tempProducts = snapshot.docs.map((doc) => ({
          id: doc.id,
          product: doc.data(),
        }));

        dispatch(firebaseProducts(tempProducts));
      });
    };

    getProducts();
  }, [dispatch]);

  return (
    <Container>
      <Banner data-testid="banner" />
      <HomeContent data-testid="content">
        {products.map((oneProduct, index) => (
          <Product
            key={oneProduct.id}
            test={`${index}`}
            image={oneProduct.product.image}
            name={oneProduct.product.name}
            price={oneProduct.product.price}
            rating={oneProduct.product.rating}
            id={oneProduct.id}
          />
        ))}
      </HomeContent>
    </Container>
  );
};

export default Home;
