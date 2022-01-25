import './style.css';
import apply from './function.js';
import Task from './storage.js';

const container = document.querySelector('#tasks');
const listTask = new Task();
apply(listTask, container);

const addTodoBtn = document.querySelector('#add');
addTodoBtn.addEventListener('click', () => {
  const id = `id${Math.random().toString(16).slice(2)}`;
  const description = document.querySelector('.todo').value.trim();
  const completed = false;
  const index = listTask.list.length + 1;
  const newTodo = {
    id, description, completed, index,
  };
  if (description) {
    listTask.addTask(newTodo);
    apply(listTask, container);
  }
  document.querySelector('.todo').value = '';
});

const clearAll = document.querySelector('.clear');
clearAll.addEventListener('click', () => {
  listTask.clearCompletedTasks();
  apply(listTask, container);
});
