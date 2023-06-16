import { useState } from "react";
const initialItems = [
  { id: 1, item: "Passport", quantity: 2, packed: false },
  { id: 2, item: "Travel Documents", quantity: 2, packed: false },
  { id: 3, item: "T-Shirts", quantity: 9, packed: false },
  { id: 4, item: "Camera", quantity: 1, packed: true },
  { id: 5, item: "Charger", quantity: 3, packed: true },
  { id: 6, item: "Umbrella", quantity: 1, packed: false },
];
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
  const [desc, setDesc] = useState("");
  const [countVal, setcountVal] = useState(1);
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);

    if (!desc) return;
    const newItem = {id:1, desc, countVal, packed:false};
    console.log(newItem);

    setDesc("");
    setcountVal(1);
  }
  return (
    <div className="form">
      <form onSubmit={(e) => handleSubmit(e)} className="add-forn" action="">
        <h3>What do you need for your ✨ trip?</h3>
        <select name="" id="" value={countVal} onChange={(e) => setcountVal(Number(e.target.value))}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Item"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
}
function List() {
  return (
    <div className="list">
      <ul className="list-items">
        {initialItems.map((i) => (
          <Item i={i} key={i.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ i }) {
  return (
    <li>
      <span style={i.packed ? { textDecoration: "line-through" } : {}}>
        {i.quantity} {i.item}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <div className="stats">
      <span className="material-symbols-outlined">airplane_ticket</span>
      <p>You have 6 items on your list, and you already packed 0 (0%)</p>
    </div>
  );
}

export default App;
