import addTodo from './add';
import removeTodo from './removeTodo';
import todosArr from './todos';

export default function form() {
  const formEl = document.createElement('form');
  const existingTodos = todosArr();

  formEl.innerHTML = `
  <input type="text" id="todo-title" class="todo" placeholder="Enter todo" name="title"/>
  <input type="text" id="todo-description"  class="todo" placeholder="Description" name="description"/>
  <input type="date" id="todo-date"  class="todo" placeholder="Due date" name="dueDate"/>
  <label for="todo-prio" class="todo" >Choose priority:</label>

<select id="todo-prio" class="todo" name="priority">
  <option value="low">Low</option>
  <option value="medium">Medium</option>
  <option value="high">High</option>

</select>
  <button id="add-todo-btn">Add todo</button>
  `;

  const addButton = formEl.querySelector('#add-todo-btn');
  addButton.addEventListener('click', (e) => {
    e.preventDefault();
    const data = new FormData(formEl);

    const title = data.get('title');
    const description = data.get('description');
    const dueDate = data.get('dueDate');
    const priority = data.get('priority');

    const newTodo = addTodo(
      { title, description, dueDate, priority },
      existingTodos
    );

    const todosDiv = document.querySelector('.todos-container');
    const todoList = todosDiv.querySelector('.todo-list');
    const newTodoElement = document.createElement('li');

    let prioIcon =
      priority === 'high'
        ? '<i class="fa-solid fa-bolt prio-high"></i>'
        : priority === 'medium'
        ? '<i class="fa-solid fa-bolt prio-medium"></i>'
        : '<i class="fa-solid fa-bolt"></i>';
    newTodoElement.classList.add('todo-item');
    newTodoElement.innerHTML = `${prioIcon} ${title}: ${description}. <br> <i class="fa-solid fa-calendar-days due-date"></i> ${dueDate} <i class="fas fa-xl fa-xmark remove-icon"></i> `;
    todoList.appendChild(newTodoElement);

    const removeIcon = newTodoElement.querySelector('.remove-icon');
    removeIcon.addEventListener('click', () => {
      removeTodo(newTodoElement, existingTodos);
    });

    formEl.reset();
  });

  return formEl;
}
