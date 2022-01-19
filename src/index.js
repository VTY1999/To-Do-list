import './style.css';

const task = [{
  description: 'Complete your project',
  completed: true,
  index: 1,
}, {
  description: 'Do some coding challenge',
  completed: true,
  index: 2,
}];

const apply = (tasks) => {
  const tasksSorted = tasks.sort((a, b) => a.index - b.index);
  const tasksContainer = document.querySelector('#tasks');
  let todosHtml = '';
  tasksSorted.forEach((todo) => {
    todosHtml += ` <div class="todo">
          <input type="checkbox" class="checkbox" /><span> ${todo.description}</span>
      </div>`;
  });
  tasksContainer.innerHTML = todosHtml;
};

apply(task);