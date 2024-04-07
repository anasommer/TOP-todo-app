export default function removeTodo(todoElement, todosArray) {
  const todoIndex = Number(todoElement.id.split('-')[1]);
  todosArray.splice(todoIndex, 1);
  localStorage.setItem('todos', JSON.stringify(todosArray));
  todoElement.remove();
}
