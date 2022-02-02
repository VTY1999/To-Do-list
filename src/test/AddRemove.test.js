/**
 * @jest-environment jsdom
 */
import Task from '../storage.js';

document.body.innerHTML = `
 <div id="container">

<h1 id="head">Today's To Do</h1>    
    <form>
<input class="todo" type="text" placeholder="Add to your list..." autofocus />
   <i id="add" class="fas fa-reply"></i> 
</form>
<div id="tasks"></div>

    <div class="clear"><a href="#">Clear all completed</a></div>
</div>
`;
describe('add and remove', () => {
  window.localStorage = Storage.prototype;
  test('Add task', () => {
    const todoList = new Task();
    const newTodo = {
      id: 'id123',
      description: 'task1',
      completed: false,
      index: 1,
    };
    const newTodo2 = {
      id: 'id4d5sa',
      description: 'task2',
      completed: false,
      index: 2,
    };
    todoList.addTask(newTodo);
    expect(todoList.list).toHaveLength(1);
    todoList.addTask(newTodo2);
    expect(todoList.list).toHaveLength(2);
    expect(todoList.list[1].description).toBe('task2');
  });

  test('remove task', () => {
    const todoList = new Task();
    const newTodo = {
      id: 'id12sdad3',
      description: 'task3',
      completed: false,
      index: 3,
    };
    todoList.addTask(newTodo);
    todoList.RemoveTask(newTodo.id);
    expect(todoList.list[1].description).toBe('task2');
    expect(todoList.list).toHaveLength(2);
  });
});