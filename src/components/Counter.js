import React, { useState } from "react";
import "./Counter.scss";

const Counter = ({ resetedValue }) => {
  const [numberOfClicks, increaseFactor] = useState(0);

  const handleClickPositive = () => {
    increaseFactor(numberOfClicks + 1);
  };

  const handleClickNegative = () => {
    increaseFactor(numberOfClicks - 1);
  };

  return (
    <div className="counter-container">
      <button onClick={handleClickNegative}>-</button>
      <span>{resetedValue ? 0 : numberOfClicks}</span>
      <button onClick={handleClickPositive}>+</button>
    </div>
  );
};
export default Counter;
