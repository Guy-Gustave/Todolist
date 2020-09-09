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
  posttodovalues,
  todoform,
  tododetails,
  getdetails,
  details,
  projectform,
} from "./dom";

const getlocalstorage = () => {
  let projects = [];
  if (localStorage.getItem("projects_list")) {
    projects = JSON.parse(localStorage.getItem("projects_list"));
  } else {
    projects = [{ name: "Default", todolist: [], id: 0 }];
  }
  return projects;
};
const projects_list = getlocalstorage();
let selectedtodo = null;
let selectedproject = 0;
const adddeletetotodos = (e) => {
  let idx = parseInt(e.target.value);
  removeTodolist(projects_list[selectedproject].todolist, idx);
  localStorage.setItem("projects_list", JSON.stringify(projects_list));
  desplay_items(
    display_todolists,
    projects_list[selectedproject].todolist,
    displaytodolists
  );
};
const showdetails = (e) => {
  tododetails.className = "todo_details";
  details.classList.add(e.target.parentElement.classList[1]);
};
const addedittotodos = (e) => {
  let idx = parseInt(e.target.value);
  const index = projects_list[selectedproject].todolist.findIndex(
    (x) => x.id === idx
  );
  selectedtodo = index;
  let editedtodo = projects_list[selectedproject].todolist[index];
  todoform.className = "todo_form";
  posttodovalues(editedtodo.title, editedtodo.description);
  desplay_items(
    display_todolists,
    projects_list[selectedproject].todolist,
    displaytodolists
  );
};

const add_to_chosen_object = (target, id, myobject, todo) => {
  const index = target.findIndex((x) => x.id === id);
  AddTodolist(target[index][myobject], todo);
};

const desplay_items = (item_div, items_list, item_method) => {
  item_div.innerHTML = "";
  items_list.forEach((item) => {
    item_method(item, item_div, adddeletetotodos, addedittotodos, showdetails);
  });
};

createtodo.addEventListener("click", (e) => {
  e.preventDefault();
  let todo = gettodovalues();
  if (createtodo.className === "createtodo_buttons") {
    let newtodo = new Todolist(
      todo.todotitle,
      todo.tododescription,
      todo.tododate,
      todo.todopriority
    );
    add_to_chosen_object(projects_list, selectedproject, "todolist", newtodo);
    localStorage.setItem("projects_list", JSON.stringify(projects_list));
    console.log(JSON.parse(localStorage.getItem("projects_list")));
  } else if (createtodo.className === "edittodo_buttons") {
    let editedtodo = new Todolist(
      todo.todotitle,
      todo.tododescription,
      todo.tododate,
      todo.todopriority,
      selectedtodo
    );
    projects_list[selectedproject].todolist[selectedtodo] = editedtodo;
    localStorage.setItem("projects_list", JSON.stringify(projects_list));
  }
  todoform.className = "none";
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
  localStorage.setItem("projects_list", JSON.stringify(projects_list));
  projectform.className = "none";
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
      selectedproject = parseInt(e.target.parentElement.id);
      desplay_items(
        display_todolists,
        projects_list[selectedproject].todolist,
        displaytodolists
      );
    });
  });
};

addeventtoclickproject();
