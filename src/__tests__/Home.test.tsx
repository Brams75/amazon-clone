import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store";
import Home from "../components/Home";

describe("Render Home", () => {
  test("banner & content are in the document", () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    const banner = screen.getByTestId("banner");
    expect(banner).toBeInTheDocument();

    const content = screen.getByTestId("content");
    expect(content).toBeInTheDocument();
  });
});
