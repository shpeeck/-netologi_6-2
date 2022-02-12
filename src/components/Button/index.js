import "./style.css";

export default function Button({ bClass, bName, onClick, onSubmit, id }) {
  return (
    <button className={bClass} onClick={onClick} onSubmit={onSubmit}>
      {bName}
    </button>
  );
}
