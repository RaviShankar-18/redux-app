import { useDispatch, useSelector } from "react-redux";
import { add, subtract, multiply, divide } from "./Calculator.Slice";
const Calculator = () => {
  const value = useSelector((state) => state.calculator.result);

  const dispatch = useDispatch();
  return (
    <>
      <h1>Result:{value}</h1>

      <button onClick={() => dispatch(add(5))}>Add</button>
      <button onClick={() => dispatch(subtract(5))}>subtract</button>
      <button onClick={() => dispatch(multiply(5))}>multiply</button>
      <button onClick={() => dispatch(divide(5))}>divide</button>
    </>
  );
};

export default Calculator;
