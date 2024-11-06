import React, { useState } from "react";
type CounterNumberProps = {
    Number:number
}
const CounterNumber:React.FC<CounterNumberProps> = ({Number}) => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount((preCount) => preCount + Number);
  };
  const handleDecrement = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - Number : 0));
  };

  const handleReset = () => {
    setCount(0);
  };
  return (
    <>
      <div>
        <p>Count : {count}</p>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleIncrement}>Increment</button>
      </div>
    </>
  );
};

export default CounterNumber;
