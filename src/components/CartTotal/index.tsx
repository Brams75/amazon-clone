import React, { ReactElement } from 'react';
import styled from 'styled-components';
import NumberFormat from 'react-number-format';
import Subtotal from './Subtotal';
import CheckoutButton from './CheckoutButton';

const Container = styled.div`
  height: 12.5rem;
  flex: 0.3;
  padding: 1.2rem;
  background: white;
`;

interface CartTotalProps {
  getCount: () => number;
  getTotalPrice: () => number;
}

const CartTotal = ({
  getCount,
  getTotalPrice,
}: CartTotalProps): ReactElement => (
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
export default CartTotal;
