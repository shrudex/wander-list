import { useState } from "react";

export default function Form({ onAddItems }) {
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
