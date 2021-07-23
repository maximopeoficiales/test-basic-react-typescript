import React, { useState } from "react";

const Counter = ({ numero = 10 }) => {
  const [counter, setCounter] = useState(numero);
  const handlerClick = (e: any) => {
    setCounter(counter + 1);
  };
  return (
    <>
      <div data-testid="Counter">
        <h4>Contador Basico</h4>
        <p>{counter}</p>
        <button onClick={handlerClick}>+1</button>
        <button onClick={() => setCounter(numero)}>Reset</button>
        <button onClick={() => setCounter(counter - 1)}>-1</button>
      </div>
    </>
  );
};

export default Counter;
