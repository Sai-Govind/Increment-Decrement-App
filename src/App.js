import { useState } from "react";
import "./App.css";

function App() {
  // let count=0;
  const [count,setcount]=useState(0);
  const decreaseHandler=()=>{
    setcount(count-1);
  };
  const increasehandler=()=>{
    setcount(count+1);
  }
  const resethandler=()=>{
    setcount(0);
  }
  return (
    <div className="flex flex-col items-center justify-center bg-[#344151] mx-auto w-[100%] h-[100vh] gap-10 font-sans text-2xl font-medium">
      <h3 className="text-[#0398d4]">Increment & Decrement</h3>
      <div className="flex border-2 py-3 bg-white gap-x-2 items-center">
        <button className="font-semibold px-10 text-5xl border-r-2 border-solid border-black" onClick={decreaseHandler}>-</button>
        <div className="font-semibold px-10 text-5xl border-r-2 border-solid border-black">{count}</div>
        <button className="font-semibold px-10 text-5xl" onClick={increasehandler}>+</button>
      </div>
      <button className="text-white font-light bg-[#0398d4] px-4 py-2" onClick={resethandler}>Reset</button>
    </div>
  );
}

export default App;
