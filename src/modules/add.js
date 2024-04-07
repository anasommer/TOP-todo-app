export default function addTodo(data, todosArray) {
  const { title, description, dueDate, priority } = data;

  const newTodo = {
    title,
    description,
    dueDate,
    priority,
  };

  todosArray.push(newTodo);
  localStorage.setItem('todos', JSON.stringify(todosArray));

  return newTodo;
}
