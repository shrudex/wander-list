export default function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((items) => items.packed === true).length;
  if (numItems === 0) {
    return (
      <div className="stats">
        <span className="material-symbols-outlined">airplane_ticket</span>
        <p>Start adding some items to your packing list!🚀</p>
      </div>
    );
  }
  return (
    <div className="stats">
      <span className="material-symbols-outlined">airplane_ticket</span>
      {numPacked !== numItems ? (
        <p>
          You have {numItems} items on your list, and you already packed{" "}
          {numPacked} ({Math.round((numPacked * 100) / numItems)}%)
        </p>
      ) : (
        <p>You got everything! Ready to go✈️</p>
      )}
    </div>
  );
}
