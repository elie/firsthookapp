import { useState } from "react"

function useCounter(){
  const [count, setCount] = useState(0)

  function decrement(){
    setCount(count => count - 1)
  }

  function increment(){
    setCount(count => count + 1)
  }

  return { count, decrement, increment }
}

export default useCounter;