import { useEffect, useState } from "react";

import ButtonPropsApp from "./ButtonPropsApp";

const CounterApp = ({ initialState }) => {
  const [counter, setCounter] = useState(initialState);
  //useState: variable de estado, función para cambiar el valor de la variable, entre paréntesis va el valor inicial que tendrá la variable.

  //   let counter = 0;

  // useEffect(() => {
  //   const timer = setInterval(() => console.log("tick"), 1000);

  //   return () => {
  //     clearInterval(timer); // limpieza
  //     console.log("Componente desmontado");
  //   };
  // }, []);

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <div>
      <h2 style={{ fontSize: "80px" }}>{counter}</h2>
      <div>
        <ButtonPropsApp title="+1" action={increment} />
        <ButtonPropsApp title="Reset" action={reset} />

        <ButtonPropsApp title="-1" action={decrement} />
      </div>
    </div>
  );
};

export default CounterApp;
