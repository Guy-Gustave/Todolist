const addproject = document.getElementById("show_project_form");
const projectform = document.getElementById("project_form");
const addtodo = document.getElementById("show_todo_form");
const todoform = document.getElementById("todo_form");
const closes = document.querySelectorAll(".close");
const createtodo = document.getElementById("create_todo");
const createproject = document.getElementById("create_project");
const display_projects = document.getElementById("display_projects");

addproject.addEventListener("click", () => {
  projectform.className = "project_form";
});
addtodo.addEventListener("click", () => {
  todoform.className = "todo_form";
});
closes.forEach((close) => {
  close.addEventListener("click", (e) => {
    e.preventDefault();
    todoform.className = "none";
    projectform.className = "none";
  });
});

const gettodovalues = () => {
  const todotitle = document.getElementById("title").value;
  const tododescription = document.getElementById("description").value;
  const todopriority = document.getElementById("priority").value;
  const tododate = document.getElementById("date").value;
  return { todotitle, tododescription, todopriority, tododate };
};
const getprojectvalues = () => {
  const projectname = document.getElementById("name").value;
  return projectname;
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
};
