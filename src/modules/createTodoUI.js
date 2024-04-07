export default function createTodoUI(todo, todoIndex) {
  const { title, description, dueDate, priority } = todo;
  const newTodoElement = document.createElement('li');

  let prioIcon =
    priority === 'high'
      ? '<i class="fa-solid fa-bolt prio-high"></i>'
      : priority === 'medium'
      ? '<i class="fa-solid fa-bolt prio-medium"></i>'
      : '<i class="fa-solid fa-bolt"></i>';

  newTodoElement.classList.add('todo-item');
  newTodoElement.id = `todo-${todoIndex}`;
  newTodoElement.innerHTML = `${prioIcon} ${title}: ${description}. <br> <i class="fa-solid fa-calendar-days due-date"></i> ${dueDate} <i class="fas fa-xl fa-xmark remove-icon"></i> `;

  return newTodoElement;
}
