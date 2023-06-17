export default function Item({ i, onDelItems, onCheck }) {
  return (
    <li className="list-element">
      <input
        type="checkbox"
        name=""
        id=""
        value={i.packed}
        onChange={() => onCheck(i.id)}
      />
      <span style={i.packed ? { textDecoration: "line-through" } : {}}>
        {i.quantity} {"      "}
        {i.item}
      </span>
      <button onClick={() => onDelItems(i.id)} className="button-x">
        ❌
      </button>
    </li>
  );
}
