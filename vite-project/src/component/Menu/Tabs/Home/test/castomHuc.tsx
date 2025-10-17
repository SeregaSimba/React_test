import { useReducer, useContext, createContext } from "react";

const CountContext = createContext(null);

export function CastomHuc() {
  const { state, increment, decrement, reset } = useCounter();

  return (
    <>
      <div>
        <CountContext.Provider value={{ state, increment, decrement, reset }}>
          <App />
        </CountContext.Provider>
      </div>
    </>
  );
}

function App() {
  const CountProvider = useContext(CountContext);
  const count = CountProvider.state.count;
  const incre = CountProvider.increment;
  const decre = CountProvider.decrement;
  const res = CountProvider.reset;

  return (
    <>
      <h2>{count}</h2>
      <button
        onClick={() => {
          console.log(`добовляем значение ${count}`);
          incre();
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          console.log(`убовляем знвсение ${count}`);
          decre();
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          console.log(`возврящаем в исходный 0 ${count}`);
          res();
        }}
      >
        0
      </button>
    </>
  );
}

function useCounter() {
  const val = { count: 0 };
  const INCREMENT = "increment";
  const DECREMENT = "decrement";
  const RESET = "reset";

  const result = (state, action) => {
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
      default: {
        console.log(`State ${state}`);
        return state;
      }
    }
  };

  const incre = (payload = 0) => {
    return {
      type: INCREMENT,
      payload,
    };
  };

  const decre = (payload = 0) => {
    return {
      type: DECREMENT,
      payload,
    };
  };
  const res = (payload = 0) => {
    return {
      type: RESET,
      payload,
    };
  };

  const [state, dispatch] = useReducer(result, val);

  const increment = () => {
    dispatch(incre(1));
  };
  const decrement = () => {
    dispatch(decre(1));
  };
  const reset = () => {
    dispatch(res(0));
  };

  return { state, increment, decrement, reset };
}
