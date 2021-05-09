import styled from 'styled-components';

const CartItemQuantityContainer = styled.div`
  select {
    border-radius: 0.4rem;
    background: #f0f2f2;
    padding: 0.5rem;
    box-shadow: 0 2px 5px rgba(15, 17, 17, 0.15);

    :focus {
      outline: none;
    }
  }
`;
export default CartItemQuantityContainer;
