import { useContext } from "react";
import React from "react";
const Context = React.createContext("Book");

export function Test5() {
  const result = useContext(Context);
  return (
    <>
      <div>{result}</div>
      <TestApp />
    </>
  );
}

function TestApp() {
  const result2 = useContext(Context);
  return <div>{result2}</div>;
}
