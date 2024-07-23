import { useState } from "react";
import { useEffect } from "react";
import { getAll } from "./Utils";
import OtherData from "./OtherData";
import User from "./User";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [showOtherData, setShowOtherData] = useState(false);

  useEffect(() => {
    try {
      const getAllUsers = async () => {
        const url = "https://jsonplaceholder.typicode.com/users";
        const getUsers = await getAll(url);
        if (getUsers) return setUsers(getUsers);
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
      {users.map((user) => {
        return <User key={user.id} user={user} />;
      })}
    </>
  );
}
