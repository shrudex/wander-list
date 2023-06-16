import { useState } from "react";

function App() {
  return (
    <div>
      <Logo />
      <Form />
      <List />
      <Stats />
    </div>
  );
}

function Logo() {
  const [isHovered, setColor] = useState(false);
  const handleMouseEnter = () => {
    setColor(true);
  };
  const handleMouseLeave = () => {
    setColor(false);
  };
  return (
    <div className="logo">
      <p
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ color: !isHovered ? "#fff500" : "#F1F6F9" }}
      >
        -
      </p>
      <h1
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ color: isHovered ? "#fff500" : "#F1F6F9" }}
      >
        WanderList
      </h1>
      <p
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ color: !isHovered ? "#fff500" : "#F1F6F9" }}
      >
        -
      </p>
    </div>
  );
}
function Form() {
  return <div className="form">
    <p>What do you need for your ✨ trip?</p>
    
  </div>;
}
function List() {
  return <div className="list"></div>;
}
function Stats() {
  return (
    <div className="stats">
      <span class="material-symbols-outlined">airplane_ticket</span>
      <p>You have 6 items on your list, and you already packed 0 (0%)</p>
    </div>
  );
}

export default App;
