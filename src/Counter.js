import { useState } from "react";
import styles from "./Counter.module.css";

function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    if (count < 10) {
      setCount(count + 1);
    }
  }

  function handleDecrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  let color = styles.green;
  if (count >= 5 && count <= 9) {
    color = styles.blue;
  } else if (count === 10) {
    color = styles.red;
  }

  return (
    <div>
      <h1 className={color}>{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default Counter;
