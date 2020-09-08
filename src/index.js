import { AddTodolist, removeTodolist } from "./addremove";
import Todolist, { displaytodolists } from "./createtodolist";
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
  getprojectsclick,
} from "./dom";

const projects_list = [{ name: "Default", todolist: [], id: 0 }];
let newtodo = new Todolist(
  "my daily rotine",
  "it a list of what I do",
  "2020-12-9",
  3
);

let selectedproject = 0;

const add_to_chosen_object = (target, id, myobject, todo) => {
  const index = target.findIndex((x) => x.id === id);
  AddTodolist(target[index][myobject], todo);
};

const desplay_items = (item_div, items_list, item_method) => {
  item_div.innerHTML = "";
  items_list.forEach((item) => {
    item_method(item, item_div);
  });
};
createtodo.addEventListener("click", (e) => {
  e.preventDefault();
  let todo = gettodovalues();
  newtodo = new Todolist(
    todo.todotitle,
    todo.tododescription,
    todo.tododate,
    todo.todopriority
  );

  add_to_chosen_object(projects_list, selectedproject, "todolist", newtodo);
  desplay_items(
    display_todolists,
    projects_list[selectedproject].todolist,
    displaytodolists
  );
});

createproject.addEventListener("click", (e) => {
  e.preventDefault();
  let project = getprojectvalues();
  let newproject = Project(project);
  AddTodolist(projects_list, newproject);
  desplay_items(display_projects, projects_list, displayprojects);
  projectclick = getprojectsclick();
  addeventtoclickproject();
});

desplay_items(display_projects, projects_list, displayprojects);
desplay_items(
  display_todolists,
  projects_list[selectedproject].todolist,
  displaytodolists
);
let projectclick = getprojectsclick();

const addeventtoclickproject = () => {
  projectclick.forEach((project) => {
    project.addEventListener("click", (e) => {
      e.preventDefault();
      selectedproject = e.target.parentElement.id;
      desplay_items(
        display_todolists,
        projects_list[selectedproject].todolist,
        displaytodolists
      );
    });
  });
};

addeventtoclickproject();
