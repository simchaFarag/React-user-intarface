import { useEffect, useState } from "react";
import { getAll } from "./Utils";
//אפשר למחוק את הקומפוננטה
export default function ToDos() {
  const [todos, setTodo] = useState([]);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    try {
      const getToDos = async () => {
        const res = await getAll();
        if (res) return setTodo(res);
        else return null;
      };
      getToDos();
    } catch (error) {
      console.log(error);
      return null;
    }
  }, []);

  useEffect(() => {
    try {
      const getPosts = async () => {
        const resp = await getAll();
        if (resp) return setPosts(resp);
        else return null;
      };
      getPosts();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      <h1> Todos user</h1>
      {todos.map((todo) => {
        return (
          <div style={{ border: "1px black solid " }}>
            {todo?.title}
            <br />
            {String(todo?.completed)}
            <button>Mark Completed </button>
          </div>
        );
      })}
      <h1>Post user</h1>
      {posts.map(() => {
        return <div></div>;
      })}
    </>
  );
}
