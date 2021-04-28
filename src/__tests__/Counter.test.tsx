import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store";
import Counter from "../features/counter/Counter";

describe("Render Counter", () => {
  render(
    <Provider store={store}>
      <Counter />
    </Provider>
  );
  test("span increment with button", () => {
    const span = screen.getByTestId("span");
    expect(span).toBeInTheDocument();
    expect(span.innerHTML).not.toBeNull();
    expect(span.innerHTML).toEqual("0");

    fireEvent.click(screen.getByText("Increment"));
    expect(span.innerHTML).toEqual("1");

    fireEvent.click(screen.getByText("Decrement"));
    expect(span.innerHTML).toEqual("0");
  });
});
