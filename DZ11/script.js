const DELETE_BTN_CLASS = 'delete-btn'
const TODO_ITEM_SELECTOR = '.todo-item'
const INVALID_INPUT_CLASS = '.invalid-input'
const toDoList = document.querySelector('#todolist')
const todoTemplate = document.querySelector('#Tdtemplate').innerHTML;
const todoEl = document.querySelector('#todo');
const todoForm = document.querySelector('#todoform');
const todoTable = document.querySelector('#container');
const btnOnClick = document.querySelector('#addBntClick');

let todoElList = [
    { toDo: 'do homework', id: 1 },
    { toDo: 'do mistakes', id: 2 },
    { toDo: 'do diff things', id: 3 },
];

todoForm.addEventListener('submit', onFormSubmit);
toDoList.addEventListener('click', onToDoListClick);
todoForm.addEventListener('input', onFormElementInput);

init();

function init() {
    renderList(todoElList);
}

function onFormSubmit(e) {
    e.preventDefault();
    const newTodo = getToDoValues();
    addToDo(newTodo);
    resetFormData();
}
function onToDoListClick(e) {
    if (e.target.classList.contains(DELETE_BTN_CLASS)) {
        const toDoId = getToDoId(e.target)
        deleteToDoId(toDoId)
    }
}


function onFormElementInput(e) {
    validateInput(e.target);
}

function renderList(list) {
    toDoList.innerHTML = list.map(generateTodoHtml).join('');

}

function generateTodoHtml({ toDo, id }) {
    return todoTemplate.replaceAll('{{ToDo}}', toDo)
        .replaceAll('{{id}}', id)
       

}

function getToDoValues() {
    return {
        toDo: todoEl.value
    }
}

function getToDoId(el) {
    return +el.closest(TODO_ITEM_SELECTOR).dataset.contactId
}

function addToDo(todo) {

    todo.id = Date.now();
    todoElList.push(todo);
    renderList(todoElList)
}

function deleteToDoId(id) {
    todoElList = todoElList.filter((item) => item.id !== id)
    renderList(todoElList)
}

function validateInput(input) {
    resetValidation(input);
    if (input.value === '') {
        input.classList.add(INVALID_INPUT_CLASS);
    }
   
}

function resetValidation(input) {
   input.classList.remove(INVALID_INPUT_CLASS)
  
}

function resetFormData() {
    todoEl.value = '';
}
