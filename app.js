//for Checkpoint 5 To-Do-App Part 1

function onReady(){
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    let title = newToDoText.value;

    let newLi = document.createElement('li');
    newLi.classList.add('mdl-list__item', 'newMdl');
    let toDoContainer = document.createElement('span');
    toDoContainer.classList.add('mdl-list__item-primary-content', 'newMdl');
    let toDoLabel = document.createElement('label');
    toDoLabel.classList.add('mdl-checkbox', 'mdl-js-checkbox', 'mdl-js-ripple-effect', 'newMdl');
    toDoLabel.htmlFor = 'list-checkbox-1';
    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.id = 'list-checkbox-1';
    checkbox.classList.add('mdl-checkbox__input', 'newMdl');

    let deleteContainer = document.createElement('span');
    deleteContainer.classList.add('mdl-list__item-secondary-action', 'newMdl');


    let deleteButton = document.createElement('button');
    deleteButton.classList.add('mdl-button', 'mdl-js-button', 'mdl-button--icon', 'newMdl');
    let icon = document.createElement('i');
    let text = document.createTextNode('delete');
    icon.classList.add('material-icons');
    icon.appendChild(text);
    deleteButton.appendChild(icon);

    deleteButton.addEventListener('click', event => {
      newLi.parentNode.removeChild(newLi);
    });


    newLi.textContent = title;
    newLi.appendChild(checkbox);
    newLi.appendChild(deleteButton);
    toDoList.appendChild(newLi);
    newToDoText.value='';

});
}
window.onload = function(){
  onReady();
};
