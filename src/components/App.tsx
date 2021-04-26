import React, { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Cart from "./Cart";
import Home from "./Home";

const Container = styled.div`
  background: #eaeded;
  min-height: 100vh;
  font-family: sans-serif;
`;

const App: FC = () => {
  return (
    <Router>
      <Container>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
