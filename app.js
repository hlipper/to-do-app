
function onReady(){
  let id = 0;
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');

  function createNewToDo() {
    if (!newToDoText.value) { return; }
    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id++

    });

  }

function deleteToDo(id) {
  return toDos.filter(toDo => toDo.id !== id);
}


  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo){
      const newLi = document.createElement('li');
      newLi.classList.add('mdl-list__item', 'newMdl');
      let toDoContainer = document.createElement('span');
      toDoContainer.classList.add('mdl-list__item-primary-content', 'newMdl');
      let toDoLabel = document.createElement('label');
      toDoLabel.classList.add('mdl-checkbox', 'mdl-js-checkbox', 'mdl-js-ripple-effect', 'newMdl');
      toDoLabel.htmlFor = 'list-checkbox-1'
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";
      checkbox.id = 'list-checkbox-1';
      checkbox.classList.add('mdl-checkbox__input', 'newMdl');
      let deleteContainer = document.createElement('span');
      deleteContainer.classList.add('mdl-list__item-secondary-action', 'newMdl');

      const deleteButton = document.createElement('button');
      deleteButton.classList.add('mdl-button', 'mdl-js-button', 'mdl-button--icon', 'newMdl');
      let icon = document.createElement('i');
      let text = document.createTextNode('delete');
      icon.classList.add('material-icons');
      icon.appendChild(text);
      deleteButton.appendChild(icon);


      newLi.innerHTML = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteButton);

      deleteButton.addEventListener('click', () => {
          toDos = deleteToDo(toDo.id);
          renderTheUI();
    });
});

}
  addToDoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    createNewToDo();
    newToDoText.value = '';
    renderTheUI();
  });

    renderTheUI();
}


window.onload = function(){
  onReady();
};
