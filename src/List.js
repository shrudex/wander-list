import { useState } from "react";
import Item from "./Item";

export default function List({ item, onDelItems, onCheck, setItem }) {
  const [sortBy, setSort] = useState("input");
  let sortedItem;
  console.log(item);
  if (sortBy === "input") sortedItem = item;
  if (sortBy === "item")
    sortedItem = item.slice().sort((a, b) => a.item.localeCompare(b.item));
  if (sortBy === "packed")
    sortedItem = item
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <div className="contents">
        <ul className="list-items">
          {sortedItem.map((i) => (
            <Item i={i} key={i.id} onDelItems={onDelItems} onCheck={onCheck} />
          ))}
        </ul>
      </div>
      <div className="actions">
        <select
          name=""
          id="sort"
          value={sortBy}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="input">SORT BY INPUT ORDER</option>
          <option value="item">SORT BY ITEMS</option>
          <option value="packed">SORT BY PACKED STATUS</option>
        </select>
        <button onClick={() => setItem([])} id="clear">
          CLEAR
        </button>
      </div>
    </div>
  );
}
