import { useState } from "react";

const useInput = () => {
  const [value, setValue] = useState("");

  const isEmailValid = () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isDateValid = () => /^\d{2}\.\d{2}\.\d{4}$/i;

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const isValid = isEmailValid(value);
  const validIsDate = isDateValid(value);

  return {
    value,
    setValue,
    handleChange,
    isValid,
    validIsDate,
  };
};

export default useInput;
