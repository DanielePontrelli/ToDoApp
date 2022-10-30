const taskInput = document.querySelector('#input');
const inputButton = document.querySelector('#button');
const taskList = document.querySelector('#task-list');

inputButton.addEventListener('click', addTask);
taskList.addEventListener('click', removeTask);

function addTask(e) {
    e.preventDefault();

    console.log(taskInput.value);
    if(taskInput.value === '') {
        alert('Scivi qualcosa!');
    }

    //creare un nuovo li e aggiungere classe
    const li = document.createElement('li');
    li.className = 'task';
    //creare nuovo text node e metterlo dentro li
    li.appendChild(document.createTextNode(taskInput.value));
    //creare link e aggiungere classe
    const link = document.createElement('a');
    link.className = 'delete-todo'
    //aggiungi x al tasto delete-todo
    link.innerHTML = '<h3>X</h3>';
    //mettere link nel list item
    li.appendChild(link);

    //mettere li dentro ul
    taskList.appendChild(li);

    taskInput.value = '';
}

function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-todo')) {
        e.target.parentElement.parentElement.remove();
    }
}