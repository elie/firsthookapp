import React, { useContext } from "react"
import CounterContext from "./counterContext";

function Counter(){
  const { count, increment, decrement } = useContext(CounterContext)
  return (
    <div className="App">
      <h1>I AM A COUNTER COMPONENT!</h1>
      <h2>The count is {count}</h2>
      <div>
        <button onClick={increment}>+</button>
      </div>
      <br/>
      <div>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  )
}

export default Counter;