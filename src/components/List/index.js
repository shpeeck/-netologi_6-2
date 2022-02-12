import Card from "../Card";
import Button from "../Button";
import "./style.css";

export default function List({ data, func, del }) {
  return (
    <div>
      <h1>Notes</h1>
      <Button bClass={"list-button"} bName={" "} onClick={func} />
      <div className="card-list">
        {data.map((el) => (
          <Card key={el.id} id={el.id} content={el.body} del={del} />
        ))}
      </div>
    </div>
  );
}
