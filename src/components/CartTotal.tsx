import React, { ReactElement } from "react";
import styled from "styled-components";
import NumberFormat from "react-number-format";

const Container = styled.div`
  height: 12.5rem;
  flex: 0.3;
  padding: 1.2rem;
  background: white;
`;

const Subtotal = styled.h2`
  margin-bottom: 1rem;
`;

const CheckoutButton = styled.button`
  background: #f0c14b;
  width: 100%;
  padding: 0.25rem 0.5rem;
  border: 0.125rem solid #aa88734;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 1rem;
  :hover {
    background: #ddb347;
  }
`;

interface CartTotalProps {
  getCount: () => number;
  getTotalPrice: () => number;
}

const CartTotal = ({
  getCount,
  getTotalPrice,
}: CartTotalProps): ReactElement => {
  return (
    <Container>
      <Subtotal>
        Subtotal ({getCount()} items):
        <NumberFormat
          value={getTotalPrice()}
          displayType="text"
          thousandSeparator
          prefix="€"
        />
      </Subtotal>
      <CheckoutButton>Proceed to checkout</CheckoutButton>
    </Container>
  );
};

export default CartTotal;
