import {
  useEffect,
  useState,
  useContext,
  createContext,
  useMemo,
  useCallback,
  useReducer,
} from "react";

export function ComponentContext() {
  return (
    <>
      <div>
        <App />
      </div>
    </>
  );
}

const Context = createContext("hello");

function App() {
  const [count, incrementButton, decrementButton, nulButton] = useCalculeite(0);

  const context = useContext(Context);

  return (
    <>
      <div>
        <Context.Provider value={context}>
          <h3>count: {count}</h3>
          <button onClick={incrementButton}> Increment</button>
          <button onClick={decrementButton}> Dencrement</button>
          <button onClick={nulButton}> Reset</button>
        </Context.Provider>
      </div>
    </>
  );
}

function useCalculeite(state: any) {
  const [count, setCount] = useState(state);

  const incrementButton = () => {
    setCount((count: number) => count + 1);
  };

  const decrementButton = () => {
    setCount((count: number) => count - 1);
  };

  const nulButton = () => {
    setCount(0);
  };

  return [count, incrementButton, decrementButton, nulButton];
}
