import "./App.css";
import AddNewPost from "./components/AddNewPost";
import Users from "./components/Users";
import UserContainer from "./components/UserContaniar";
import TodosUser from "./components/TodosUser";
import AddNewToDo from "./components/AddNewToDo";
import AddNewUser from "./components/AddNewUser";
import ToDos from "./components/ToDos";
import Simcha from "./components/Simcha";
function App() {
  // const [searchs, setSearches] = useState([]);
  // const [search, setSearch] = useState("");

  // useEffect(() => {
  //   try {
  //     const getSearch = async () => {
  //       const res = await searchInUsers();
  //       if (res) return setSearches(res.data.filter(searches.includes));
  //       else return null;
  //     };
  //     getSearch();
  //   } catch (error) {
  //     console.log(error);
  //     return null;
  //   }
  // }, [search]);

  return (
    <>

      <Simcha />
    </>
  );
}

export default App;
