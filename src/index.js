import { AddTodolist, removeTodolist } from "./addremove";
import Todolist from "./createtodolist";
import { Project, displayprojects } from "./createproject";
import {
  addproject,
  addtodo,
  closes,
  gettodovalues,
  createtodo,
  getprojectvalues,
  createproject,
  display_projects,
} from "./dom";
const todolists = [{ id: 0 }];

const projects_list = [];
let newtodo = new Todolist(
  "my daily rotine",
  "it a list of what I do",
  "2020-12-9",
  3
);

let selectedproject = 0;

createtodo.addEventListener("click", (e) => {
  e.preventDefault();
  let todo = gettodovalues();
  newtodo = new Todolist(
    todo.todotitle,
    todo.tododescription,
    todo.tododate,
    todo.todopriority
  );
});

createproject.addEventListener("click", (e) => {
  e.preventDefault();
  let project = getprojectvalues();
  let newproject = Project(project);
  AddTodolist(projects_list, newproject);
  display_projects.innerHTML = "";
  projects_list.forEach((project) => {
    displayprojects(project, display_projects);
  });
});
