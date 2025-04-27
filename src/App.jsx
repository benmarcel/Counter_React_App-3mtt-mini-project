import { useState } from "react";

import "./App.css";
import CounterCard from "./components/CounterCard";

function App() {
  const [count, setCount] = useState(0);

  const [msg, setMsg] = useState("")
  // increase function
  const increase = () => {
    if (count < 100) {
      setCount(count + 1);
    } else {
      setMsg("You have reached the limit click reset to start again")
      setTimeout(()=>{
        setMsg("")
      }, 2000);
    }
  };

  // decrease function
  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setMsg("You have reached the limit click reset to start again")
      setTimeout(()=>{
        setMsg("")
      }, 2000)
    }
  };

  const reset = () => {
    setCount(0)
    setMsg("")
  }
  return (
    <>
      <div className="container">
        <h1>My counter App</h1>
        <h4 className="msg">{msg}</h4>
        <CounterCard
          count={count}
          handleDecrease={decrease}
          handleIncrease={increase}
          reset={reset}
        />

        
      </div>
    </>
  );
}

export default App;
