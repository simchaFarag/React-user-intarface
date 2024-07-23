import { useState } from "react";
import { addTasks } from "./Utils";

export default function AddNewPost() {
  const [addPost, setNewPost] = useState("");
  const handelAdd = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const resp = await addTasks(url, 1, addPost);
    if (resp) return console.log("excellent");
    else console.log("eroor in comp");
  };

  const AddBody = (e) => {
    setNewPost((prevPost) => {
      return { ...prevPost, body: e.target.value };
    });
  };
  return (
    <div style={{ border: "1px solid black",padding:"3px" }}>
      Title: <input type="text" onChange={(e) => setNewPost(e.target.value)} />
      <br />
      Body: <input type="text" onChange={AddBody} />
      <br />
      <button style={{ backgroundColor: "yellow" }} onClick={handelAdd}>
        Add
      </button>
      <button style={{ backgroundColor: "yellow" }}>Cancel</button>
    </div>
  );
}
