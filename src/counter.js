import React from "react";
import { useState } from "react";
import './style.css'

function Counter() {
  const [counter, setCounter] = useState(0);
  function HandleIncrement(event) {
    event.preventDefault()
    setCounter((prev)=>prev + 1)
  }

  function HandleDecrement(event) {
    event.preventDefault()
    setCounter((prev)=>prev - 1)
  }

  return (
    <section ClassName="countert">
      <div>{counter}</div>
      <button onClick={HandleIncrement} ClassName="counterButton">
        Increment
      </button>
      <button onClick={HandleDecrement} ClassName="counterButton">Decrement</button>
    </section>
  );
}

export default Counter;
