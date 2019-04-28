//for checkpoint 6 to-do-app part 2

function onReady(){
  let idVariable = 0;
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');


  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) {return;}
    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: idVariable

    });

    idVariable++;

    newToDoText.value = '';

    renderTheUI();
  };

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo){
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";
      const deleteButton = document.createElement('button');
      deleteButton.textContent = "DELETE";
      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteButton);

      deleteButton.addEventListener('click', event => {
          toDos = toDos.filter(function(toDo){
          return toDo.id !== idVariable;
      })
      renderTheUI();
    });
};

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
   };


};

};


window.onload = function(){
  onReady();
};
