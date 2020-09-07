import { AddTodolist, removeTodolist } from "./addremove";
import Todolist from "./createtodolist";
import { project } from "./createproject";

const todolists = [{ id: 0 }];

const projects = [];
let newtodo = new Todolist(
  "my daily rotine",
  "it a list of what I do",
  "2020-12-9",
  3
);
AddTodolist(todolists, newtodo);
console.log(newtodo);
console.log(todolists);
