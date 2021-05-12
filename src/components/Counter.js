import { useSelector, useDispatch } from "react-redux";
import { counterActions } from '../store/counter-slice';

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  const increamentHandler = () => {
    dispatch(counterActions.increament());
  };

  const decreamentHandler = () => {
    dispatch(counterActions.decreament());
  };

  // internal: { type: SOME_UNIQUE_ID, payload: 10}
  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
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
