import React, { FC } from "react";
import styled from "styled-components";
import CartItems from "./CartItems";
import CartTotal from "./CartTotal";

const Container = styled.div`
  display: flex;
  padding: 14px 18px 0 18px;
`;

const Cart: FC = () => {
  return (
    <Container>
      <CartItems />
      <CartTotal />
    </Container>
  );
};

export default Cart;
