import { useState } from "react";
import useInput from "../hooks/InputValid";
import styled from "styled-components";

const InputTypeValidate = () => {
  const { value, setValue, handleChange, isValid, validIsDate } = useInput("");
  const [state, setState] = useState();
  const [sec, setSec] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValid && value.length > 6 && validIsDate) {
      setState("Form is valid");
      setValue("");
    } else {
      setSec("Form is Invalid");
    }
  };

  return (
    <Container>
      <Exercise>Exercise 2:</Exercise>
      <form onSubmit={handleSubmit}>
        {state ? <Title>{state}</Title> : <Title2>{sec}</Title2>}
        <Input type="email" value={value} onChange={handleChange} />
        <Button type="submit">Submit</Button>
      </form>
    </Container>
  );
};

export default InputTypeValidate;

const Container = styled.div`
  width: 100%;
  height: 200px;
  background-color: rgb(0, 58, 108);
`;

const Title = styled.p`
  margin-left: 580px;
  color: green;
`;
const Title2 = styled.p`
  margin-left: 580px;
  color: red;
`;
const Exercise = styled.span`
  color: brown;
  margin-top: 100px;
  font-size: 30px;
`;

const Input = styled.input`
  width: 350px;
  height: 44px;
  margin-left: 540px;
  background-color: rgb(46, 215, 204);
  border-radius: 15px;
  border: none;
`;
const Button = styled.button`
  width: 70px;
  height: 47px;
  border-radius: 0 15px 15px 0;
  margin-left: -66px;
  background-color: rgb(34, 85, 85);
  color: #fff;
  border: none;
`;
