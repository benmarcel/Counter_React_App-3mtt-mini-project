import { useState } from "react";

import "./App.css";
import CounterCard from "./components/CounterCard";

function App() {
  const [count, setCount] = useState(0);

  // increase function
  const increase = () => {
    if (count < 100) {
      setCount(count + 1);
    } else {
      return;
    }
  };

  // decrease function
  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      return;
    }
  };

  return (
    <>
      <div className="container">
        <h1>My counter App</h1>
        <CounterCard
          count={count}
          handleDecrease={decrease}
          handleIncrease={increase}
        />

        
      </div>
    </>
  );
}

export default App;
