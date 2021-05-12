import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);

  const toggleCounterHandler = () => {
    dispatch({
      type: "toggle",
    });
  };

  const increamentHandler = () => {
    dispatch({
      type: "increament",
    });
  };

  const decreamentHandler = () => {
    dispatch({
      type: "decreament",
    });
  };

  const increaseHandler = () => {
    dispatch({
      type: "increase",
      value: 5,
    });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={increaseHandler}>Increase By 5</button>
        <button onClick={increamentHandler}>Increament</button>
        <button onClick={decreamentHandler}>Decreament</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
