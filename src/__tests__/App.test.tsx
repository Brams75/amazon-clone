import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store';
import App from '../components/App';

describe('Render App', () => {
  test('Login page if not connected', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(screen.getByText(/sign into amazon/i)).toBeInTheDocument();
  });

  test('Search name, to check if user is connected', () => {
    const user = {
      name: 'Brams',
      email: 'abram.pomposelli1@gmail.com',
      photo: 'hello',
    };
    localStorage.setItem('user', JSON.stringify(user));
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    const element = screen.getByTestId('name');
    expect(element.innerHTML).toBe('Hello, Brams');
  });
});
