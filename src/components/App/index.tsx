import React, { ReactElement, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { auth } from '../../firebase';
import Header from '../Header';
import Cart from '../Cart';
import Home from '../Home';
import Login from '../Login';

const Container = styled.div`
  background: #eaeded;
  min-height: 100vh;
  font-family: sans-serif;
`;

interface UserObject {
  name: string | null;
  email: string | null;
  photo: string | null;
}

const App = (): ReactElement => {
  const userObject: UserObject = JSON.parse(`${localStorage.getItem('user')}`);

  const [user, setUser] = useState<UserObject | null>(userObject);

  const signOut = () => {
    auth.signOut().then(() => {
      setUser(null);
      localStorage.removeItem('user');
    });
  };

  return (
    <Router>
      {!user ? (
        <Login setUser={setUser} />
      ) : (
        <Container>
          <Header signOut={signOut} user={user} data-testid="header" />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/login">
              <Login setUser={setUser} />
            </Route>

            <Route path="/cart">
              <Cart />
            </Route>
          </Switch>
        </Container>
      )}
    </Router>
  );
};

export default App;
