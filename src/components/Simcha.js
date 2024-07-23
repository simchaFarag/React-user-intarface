import { useState } from "react";
import TodosUser from "./TodosUser";
import AddNewPost from "./AddNewPost";

export default function Simcha() {
  const [showcomp, setShowComp] = useState(false);

  return <>{showcomp ? <TodosUser /> : <AddNewPost />}</>;
}
