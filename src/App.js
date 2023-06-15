import { useState } from "react";

function App() {
  const [c, setC] = useState(0);
  const [s, setS] = useState(0);
  const currentDate = new Date();
  const today = currentDate.toDateString();
  currentDate.setDate(currentDate.getDate() + c);
  const nextDay = currentDate.toDateString();
  return (
    <>
      <div className="hordiv">
        <button onClick={()=> s>0 ? setS((s)=>s-1) : null}>-</button>
        <p>Step : {s}</p>
        <button onClick={()=> setS((s)=>s+1)}>+</button>
      </div>
      
      <div className="hordiv">
        <button onClick={()=> setC((c)=>c-s)}>-</button>
        <p>Count : {c}</p>
        <button onClick={()=> setC((c)=>c+s)}>+</button>
      </div>

      <div className="hor">
        <p>Today is {today}</p>
      </div>

      <div className="ans">
        <p>{c} days from today is {nextDay}</p>
      </div>

    </>
  );
}

export default App;
