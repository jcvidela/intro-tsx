import React from "react";

interface action {
  type: string;
  payload: number;
}

function mathReducer(state: number = 0, action: action) {
  switch (action.type) {
    case "add":
      return state + action.payload;

    case "substract":
      return state - action.payload;

    case "reset":
      return (state = action.payload);

    default:
      return state;
  }
}

const Counter = () => {
  const [counter, dispatch] = React.useReducer(mathReducer, 0);

  function increment(): void {
    let action = {
      type: "add",
      payload: 1,
    };

    dispatch(action);
  }

  function decrement(): void {
    let action = {
      type: "substract",
      payload: 1,
    };

    dispatch(action);
  }

  function reset(): void {
    let action = {
      type: "reset",
      payload: 0,
    };

    dispatch(action);
  }

  return (
    <div className="mt-5">
      <h3>Hello Counter!</h3>
      <strong>Value: {counter}</strong>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          className="btn btn-primary"
          style={{ margin: "5px" }}
          onClick={increment}
        >
          +1
        </button>
        <button
          className="btn btn-primary"
          style={{ margin: "5px" }}
          onClick={decrement}
        >
          -1
        </button>
        <button
          className="btn btn-primary"
          style={{ margin: "5px" }}
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
