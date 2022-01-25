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
  removeBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const element = btn.parentNode;
      element.remove();
      listTask.RemoveTask((e.target.parentNode.id));
    });
  });

  const todosContent = document.querySelectorAll('.todo-edit');
  todosContent.forEach((todo) => {
    todo.addEventListener('change', (e) => {
      listTask.EditTask((e.target.id), e.target.value);
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