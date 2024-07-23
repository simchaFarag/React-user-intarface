import { useEffect, useState } from "react";
import { getAll } from "./Utils";
import axios from "axios";
import User from "./User";

export default function Searchchatjpg() {
  const [search, setSearch] = useState("");
  const [getSearch, setGetSearch] = useState([]);
  const [isInServer, setIsInServer] = useState(false);
  const handelSearch = async () => {
    try {
      const resp = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );
      const filteredResult = resp.data.filter(
        (user) =>
          user.name.toLowerCase().includes(search.toLowerCase()) ||
          user.email.toLowerCase().includes(search.toLowerCase())
      );

      setGetSearch(filteredResult);
      setIsInServer(filteredResult.length > 0);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      search:
      <input
        type="text"
        value={search}
        onInput={(e) => setSearch(e.target.value)}
      />
      <br />
      <button onClick={handelSearch}>Search</button>
      {isInServer ? (
        getSearch.map((user) => {
          return <User key={user.id} user={user} />;
        })
      ) : (
        <p> search agin </p>
      )}
    </>
  );
}
