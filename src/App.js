import { Counter } from "./components/Counter";
import InputTypeValidate from "./components/Input";
import { Timer } from "./components/TimerApi";
const App = () => {
  return (
    <div>
      <Counter />
      <InputTypeValidate />
      <Timer />
    </div>
  );
};

export default App;
