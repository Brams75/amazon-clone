import React, { ReactElement, useEffect } from "react";
import styled from "styled-components";
import { useAppSelector, useAppDispatch } from "../hooks";
import { firebaseProducts } from "../reducers/firebase";
import Product from "./Product";
import { db } from "../firebase";

const Container = styled.div`
  max-width: 1500px;
  margin: auto;
`;
const Banner = styled.div`
  background-image: url(https://i.imgur.com/SYHeuYM.jpg);
  min-height: 37.5rem;
  background-position: center;
  background-size: cover;
  z-index: 1;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;
const Content = styled.div`
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  margin-top: -21.875rem;
  display: flex;
  flex-wrap: wrap;
`;

const Home = (): ReactElement => {
  const products = useAppSelector((state) => state.firebase.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getProducts = (): void => {
      db.collection("products").onSnapshot((snapshot) => {
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
      <Banner />
      <Content>
        {products.map((oneProduct) => (
          <Product
            key={oneProduct.id}
            image={oneProduct.product.image}
            name={oneProduct.product.name}
            price={oneProduct.product.price}
            rating={oneProduct.product.rating}
            id={oneProduct.id}
          />
        ))}
      </Content>
    </Container>
  );
};

export default Home;
