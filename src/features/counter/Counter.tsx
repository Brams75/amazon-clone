import React, { FC } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";

import { decrement, increment } from "./counterSlice";

const Counter: FC = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>
        <button
          type="button"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span data-testid="span">{count}</span>
        <button
          type="button"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
