import { useState } from "react";
import OtherData from "./OtherData";
import { deleteUser, upDate } from "./Utils";
import axios from "axios";
import TodosUser from "./TodosUser";

export default function User({ user }) {
  const [deleteItem, setDeleteItem] = useState(false);
  const [showOtherData, setShowOtherData] = useState(false);
  const [upDateInput, setUpDateInput] = useState({});
  const [isClicked, setIsClicked] = useState(false);
  const handelUpDate = async () => {
    try {
      await upDate(user.id);
    } catch (error) {
      console.log(error);
    }
  };

  const handelDeleteUser = async () => {
    try {
      const resp = await deleteUser(user.id);
      if (resp) setDeleteItem(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div
        style={{
          display: "column",
          ColumnDirection: "column",
          border: "1px solid black",
          paddingBorder: "12px",
          padding: " 50px ",
          borderRadius: "25px ",
          backgroundColor: isClicked ? "orange" : "initial",
        }}
        onClick={() => setIsClicked(true)}
      >
        {isClicked && <TodosUser id={user?.id} />}
        <div style={{ display: "flex", flexDirection: "column" }}>
          ID : {user?.id} <br />
          Name :{" "}
          <input
            type="text"
            name="Name"
            value={upDateInput.name ? upDateInput.name : user?.name}
            onInput={(e) => setUpDateInput({ name: e.target.value })}
          />
          Email :
          <input
            type="text"
            value={upDateInput.email ? upDateInput.email : user?.email}
            name="Email"
            onChange={(e) => setUpDateInput({ email: e.target.value })}
          />{" "}
          <br />
          <div style={{ display: "flex", flexDirection: "rows" }}>
            <button
              style={{ backgroundColor: "gray" }}
              onMouseOver={() => setShowOtherData(true)}
              onMouseLeave={() => setShowOtherData(false)}
            >
              Other Data
              {showOtherData && <OtherData user={user} id={user?.id} />}
            </button>
            <span></span>
            <span></span>
            <button
              onClick={handelUpDate}
              style={{ backgroundColor: "yellow" }}
            >
              UpDate
            </button>
            <br />

            <button
              onClick={handelDeleteUser}
              style={{ backgroundColor: "yellow" }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
