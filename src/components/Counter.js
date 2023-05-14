import React from "react";
import { useCounter } from "../hooks/CounterHook";
import { styled } from "styled-components";

export const Counter = () => {
  const { count, incrementLevel, decrementLevel, reset } = useCounter(4, 0);
  return (
    <Container>
      <Exercise>Exercise 1:</Exercise>
      <Block>
        <Btn1 onClick={incrementLevel}></Btn1>
        <Count>{count}</Count>
        <Btn2 onClick={decrementLevel}></Btn2>
      </Block>
      <Reset onClick={reset}>Reset</Reset>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 300px;
  background-color: #000d0f;
`;

const Exercise = styled.span`
  color: brown;
  text-align: center;
  margin-top: 100px;
  font-size: 30px;
`;
const Block = styled.div`
  display: flex;
  width: 300px;
  height: 100px;
  background-color: yellow;
  border-radius: 60px;
  margin-top: 43px;
  margin-left: 550px;
  border: 2px solid rgb(255, 255, 255, 0.2);
  background-color: #000d0f;
`;
const Count = styled.p`
  position: absolute;
  top: 52px;
  left: 700px;
  font-size: 50px;
  color: #00deff;
`;
const Btn1 = styled.p`
  position: absolute;
  top: 115px;
  left: 770px;
  cursor: pointer;
  width: 12px;
  height: 12px;
  border-top: 2px solid #fff;
  border-left: 2px solid #fff;
  transform: translateY(-50%) rotate(135deg);
  z-index: 2;
`;
const Btn2 = styled.p`
  position: absolute;
  top: 115px;
  left: 645px;
  cursor: pointer;
  width: 12px;
  height: 12px;
  border-top: 2px solid #fff;
  border-left: 2px solid #fff;
  transform: translateY(-50%) rotate(315deg);
  z-index: 2;
`;

const Reset = styled.div`
  margin-top: 10px;
  margin-left: 670px;
  font-size: 30px;
  width: 60px;
  height: 30px;
  border-radius: 15px;
  cursor: pointer;
  color: #00deff;
`;
