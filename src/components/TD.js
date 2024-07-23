import { useEffect, useState } from "react";
import { getAll } from "./Utils";
import Users from "./Users";

export default function TD() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    try {
      const getAllUsers = async () => {
        const url = "https://jsonplaceholder.typicode.com/todos";
        const getTD = await getAll(url);
        if (getTD) return setTodos(getTD);
        else return null;
      };
      getAllUsers();
    } catch (e) {
      console.log(e);
      return null;
    }
  }, []);
  return (
    <>
      <div style={{ border: "1px solid black" }}>
        {todos.map((todo) => {
          return (
            <div
              key={todo.id}
              style={
                todo?.completed
                  ? { border: " 1px solid green " }
                  : { border: " 1px solid red " }
              }
            >
              {todo?.title} <br /> {String(todo?.completed)}
            </div>
          );
        })}
      </div>
    </>
  );
}
