const addproject = document.getElementById("show_project_form");
const projectform = document.getElementById("project_form");
const addtodo = document.getElementById("show_todo_form");
const todoform = document.getElementById("todo_form");
const closes = document.querySelectorAll(".close");
const createtodo = document.getElementById("create_todo");
const createproject = document.getElementById("create_project");
const display_projects = document.getElementById("display_projects");
const project_container = document.querySelectorAll(".project_name");
const display_todolists = document.getElementById("display_todolists");
// const create_todo_button = document.querySelector(".createtodo_buttons");
// const edit_todo_button = document.querySelector(".edittodo_buttons");
addproject.addEventListener("click", () => {
  projectform.className = "project_form";
});
addtodo.addEventListener("click", () => {
  todoform.className = "todo_form";
  create_todo.className = "createtodo_buttons";
});
closes.forEach((close) => {
  close.addEventListener("click", (e) => {
    e.preventDefault();
    todoform.className = "none";
    projectform.className = "none";
  });
});
const accestodovalues = () => {
  const todotitle = document.getElementById("title");
  const tododescription = document.getElementById("description");
  const todopriority = document.getElementById("priority");
  const tododate = document.getElementById("date");
  return { todotitle, tododescription, todopriority, tododate };
};

const gettodovalues = () => {
  let val = accestodovalues();
  let [todotitle, tododescription, todopriority, tododate] = [
    val.todotitle.value,
    val.tododescription.value,
    val.todopriority.value,
    val.tododate.value,
  ];
  return { todotitle, tododescription, todopriority, tododate };
};

const posttodovalues = (title, desc, prio, date) => {
  let val = accestodovalues();

  val.todotitle.value = title;
  val.tododescription.value = desc;
  val.todopriority.value = prio;
  val.tododate.value = date;
  createtodo.value = "save";
  create_todo.className = "edittodo_buttons";
};
const getprojectvalues = () => {
  const projectname = document.getElementById("name").value;
  return projectname;
};
const getprojectsclick = () => {
  const projects_list_click = document.querySelectorAll(".project_name");
  return projects_list_click;
};

const getdeletebutton = () => {
  const todolist_deletetodo = document.querySelector(".todolist_deletetodo");
  return todolist_deletetodo;
};
export {
  addproject,
  addtodo,
  closes,
  createtodo,
  gettodovalues,
  getprojectvalues,
  createproject,
  display_projects,
  project_container,
  getprojectsclick,
  display_todolists,
  getdeletebutton,
  posttodovalues,
  todoform,
  // create_todo_button,
  // edit_todo_button,
};
