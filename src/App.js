import { useState } from "react";
import Logo from "./Logo.js";
import Form from "./Form.js";
import List from "./List.js";
import Stats from "./Stats.js";

function App() {
  const [items, setItem] = useState([]);

  function addItems(item) {
    setItem((items) => [...items, item]);
  }

  function delItems(id) {
    setItem((items) => items.filter((item) => item.id !== id));
  }

  function toggleItem(id) {
    setItem((item) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="body">
      <Logo />
      <Form onAddItems={addItems} />
      <List
        item={items}
        onDelItems={delItems}
        onCheck={toggleItem}
        setItem={setItem}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
