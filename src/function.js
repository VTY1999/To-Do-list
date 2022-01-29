const apply = (listTask, container) => {
  const sortedTodos = listTask.list.sort((a, b) => a.index - b.index);
  container.innerHTML = '';
  let todosHtml = '';
  sortedTodos.forEach((todo) => {
    const checkedTodo = todo.completed ? 'checked' : '';
    const checkClass = todo.completed ? 'checked' : '';
    todosHtml += `  <div class="item">
                              <div>
                                  <input id="${todo.id}" type="checkbox" class="checkbox" ${checkedTodo}/>
                                  <input id="${todo.id}" type="text" class="todo-edit" ${checkClass} value="${todo.description}" />
                            </div>
                        <i id="${todo.id}" class="remove fas fa-trash"></i>
                    </div>
          `;
  });

  container.innerHTML = todosHtml;

  const removeBtns = document.querySelectorAll('.remove');
  removeBtns.forEach((i) => {
    i.addEventListener('click', (e) => {
      const id = `id${Math.random().toString(16).slice(2)}`;
      const description = document.querySelector('.todo').value.trim();
      const completed = false;
      const index = listTask.list.length + 1;
      const newTodo = {
        id, description, completed, index,
      };
      const element = i.parentNode;
      element.remove(newTodo);
      listTask.RemoveTask(e.target.id);
    });
  });

  const todosContent = document.querySelectorAll('.todo-edit');
  todosContent.forEach((todo) => {
    todo.addEventListener('change', (e) => {
      const { id } = e.target;
      listTask.EditTask(id, e.target.value);
      e.target.parentNode.lastElementChild.classList.toggle('.todo');
    });
  });

  const taskCheck = document.querySelectorAll('.checkbox');
  taskCheck.forEach((todo) => {
    todo.addEventListener('change', (e) => {
      const { id } = e.target;
      listTask.CompleteTask(id, e.target.checked);
      e.target.parentNode.lastElementChild.classList.toggle('checked');
    });
  });
};
export default apply;