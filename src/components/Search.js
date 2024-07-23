import { useMemo, useState } from "react";
import { useEffect } from "react";
import { getAll } from "./Utils";

export default function Search() {
  const [users, setUsers] = useState([]);
  const [searchUser, setSearchUser] = useState("");

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
  }, [searchUser]);

  const arrSearch = useMemo(() => {
    return users.filter((user) => {
      return (
        (user.name && user.name.toLowerCase().includes(searchUser.toLowerCase())) ||
        (user.email && user.email.toLowerCase().includes(searchUser.toLowerCase())) ||
        (user.address && user.address.city && user.address.city.toLowerCase().includes(searchUser.toLowerCase())) ||
        (user.address && user.address.street && user.address.street.toLowerCase().includes(searchUser.toLowerCase())) ||
        (user.address && user.address.zipcode && user.address.zipcode.toLowerCase().includes(searchUser.toLowerCase()))
      );
    });
  }, [users, searchUser]);

  return (
    <>
      Search:
      <input
        type="text"
        onChange={(e) => setSearchUser(parseInt(e.target.value))}
      />
      <br />
      { searchUser && arrSearch.map((user) => {
        return <h1 key={user.id}>{user.name}</h1>;
      })}
      <br />
      
      <br />
    </>
  );
}
