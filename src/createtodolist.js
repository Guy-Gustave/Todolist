export default class Todolist {
  constructor(
    title,
    description,
    dueDate,
    priority,
    notes = [],
    checklist = [],
    id = null
  ) {
    [
      this.title,
      this.description,
      this.dueDate,
      this.priority,
      this.notes = [],
      this.checklist = [],
      this.id = null,
    ] = [
      title,
      description,
      dueDate,
      priority,
      (notes = []),
      (checklist = []),
      (id = null),
    ];
  }

  priorityUp() {
    if (this.priority < 4) {
      priority += 1;
    }
  }
  priorityDown() {
    if (this.priority > 0) {
      priority = priority - 1;
    }
  }
}

export const displaytodolists = (todolist, display_todolists) => {
  const todolistContainer = document.createElement("div");
  todolistContainer.id = todolist.id;
  todolistContainer.className = "todolist_container";
  display_todolists.appendChild(todolistContainer);

  const todolisttitle = document.createElement("h2");
  todolisttitle.className = "todolist_title";
  todolisttitle.innerHTML = todolist.title;
  todolistContainer.appendChild(todolisttitle);

  const description = document.createElement("p");
  description.className = "todolist_desc";
  description.innerHTML = todolist.description;
  todolistContainer.appendChild(description);

  const duedate = document.createElement("p");
  duedate.className = "todolist_date";
  duedate.innerHTML = todolist.dueDate;
  todolistContainer.appendChild(duedate);

  const priority = document.createElement("p");
  priority.className = "todolist_priority";
  priority.innerHTML = todolist.priority;
  todolistContainer.appendChild(priority);
};
