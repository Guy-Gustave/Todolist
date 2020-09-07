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
