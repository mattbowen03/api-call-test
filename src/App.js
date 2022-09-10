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
        <h1>Api call to Reddit</h1>
        <h2>{reddit}</h2>
        <button onClick={handleClick}>Get Reddit</button>
        <p>
          Open dev tools to view console. You can see the API response object
          there. I just picked the easiest value to grab (kind: "Listing"). The
          further you drill down the more complex your mocked api test structure
          will be.
        </p>
        <p>
          <a
            href='https://github.com/mattbowen03'
            target='_blank'
            rel='noreferrer'>
            mattbowen03.dev
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
