import { useEffect, useState } from "react";

export const useTimer = (num) => {
  const [timeLeft, setTimeLeft] = useState(num * 60);
  const [isCount, setIsCount] = useState(false);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft - minutes * 60;

  useEffect(() => {
    const interval = setInterval(() => {
      isCount && setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : 0));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [isCount]);

  const handleStart = () => {
    setIsCount(true);
  };
  const handleStop = () => {
    setIsCount(false);
  };
  const handleReset = () => {
    setIsCount(false);
    setTimeLeft(num * 60);
  };

  return {
    seconds,
    minutes,
    handleStart,
    handleReset,
    handleStop,
  };
};
