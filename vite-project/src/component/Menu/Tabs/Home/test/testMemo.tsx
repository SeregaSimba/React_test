import React, { memo } from "react";
import { useState, useMemo, useCallback, useEffect } from "react";

export function TestMemo() {
  const [count, setCount] = useState(0);
  const [firstHuc, setFirstHuc] = useState("useMemo");
  const [secondHuc, setSecondHuc] = useState("UseCallback");
  const [darc, setDarc] = useState(false);

  const temDarc = {
    backgroundColor: darc ? "#a3a3a3" : "black",
  };

  const setDarcThim = () => {
    setDarc((thim) => !thim);
  };

  function calculeite() {
    setCount(count + 1);
    console.log(count);
  }

  const hoocs = useMemo(() => ({ firstHuc, secondHuc }), [firstHuc, secondHuc]); // при использовании useMemo мы экономи ресурс памяти и рендеринг происходит только в тех случаех когда происходят изменения в заданых параметрах компонентов и зависимостей, за счет меморизации

  const rezetCount = useCallback(() => {
    // позволяет сохранить результат первого рендеринга и вичисления работы функции и не перерендыривает ее каждый раз а только когда или если она меняется
    setCount(0);
  }, []); // принимает массив зависимостей, если нам не нужно чтото отслежовать нужен пустой массив

  return (
    <div style={{ ...temDarc }}>
      <Taitel firstHuc={firstHuc} secondHuc={secondHuc} />
      <TitleHucs hoocs={hoocs} rezetCount={rezetCount} />
      <CountTitle count={count} />
      <button onClick={calculeite}>+1</button>
      <button onClick={setDarcThim}>Darc</button>
    </div>
  );
}

const TitleHucs = memo(({ hoocs, rezetCount }) => {
  // в случае диструкторизации масива происходит перерендар страницы, что бы этого не происходили нужно пользоваться useMamo
  const { firstHuc, secondHuc } = hoocs;
  return (
    <>
      <h2>
        Hello a em Grut firstHuc: {firstHuc} secondHuc: {secondHuc}
        <button onClick={rezetCount}>Reset</button>
      </h2>
    </>
  );
});

const Taitel = memo(
  ({ firstHuc, secondHuc }) => {
    // Memo говорит реакту проверять компонент и если нет измененить не рендорить его
    return (
      <>
        <h2>
          Hello a em Grut firstHuc: {firstHuc} secondHuc: {secondHuc}
        </h2>
      </>
    );
  },
  (oldProps, newProps) => {
    if (oldProps !== newProps) {
      return false;
    } // та логика которая стоит по умолчанию
    return true;
  }
); // , так же опциональная логика в которой задаем условия на проверку рендера заранее стоит булиан

function CountTitle({ count }) {
  const res = count;

  useEffect(() => {
    console.log(`new render Result = ${res}`);
  }, [res]);

  return (
    <>
      <h3> hello a em Count: {res}</h3>
    </>
  );
}
