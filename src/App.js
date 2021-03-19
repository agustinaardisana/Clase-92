import React, { useState } from "react";
import Counter from "./components/Counter";
import "./App.scss";

// Hacer un contador que funcione de la siguiente manera
// - 0 +

// Cuando el usuario hace click en -, se resta un numero Cuando el usuario hace click en +, se suma un numero

// Hacer tres contadores que funcionen de la misma manera. Cuando hago click en el - o + de un contador, debe actualizarse SOLO el valor de ese contador, y no de los demas. (Tip: hay dos maneras principales de hacer esto: trata de identificar ambas)

// Una vez funcionando los tres contadores, agregar un boton que sea "Borrar todos", que vuelva el valor de todos los contadores a 0.

const App = () => {
  const [resetedValue, setReset] = useState(false);

  const handleClickReset = () => {
    setReset(true);
  };

  return (
    <div className="container">
      <Counter resetedValue={resetedValue} />
      <Counter resetedValue={resetedValue} />
      <Counter resetedValue={resetedValue} />
      <button className="clean-button" onClick={handleClickReset}>
        Borrar todos
      </button>
    </div>
  );
};

export default App;
