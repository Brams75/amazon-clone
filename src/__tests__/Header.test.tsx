import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "../store";
import Header from "../components/Header";

describe("Render Header", () => {
  test("Header contain Select Your Adress", () => {
    const user = {
      name: "Brams",
      email: "abram.pomposelli1@gmail.com",
      photo: "hello",
    };
    render(
      <Provider store={store}>
        <Router>
          <Header signOut={() => {}} user={user} />
        </Router>
      </Provider>
    );
    expect(screen.getByText(/Select Your Adress/i)).toBeInTheDocument();
    expect(screen.getByText(/Account & Lists/i)).toBeInTheDocument();
    expect(screen.getByTestId("cartCount").textContent).toEqual("0");
  });
});
