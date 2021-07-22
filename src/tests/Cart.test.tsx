import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store';
import Cart from '../components/Cart';

describe('Render Cart', () => {
  test('button with text proceed to checkout', () => {
    render(
      <Provider store={store}>
        <Cart />
      </Provider>,
    );
    expect(screen.getByText(/Proceed to checkout/i)).toBeInTheDocument();
  });
  test('CartItem with text shopping cart', () => {
    render(
      <Provider store={store}>
        <Cart />
      </Provider>,
    );
    expect(screen.getByText(/Shopping Cart/i)).toBeInTheDocument();
    screen.debug();
  });
  test('Subtotal with 0 Items and 0 dollars', () => {
    render(
      <Provider store={store}>
        <Cart />
      </Provider>,
    );
    expect(screen.getByText(/Subtotal/i)).toBeInTheDocument();
    expect(screen.getByText(/€0/i)).toBeInTheDocument();
    screen.debug();
  });
});
