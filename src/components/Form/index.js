import Button from "../Button";
import "./style.css";

export default function Form({ func, value, change }) {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    func(e.target.text.value);
    e.target.text.value = "";
  };

  return (
    <div>
      <h5>New note</h5>
      <form className="form" name="form" onSubmit={handleOnSubmit}>
        <textarea name="text" onChange={change}></textarea>
        <Button bClass={"input-button"} bName={" "} onSubmit={handleOnSubmit} />
      </form>
    </div>
  );
}
