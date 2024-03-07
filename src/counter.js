import React from "react";
import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  function HandleIncrement(event) {
    event.preventDefault();
    setCounter((prev) => prev + 1);
  }

  function HandleDecrement(event) {
    event.preventDefault();
    setCounter((prev) => prev - 1);
  }

  return (
    <section className="counter">
      <div className="appear">{counter}</div>
      <button onClick={HandleIncrement} className="counterButton">
        Increment
      </button>
      <button onClick={HandleDecrement} className="counterButton">
        Decrement
      </button>
    </section>
  );
}

export default Counter;
