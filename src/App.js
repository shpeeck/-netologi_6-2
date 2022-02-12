import { useState, useEffect } from "react";
import "./css/styles.css";
import List from "./components/List";
import Form from "./components/Form";

export default function App() {
  const [ndata, setNdata] = useState([]);
  const [text, setText] = useState();

  let loadTasks = async () => {
    await fetch("https://jsonplaceholder.typicode.com/posts?_limit=2")
      .then((response) => response.json())
      .then((data) => setNdata(data))
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const updateTodo = () => {
    loadTasks();
  };

  const addTodo = async (text) => {
    await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        body: text
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((res) => {
        if (res.status !== 201) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        data.id = new Date().getTime();
        setNdata((ndata) => [data, ...ndata]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  const del = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE"
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setNdata(
            ndata.filter((data) => {
              return data.id !== id;
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <List data={ndata} func={updateTodo} del={del} />
      <Form func={addTodo} value={text} change={onChangeText} />
    </div>
  );
}
