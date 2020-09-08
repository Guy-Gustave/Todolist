export const Project = (name, todolist = [], id = null) => {
  return { name, todolist, id };
};

export const displayprojects = (project, display_projects) => {
  const projectContainer = document.createElement("div");
  projectContainer.id = project.id;
  projectContainer.className = "project_container";
  display_projects.appendChild(projectContainer);

  const projectname = document.createElement("h2");
  projectname.className = "project_name";
  projectname.innerHTML = project.name;
  projectContainer.appendChild(projectname);
};
