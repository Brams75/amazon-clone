import React, { ReactElement, useEffect } from "react";
import styled from "styled-components";
import CartItems from "../../containers/CartItems";
import CartTotal from "../CartTotal";

const Container = styled.div`
  display: flex;
  padding: 0.875rem 0.88rem 0 0.88rem;
  align-items: flex-start;
`;

const Cart = ({
  cartInit,
  cartItems,
}: {
  cartInit: () => void;
  cartItems: any;
}): ReactElement => {
  useEffect(() => {
    cartInit();
  }, []);

  const getTotalPrice = (): number => {
    let total = 0;
    cartItems.forEach((item: any) => {
      total += item.cartItem.price * item.cartItem.quantity;
    });

    return total;
  };

  const getCount = (): number => {
    let count = 0;
    cartItems.forEach((item: any) => {
      count += item.cartItem.quantity;
    });

    return count;
  };
  return (
    <Container>
      <CartItems />
      <CartTotal getCount={getCount} getTotalPrice={getTotalPrice} />
    </Container>
  );
};

export default Cart;
