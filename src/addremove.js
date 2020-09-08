export const AddTodolist = (target, newtodo) => {
  if (target.length >= 1) {
    newtodo.id = target[target.length - 1].id + 1;
  } else {
    newtodo.id = 0;
  }

  target.push(newtodo);
  return target;
};
export const removeTodolist = (target, todo_id) => {
  const index = target.findIndex((x) => x.id === todo_id);
  target.splice(index, 1);
  return target;
};
