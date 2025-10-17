import { createContext, useContext } from "react";

const onContext = createContext("Hello a em Context"); // создаем первоночальный контекст который будет привязан к компонентам наследникам

export function TestContext() {
  return (
    <>
      <CreateContext />
      <CreateContext2 />
    </>
  );
}

function CreateContext() {
  const result = useContext(onContext); // мы можем напрямую привязать контекст к потомкам

  return (
    <>
      <h2>{`Hello a em cihld UseContext: ${result}`}</h2>
    </>
  );
}

function CreateContext2() {
  // или задать новый контекст используя Провайдер
  return (
    <>
      <onContext.Provider value={`New Context children`}>
        <CreateContext />
      </onContext.Provider>
    </>
  );
}
