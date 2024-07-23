import { useState } from "react";

export default function AddNewUser() {
  const [addUser, setAddUser] = useState({});
  const [error, setError] = useState("");
  const handelSubmit = (e) => {
    e.prevetDefault();
  };
  return (
    <form onSubmit={handelSubmit}>
      <div style={{ border: "1px solid black", padding: "3px" }}>
        Name:
        <input
          type="text"
          onChange={(e) => {
            if (e.target.value === " ") setError("is empty");
            else {
              setAddUser(e.target.value);
            }
          }}
        />
        <br />
        Email :
        <input type="text" onChange={(e) => setAddUser(e.target.value)} />
        <br />
        <button type="submit" style={{ backgroundColor: "yellow" }}>
          Add
        </button>
        <button style={{ backgroundColor: "yellow" }}>Cancel</button>
      </div>
    </form>
  );
}
