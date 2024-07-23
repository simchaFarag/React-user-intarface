import { useEffect, useState } from "react";
import { getById, upDate } from "./Utils";
import AddNewToDo from "./AddNewToDo";

export default function TodosUser(id) {
  const [todo, setTodo] = useState([]);
  const [post, setPost] = useState([]);
  const [todoCompleted, setTodoCompleted] = useState(false);
  const [newTodo, setNewTodo] = useState(false);
  // useEffect(() => {
  //   const upDateTodoCompleted = async () => {
  //     const resp = await upDate( 1, true);
  //     if (resp) setTodoCompleted(true);
  //     else console.log("not have a problem");
  //   };
  //   upDateTodoCompleted();
  // }, []);

  useEffect(() => {
    try {
      const getTodo = async () => {
        const url = "https://jsonplaceholder.typicode.com/todos";
        const resp = await getById(url, 1);
        if (resp) setTodo(resp);
        else console.log("eroor in compo");
      };
      getTodo();
    } catch (error) {
      console.log(error + "error in comp useEffect");
    }
  }, []);

  useEffect(() => {
    try {
      const getPost = async () => {
        const url = "https://jsonplaceholder.typicode.com/posts";
        const res = await getById(url, 1);
        if (res) setPost(res);
        else console.log("error in post");
      };
      getPost();
    } catch (error) {
      console.log(error + "error in comp useEffect");
    }
  }, []);

  return (
    <>
      <strong>Todo </strong>
      <button
        onClick={() => setNewTodo(true)}
        style={{ backgroundColor: "yellow" }}
      >
        {newTodo && <AddNewToDo />}
        Add
      </button>
      <div style={{ border: "1px solid black ", padding: "12px" }}>
        {todo.map((todo) => (
          <div style={{ border: " 2px solid purple", padding: "5px" }}>
            Titel : {todo.title} <br />
            Completed :{String(todo.completed)}
            <br />
            {String(todo.completed) ? (
              <button onClick={(e) => setTodoCompleted(e.target.value)}>
                Mark Completed
              </button>
            ) : (
              String(todo.completed)
            )}
          </div>
        ))}
      </div>
      <br />
      <br />
      <strong>Post </strong>
      <button style={{ backgroundColor: "yellow" }}>Add</button>
      <div style={{ border: "1px solid black", padding: "12px" }}>
        {post.map((p) => (
          <div style={{ border: "2px solid purple", padding: "5px" }}>
            <strong> Title: </strong>
            {p.title}
            <br />
            <strong> Body: </strong> {p.body}
          </div>
        ))}
      </div>
    </>
  );
}
