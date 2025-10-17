import { createContext, useContext, useReducer, useState } from "react";

const CountContext = createContext(null || {});
const count = { count: 0 };
const INCREMENT = "increment";
const DECREMENT = "decrement";

const increment = (payload = 0) => {
  return {
    type: INCREMENT,
    payload,
  };
};

const decrement = (payload) => {
  return {
    type: DECREMENT,
    payload,
  };
};

function useCount() {
  return useContext(CountContext);
}

export function CompointReducer() {
  const [state, dispatch] = useReducer(Reducer, count);

  return (
    <>
      <div>
        <CountContext.Provider value={{ state, dispatch }}>
          <App />
        </CountContext.Provider>
      </div>
      <div>
        <TestUSeCount />
      </div>
    </>
  );
}

function TestUSeCount() {
  const [state, increment, decrement, reset] = useCounter();

  return (
    <>
      <div>
        <h2>{state.count}</h2>
        <button onClick={() => increment()}>+</button>
        <button onClick={() => decrement()}>-</button>
        <button onClick={() => reset()}>0</button>
      </div>
    </>
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
    default:
      return state;
  }
}

function App() {
  const { state, dispatch } = useCount();

  return (
    <>
      <div>
        <h3>{state.count}</h3>
        <button
          onClick={() => {
            dispatch(increment(1));
            console.log(state.count);
          }}
        >
          ДОБАВИТЬ
        </button>
        <button
          onClick={() => {
            dispatch(decrement(1));
            console.log(state.count);
          }}
        >
          УБРАТЬ
        </button>
      </div>
    </>
  );
}

//

function useCounter() {
  const INCREMENT = "increment";
  const DECREMENT = "decrement";
  const RESET = "Reset";
  const count = { count: 0 };

  const incrementF = (payload = 0) => {
    return {
      type: INCREMENT,
      payload,
    };
  };

  const decrementF = (payload) => {
    return {
      type: DECREMENT,
      payload,
    };
  };

  const resetF = (payload) => {
    return {
      type: RESET,
      payload,
    };
  };

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
          count: action.payload,
        };
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(Reducer, count);
  const increment = () => dispatch(incrementF(1));
  const decrement = () => dispatch(decrementF(1));
  const reset = () => dispatch(resetF(0));
  return [state, increment, decrement, reset];
}
