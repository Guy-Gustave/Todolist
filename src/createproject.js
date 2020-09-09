export const Project = (name, todolist = [], id = null) => ({
  name,
  todolist,
  id,
});

export const displayprojects = (project, displayProjects) => {
  const projectContainer = document.createElement('div');
  projectContainer.id = project.id;
  projectContainer.className = 'project_container';
  displayProjects.appendChild(projectContainer);

  const projectname = document.createElement('h2');
  projectname.className = 'project_name';
  projectname.innerHTML = project.name;
  projectContainer.appendChild(projectname);
};
