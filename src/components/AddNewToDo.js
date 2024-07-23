import { useEffect, useState } from "react";
import { addTodo } from "./Utils";

export default function AddNewToDo() {
  const [addToDo, setNewToDo] = useState({ title: "", completed: false });

  useEffect(() => {
    const addTodoUser = async () => {
      const url = "https://jsonplaceholder.typicode.com/todos";
      const resp = await addTodo(url, addToDo);
      if (resp) console.log("excellent");
      else console.log("error in comp");
    };
    addTodoUser();
  }, [addToDo]);

  return (
    <div style={{ border: "1px solid black", padding: "3px" }}>
      Title:
      <input
        type="text"
        onChange={(e) => setNewToDo({ title: e.target.value })}
      />
      <br />
      <button style={{ backgroundColor: "yellow" }}>Add</button>
      <button style={{ backgroundColor: "yellow" }}>Cancel</button>
    </div>
  );
}
