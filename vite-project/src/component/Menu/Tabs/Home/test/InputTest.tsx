import { useReducer, useState } from "react";

const counter = { count: 0 };

const INCREMENT = "increment";
const DECREMENT = "decrement";
const RESET = "reset";
const SETCOUNT = "setCountInput";

const increment = (payload = 0) => ({
  type: INCREMENT,
  payload,
});

const decrement = (payload = 0) => {
  return {
    type: DECREMENT,
    payload,
  };
};

const reset = (payload = 0) => {
  return {
    type: RESET,
    payload,
  };
};

const setCountInput = (payload = "") => {
  return {
    type: SETCOUNT,
    payload,
  };
};

export function InputTest() {
  return (
    <section>
      <App />
    </section>
  );
}

function Reducer(state, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + action.payload,
      };
    case DECREMENT:
      return {
        count: state.count - action.payload,
      };
    case RESET:
      return {
        count: 0,
      };
    case SETCOUNT:
      return {
        count: +action.payload,
      };
    default:
      console.log(`Error`);
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(Reducer, counter);
  const [count, setCount] = useState("");

  const newCountValueInput = (e) => {
    const val = e.target.value;
    setCount(val === "" ? "" : Number(val));
  };

  const buttonInput = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div>{state.count}</div>
      <button onClick={() => dispatch(increment(1))}>+</button>
      <button onClick={() => dispatch(decrement(1))}>-</button>
      <button onClick={() => dispatch(reset(0))}>Reset</button>
      <form onSubmit={buttonInput}>
        <input type="text" value={count} onChange={newCountValueInput} />
        <button type="button" onClick={() => dispatch(setCountInput(count))}>
          Отправить число
        </button>
      </form>
    </>
  );
}
