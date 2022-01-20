const apply = (listTask, container) => {
  const sortedTodos = listTask.list.sort();
  container.innerHTML = '';
  let todosHtml = '';
  sortedTodos.forEach((todo) => {
    todosHtml += `  <div class="item">
                              <div>
                                  <input id="${todo.id}" type="checkbox" class="checkbox" />
                                  <input id="${todo.index}" type="text" class="todo-edit" value="${todo.description}" />
                            </div>
                        <i id="${todo.index}" class="remove fas fa-trash"></i>
                    </div>
          `;
  });

  container.innerHTML = todosHtml;

  const removeBtns = document.querySelectorAll('.remove');
  removeBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const element = btn.parentNode;
      listTask.RemoveTask(Number(e.target.parentNode.id));
      element.remove();
    });
  });

  const todosContent = document.querySelectorAll('.todo-edit');
  todosContent.forEach((todo) => {
    todo.addEventListener('change', (e) => {
      listTask.EditTask(Number(e.target.id), e.target.value);
    });
  });
};
export default apply;