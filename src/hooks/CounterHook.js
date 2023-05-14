import { useState } from "react";

export const useCounter = (number, zero) => {
  const [count, setCount] = useState(zero);

  function incrementLevel() {
    setCount((prev) => prev + number);
  }
  function decrementLevel() {
    setCount((prev) => prev - number);
  }
  function reset() {
    setCount((prev) => (prev = zero));
  }

  return {
    count,
    incrementLevel,
    decrementLevel,
    reset,
  };
};
