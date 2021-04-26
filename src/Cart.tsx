import React from "react";
import styled from "styled-components";
import CartItems from "./CartItems";
import CartTotal from "./CartTotal";

const Container = styled.div`
  display: flex;
  padding: 0.875rem 0.88rem 0 0.88rem;
`;

const Cart = (): JSX.Element => {
  return (
    <Container>
      <CartItems />
      <CartTotal />
    </Container>
  );
};

export default Cart;
