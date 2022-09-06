import "./App.css";
import { useState } from "react";
import { getReddit } from "./utils/getReddit";

function App() {
  const [count, setCount] = useState(0);
  const [reddit, setReddit] = useState("Loading...");

  const handleIncrement = () => {
    console.log("going up!");
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };

  const handleClick = async () => {
    const temp = await getReddit();
    setReddit(temp);
  };

  return (
    <div className='App'>
      <div className='counter-wrapper'>
        <h1>Counter!</h1>
        <input type='number' value={count} data-testid='poop'></input>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleIncrement}>Increment</button>
      </div>
      <div className='reddit-wrapper'>
        <h1>Reddit!</h1>
        <h2>{reddit}</h2>
        <button onClick={handleClick}>Get Reddit</button>
      </div>
    </div>
  );
}

export default App;
