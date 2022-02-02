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

describe('Edit test', () => {
  test('Editing', () => {
    const todoList = new Task();
    const newTodo6 = {
      id: 'gvjvuyy',
      description: 'asd',
      completed: false,
      index: 3,
    };
    todoList.addTask(newTodo6);
    todoList.EditTask(newTodo6.id, 'asd');
    expect(todoList.list[2].description).toBe('asd');
    expect(todoList.list).toHaveLength(3);
  });
});

describe('complete test', () => {
  test(' updating an items completed status', () => {
    const todoList = new Task();
    const newTodo8 = {
      id: 'dafcfrdy',
      description: 'task9',
      completed: false,
      index: 4,
    };
    todoList.addTask(newTodo8);
    todoList.CompleteTask(newTodo8.id, true);
    expect(todoList.list[3].completed).toBeTruthy();
    expect(todoList.list).toHaveLength(4);
  });
});

describe('Clear all completed', () => {
  test('clear items completed', () => {
    const todoList = new Task();
    todoList.clearCompletedTasks();
    expect(todoList.list).toHaveLength(3);
    expect(todoList.list[1].completed).toBeFalsy();
  });
});