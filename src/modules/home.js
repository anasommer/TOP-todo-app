import form from './form';
import todosArr from './todos';

export default function home() {
  const todos = todosArr();
  const content = document.querySelector('#content');

  const h1 = document.createElement('h1');
  h1.textContent = 'Todo List';

  const container = document.createElement('div');
  container.classList.add('container');
  container.appendChild(form());

  const todosDiv = document.createElement('div');
  todosDiv.classList.add('todos-container');

  const todoList = document.createElement('ul');
  todoList.classList.add('todo-list');

  todos.forEach((todo, index) => {
    const todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');
    todoItem.id = `todo-${index}`;
    todoItem.innerHTML = `
    ${todo.title}: ${todo.description} <i class="fas fa-xl fa-xmark remove-icon"></i>
    `;
    todoList.appendChild(todoItem);
  });

  todosDiv.appendChild(todoList);

  content.append(h1, container, todosDiv);
  return content;
}
