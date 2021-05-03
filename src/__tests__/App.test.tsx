import * as React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store";
import App from "../components/App";

const newUser = {
  name: "Brams",
  email: "abram.pomposelli1@gmail.com",
  photo: "hello",
};

describe("Render App", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  test("Login page if not connected", () => {
    expect(screen.getByText(/sign into amazon/i)).toBeInTheDocument();
  });

  localStorage.setItem("user", JSON.stringify(newUser));

  test("Find name when connected", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const element = screen.getByTestId("name");
    expect(element.innerHTML).toBe("Hello, Brams");
  });
});
