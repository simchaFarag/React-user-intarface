import axios from "axios";

const getAll = async (url) => {
  try {
    const resp = await axios.get(url);
    if (resp.status === 200) return resp.data;
  } catch (e) {
    console.log("eroor in api" + e.status);
  }
};
const getById = async (url, userId) => {
  try {
    const resp = await axios.get(`${url}/?userId=${userId}`);
    if (resp.status === 200) return resp.data.slice(0, 3);
  } catch (e) {
    console.log("error i" + e.status);
  }
};

const getWithFilter = async (url, filter) => {
  try {
    const resp = await axios.get(`${url}?${new URLSearchParams(filter)}`);
    if (resp.status === 200) return resp.data;
  } catch (e) {
    console.log("eroor in api" + e.status);
  }
};

const searchInUsers = async (search) => {
  const URLUSERS = "https://jsonplaceholder.typicode.com/users";
  const res = await axios.get(`${URLUSERS}?${search}`);
  return res;
};

const getAllById = async (id) => {
  const URLUSERS = "https://jsonplaceholder.typicode.com/users";
  const req = await axios.get(`${URLUSERS}/${id}`);
  return req.data;
};
const addTasks = async (id, obj) => {
  const URLTODOS = "https://jsonplaceholder.typicode.com/todos";
  const add = await axios.post(`${URLTODOS}/${id}`, obj);
  console.log(add.data);
};

const upDate = async (id, obj) => {
  const URLTODOS = "https://jsonplaceholder.typicode.com/todos";
  const resUpDate = await axios.put(`${URLTODOS}/${id}`, obj);
  if (resUpDate.status === 200) return console.log("update the obj");
};
const deleteUser = async (id) => {
  const URLUSERS = "https://jsonplaceholder.typicode.com/users";
  const deleteAllUser = await axios.delete(`${URLUSERS}/?id=${id}`);
  console.log(deleteAllUser.status);
};
const addNewUser = async (id, obj) => {
  const URLTODOS = "https://jsonplaceholder.typicode.com/todos";
  const addNewUser = await axios.post(`${URLTODOS}/${id}`, obj);
  if (addNewUser.status === 200)
    return console.log("error the not enter new post user");
};

const addTodo = async (url, obj) => {
  try {
    const resp = await axios.post(url, obj);
    if (resp.status === 200) console.log(" excellent" + resp.status);
    else console.log("erroe");
  } catch (error) {
    console.log(error + "error in utils");
  }
};
export {
  addNewUser,
  getAll,
  searchInUsers,
  getAllById,
  addTasks,
  upDate,
  deleteUser,
  getById,
  getWithFilter,
  addTodo,
};
