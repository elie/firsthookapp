import './App.css';
import useCounter from './useCounter';
import Counter from './Counter';
import CounterContext from './counterContext';

function App() {

  const { count, increment, decrement } = useCounter()
  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      <div className="App">
        <h1>Here is our counter!</h1>
        <h2>The count is {count}</h2>
        <div>
        <button onClick={increment}>+</button>
        </div>
        <br />
        <div>
          <button onClick={decrement}>-</button>
        </div>
        <Counter />
        <Counter />
      </div>
    </CounterContext.Provider>
  );
}

export default App;
