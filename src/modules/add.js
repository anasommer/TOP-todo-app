export default function addTodo(data) {
  const { title, description, dueDate, priority } = data;

  const todoItem = document.createElement('li');
  todoItem.innerHTML = `
    <li class="todo-item">
    ${title} : ${description}. Due date: ${dueDate}. Priority: ${priority}
    <i class="fas fa-xl fa-xmark remove-icon"></i>
  </li>
    `;

  return todoItem;
}
