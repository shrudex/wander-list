import { useState } from "react";

function App() {
  return (
    <div>
      <Logo />
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
        style={{ color: !isHovered ? "#fff500" : "#fff" }}
      >
        -
      </p>
      <h1
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ color: isHovered ? "#fff500" : "#fff" }}
      >
        WanderList
      </h1>
      <p
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ color: !isHovered ? "#fff500" : "#fff" }}
      >
        -
      </p>
    </div>
  );
}
function Form() {}
function List() {}
function Stats() {}

export default App;
