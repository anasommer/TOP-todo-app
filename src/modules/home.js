import form from './form';

export default function home() {
  const content = document.querySelector('#content');
  const projects = ['Project 1', 'Project 2'];
  const todos = ['groceries', 'wash the car'];

  const h1 = document.createElement('h1');
  h1.textContent = 'Todo List';

  const nav = document.createElement('nav');
  nav.innerHTML = `
  <ul class="projects">
${projects
  .map((project) => {
    return `<li><a href="#">${project}</a></li>`;
  })
  .join('')}
</ul>`;

  const container = document.createElement('div');
  container.classList.add('container');
  container.appendChild(form());

  const todosDiv = document.createElement('div');
  todosDiv.innerHTML = `
<div class="todos-container">
<ul class="todo-list">
${todos
  .map((todo, index) => {
    return ` <li class="todo-item" id="todo-${index}">
    ${todo}<i class="fas fa-xl fa-xmark remove-icon"></i>
  </li>`;
  })
  .join('')}
 
</ul>
`;

  content.append(h1, nav, container, todosDiv);
  return content;
}
