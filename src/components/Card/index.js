import "./style.css";
import Button from "../Button";

export default function Card({ id, content, del }) {
  const handleDelete = () => {
    del(id);
  };

  return (
    <div className="card">
      <h3>{content}</h3>
      <Button bClass={"card-button"} bName={"X"} onClick={handleDelete} />
    </div>
  );
}
