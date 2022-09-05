import "./App.css";
import { useState } from "react";
import getReddit from "./utils/getReddit";

function App() {
  const [count, setCount] = useState(0);
  const [reddit, setReddit] = useState("Loading...");

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };

  const handleClick = () => {
    setReddit(getReddit());
  };

  return (
    <div className='App'>
      <div className='counter-wrapper'>
        <h1>Counter!</h1>
        <h2>{count}</h2>
        <button onClick={handleDecrement}>Increment</button>
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
