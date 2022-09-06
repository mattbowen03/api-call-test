import "./App.css";
import { useState } from "react";
import { getReddit } from "./utils/getReddit";

function App() {
  const [reddit, setReddit] = useState("Click to access Reddit API...");

  const handleClick = async () => {
    const temp = await getReddit();
    setReddit(temp);
  };

  return (
    <div className='App'>
      <div className='reddit-wrapper'>
        <h1>Reddit!</h1>
        <h2>{reddit}</h2>
        <button onClick={handleClick}>Get Reddit</button>
      </div>
    </div>
  );
}

export default App;
