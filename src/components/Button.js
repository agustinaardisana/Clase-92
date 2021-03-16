import React, { useState } from "react";

const Button = () => {
  const [resetValue, setCounterToZero] = useState(0);

  const handleClick = () => {
    setCounterToZero(resetValue);
    console.log(resetValue);
  };

  return <button onClick={handleClick}>Borrar Todos</button>;
};

export default Button;
