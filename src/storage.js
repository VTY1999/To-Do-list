/* eslint-disable no-undef */
export default class Task {
  constructor() {
    this.list = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
  }

  addTask(task) {
    this.list.push(task);
    localStorage.setItem('tasks', JSON.stringify(this.list));
  }

  RemoveTask(taskID) {
    this.list = this.list.filter((todo) => todo.id !== taskID);
    this.list.forEach((todo, index) => {
      todo.index = index + 1;
    });
    localStorage.setItem('tasks', JSON.stringify(this.list));
  }

  EditTask(taskID, taskDescription) {
    const newData = this.list.map((todo) => {
      if (todo.id === taskID) {
        return { ...todo, description: taskDescription };
      }
      return todo;
    });
    localStorage.setItem('tasks', JSON.stringify(newData));
  }

  SortTasks(oldIndex, newIndex) {
    this.list[oldIndex - 1].index = newIndex;
    localStorage.setItem('tasks', JSON.stringify(this.list));
  }

  CompleteTask(taskId, status) {
    const selected = this.list.findIndex((element) => element.id === taskId);
    this.list[selected].completed = status;
    localStorage.setItem('tasks', JSON.stringify(this.list));
  }

  clearCompletedTasks() {
    this.list = this.list.filter((todo) => !todo.completed);
    this.list.forEach((todo, index) => {
      todo.index = index + 1;
    });
    localStorage.setItem('tasks', JSON.stringify(this.list));
  }
}