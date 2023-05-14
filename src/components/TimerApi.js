import { styled } from "styled-components";
import { useTimer } from "../hooks/TimerHook";

export const Timer = () => {
  const num = 1;
  const { minutes, seconds, handleStart, handleReset, handleStop } =
    useTimer(num);
  return (
    <Container>
      <Exercise>Exercise 3:</Exercise>
      <Block>
        <BlockSpan>
          <Span>{minutes}</Span>
          <TwoDots>:</TwoDots>
          <Span2>{seconds}</Span2>
        </BlockSpan>
        <BlockButton>
          <Btn onClick={handleStop}>Stop</Btn>
          <Btn2 onClick={handleReset}>Reset</Btn2>
          <Btn3 onClick={handleStart}>Start</Btn3>
        </BlockButton>
      </Block>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 400px;
  background-color: gray;
`;

const Exercise = styled.span`
  color: brown;
  margin-top: 100px;
  font-size: 30px;
`;

const Block = styled.div`
  width: 600px;
  height: 300px;
  background-color: cadetblue;
  margin-top: 30px;
  margin-left: 395px;
  border-radius: 15px;
`;

const BlockSpan = styled.div`
  display: flex;
`;

const Span = styled.span`
  position: relative;
  top: 50px;
  left: 200px;
  padding: 25px 25px 25px 25px;
  background-color: #fff;
  font-size: 30px;
`;

const Span2 = styled.span`
  position: relative;
  top: 50px;
  left: 280px;
  padding: 25px 25px 25px 25px;
  background-color: #fff;
  font-size: 30px;
`;

const TwoDots = styled.span`
  position: relative;
  top: 60px;
  left: 240px;
  font-size: 50px;
  color: #fff;
`;

const BlockButton = styled.div`
  display: flex;
  justify-content: space-around;
  width: 400px;
  margin-top: 150px;
  margin-left: 100px;
`;

const Btn = styled.button`
  display: inline-block;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  text-shadow: 0 -1px rgba(0, 0, 0, 0.5);
  user-select: none;
  padding: 0.7em 1.5em;
  border: 1px solid rgb(80, 32, 0);
  border-radius: 5px;
  outline: none;
  background: rgb(147, 80, 36)
    linear-gradient(rgb(106, 58, 26), rgb(147, 80, 36) 80%);
  box-shadow: 0 6px rgb(86, 38, 6), 0 3px 15px rgba(0, 0, 0, 0.4),
    inset 0 1px rgba(255, 255, 255, 0.3), inset 0 0 3px rgba(255, 255, 255, 0.5);
  transition: 0.2s;

  &:hover {
    background: rgb(167, 91, 41)
      linear-gradient(rgb(126, 69, 31), rgb(167, 91, 41) 80%);
  }
  &:active {
    background: rgb(120, 63, 25)
      linear-gradient(rgb(120, 63, 25) 20%, rgb(167, 91, 41));
    box-shadow: 0 2px rgb(86, 38, 6), 0 1px 6px rgba(0, 0, 0, 0.4),
      inset 0 1px rgba(255, 255, 255, 0.3),
      inset 0 0 3px rgba(255, 255, 255, 0.5);
    -webkit-transform: translate(0, 4px);
    transform: translate(0, 4px);
  }
`;

const Btn2 = styled.button`
  display: inline-block;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  text-shadow: 0 -1px rgba(0, 0, 0, 0.5);
  user-select: none;
  padding: 0.7em 1.5em;
  border: 1px solid rgb(80, 32, 0);
  border-radius: 5px;
  outline: none;
  background: rgb(147, 80, 36)
    linear-gradient(rgb(106, 58, 26), rgb(147, 80, 36) 80%);
  box-shadow: 0 6px rgb(86, 38, 6), 0 3px 15px rgba(0, 0, 0, 0.4),
    inset 0 1px rgba(255, 255, 255, 0.3), inset 0 0 3px rgba(255, 255, 255, 0.5);
  transition: 0.2s;

  &:hover {
    background: rgb(167, 91, 41)
      linear-gradient(rgb(126, 69, 31), rgb(167, 91, 41) 80%);
  }
  &:active {
    background: rgb(120, 63, 25)
      linear-gradient(rgb(120, 63, 25) 20%, rgb(167, 91, 41));
    box-shadow: 0 2px rgb(86, 38, 6), 0 1px 6px rgba(0, 0, 0, 0.4),
      inset 0 1px rgba(255, 255, 255, 0.3),
      inset 0 0 3px rgba(255, 255, 255, 0.5);
    -webkit-transform: translate(0, 4px);
    transform: translate(0, 4px);
  }
`;

const Btn3 = styled.button`
  display: inline-block;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  text-shadow: 0 -1px rgba(0, 0, 0, 0.5);
  user-select: none;
  padding: 0.7em 1.5em;
  border: 1px solid rgb(80, 32, 0);
  border-radius: 5px;
  outline: none;
  background: rgb(147, 80, 36)
    linear-gradient(rgb(106, 58, 26), rgb(147, 80, 36) 80%);
  box-shadow: 0 6px rgb(86, 38, 6), 0 3px 15px rgba(0, 0, 0, 0.4),
    inset 0 1px rgba(255, 255, 255, 0.3), inset 0 0 3px rgba(255, 255, 255, 0.5);
  transition: 0.2s;

  &:hover {
    background: rgb(167, 91, 41)
      linear-gradient(rgb(126, 69, 31), rgb(167, 91, 41) 80%);
  }
  &:active {
    background: rgb(120, 63, 25)
      linear-gradient(rgb(120, 63, 25) 20%, rgb(167, 91, 41));
    box-shadow: 0 2px rgb(86, 38, 6), 0 1px 6px rgba(0, 0, 0, 0.4),
      inset 0 1px rgba(255, 255, 255, 0.3),
      inset 0 0 3px rgba(255, 255, 255, 0.5);
    -webkit-transform: translate(0, 4px);
    transform: translate(0, 4px);
  }
`;
