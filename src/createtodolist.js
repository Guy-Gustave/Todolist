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
const getprio = (num) => {
  const priobect = {
    1: "low",
    2: "medium",
    3: "High",
    4: "Urgent",
  };
  return priobect[num];
};

export const displaytodolists = (
  todolist,
  display_todolists,
  deletemethod,
  edittodomethod
) => {
  const todolistContainer = document.createElement("div");
  todolistContainer.id = todolist.id;
  todolistContainer.className = "todolist_container";
  todolistContainer.classList.add(getprio(todolist.priority));
  display_todolists.appendChild(todolistContainer);

  const todolisttitle = document.createElement("h2");
  todolisttitle.className = "todolist_title";
  todolisttitle.innerHTML = todolist.title;
  todolistContainer.appendChild(todolisttitle);

  const duedate = document.createElement("p");
  duedate.className = "todolist_date";
  duedate.innerHTML = todolist.dueDate;
  todolistContainer.appendChild(duedate);

  const todoconf = document.createElement("div");
  todoconf.className = "todolist_todoconf";
  todolistContainer.appendChild(todoconf);

  const edittodo = document.createElement("button");
  edittodo.className = "todolist_edittodo";
  edittodo.innerHTML = "Edit";
  edittodo.value = todolist.id;
  edittodo.onclick = edittodomethod;
  todoconf.appendChild(edittodo);

  const deletetodo = document.createElement("button");
  deletetodo.className = "todolist_deletetodo";
  deletetodo.innerHTML = "delete";
  deletetodo.value = todolist.id;
  deletetodo.onclick = deletemethod;
  todoconf.appendChild(deletetodo);

  const description = document.createElement("p");
  description.className = "todolist_desc";
  description.innerHTML = todolist.description;
  todolistContainer.appendChild(description);
};
