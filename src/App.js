import { useState } from "react";

function App() {
  const [items, setItem] = useState([]);

  function addItems(item) {
    setItem((items) => [...items, item]);
  }
  return (
    <div className="body">
      <Logo />
      <Form onAddItems={addItems} />
      <List item={items} />
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
function Form({ onAddItems }) {
  const [desc, setDesc] = useState("");
  const [countVal, setcountVal] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);

    if (!desc) return;
    const newItem = {
      item: desc,
      quantity: countVal,
      packed: false,
      id: Date.now(),
    };
    console.log(newItem);
    onAddItems(newItem);

    setDesc("");
    setcountVal(1);
  }
  return (
    <div className="form">
      <form onSubmit={(e) => handleSubmit(e)} className="add-forn" action="">
        <h2>What do you need for your ✨ trip?</h2>
        <div className="input-butt">
          <select
            name=""
            id="selector"
            value={countVal}
            onChange={(e) => setcountVal(Number(e.target.value))}
          >
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
            id="input-text"
            onChange={(e) => setDesc(e.target.value)}
          />
          <button className="add-button">Add</button>
        </div>
      </form>
    </div>
  );
}
function List({ item }) {
  return (
    <div className="list">
      <ul className="list-items">
        {item.map((i) => (
          <Item i={i} key={i.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ i }) {
  return (
    <li className="list-element">
      <span style={i.packed ? { textDecoration: "line-through" } : {}}>
        {i.quantity} {"      "}
        {i.item}
      </span>
      <button className="button-x">❌</button>
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
