import { useState } from "react";
import { useEffect } from "react";
import { getAll, getById, getWithFilter } from "./Utils";
import User from "./User";

const obj = { a: 5, b: 4, d: { e: 2 } };

const a = obj.a;
const b = obj.b;
const c = obj.c ?? 4;
const d = obj.d;

const ar = [3, 4, 4, 7];

const item1 = ar[0];
const item2 = ar[1];

const [sfsdf, ereg, ...rest] = ar;

const {
  a: a2,
  b: b2,
  c: c2 = 5,
  d: { e },
} = obj;

function printA(obj) {
  console.log(obj.a);
}

function printA2({ a }) {
  console.log(a);
}

printA(obj);

printA2(obj);

export default function UserContainer({ user }) {
  const [isAllComleted, setIsAllComleted] = useState([]);



  useEffect(() => {
    try {
      const getUserById = async () => {
        const url = "https://jsonplaceholder.typicode.com/users";
        const todos = await getWithFilter(url, { userId: user.id });
        setIsAllComleted(todos.every(({ completed }) => completed));
      };
      getUserById();
    } catch (e) {
      console.log(e)
    }
  }, [user.id]);
  return <User user={user} isAllCompleted={isAllComleted} />;
}
