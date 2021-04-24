import React, { FC } from "react";
import styled from "styled-components";
import Product from "./Product";

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
  return (
    <Container>
      <Banner />
      <Content>
        <Product />
        <Product />
      </Content>
    </Container>
  );
};

export default Home;
