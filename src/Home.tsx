import React, { FC, useEffect } from "react";
import styled from "styled-components";
import { useAppSelector, useAppDispatch } from "./hooks";
import { init } from "./reducers/product";
import Product from "./Product";
import { db } from "./firebase";

const Container = styled.div`
  max-width: 1500px;
  margin: auto;
`;
const Banner = styled.div`
  background-image: url(https://i.imgur.com/SYHeuYM.jpg);
  min-height: 600px;
  background-position: center;
  background-size: cover;
  z-index: 1;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;
const Content = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  margin-top: -350px;
  display: flex;
`;

const Home: FC = () => {
  const products = useAppSelector((state) => state.products.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getProducts = () => {
      db.collection("products").onSnapshot((snapshot) => {
        const tempProducts = snapshot.docs.map((doc) => ({
          id: doc.id,
          product: doc.data(),
        }));

        dispatch(init(tempProducts));
      });
    };

    getProducts();
  }, [dispatch]);

  if (products.length < 1) {
    return <p>Hello</p>;
  }
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
          />
        ))}
      </Content>
    </Container>
  );
};

export default Home;
