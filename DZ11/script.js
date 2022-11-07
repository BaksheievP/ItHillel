const DELETE_BTN_CLASS = 'delete-btn'
const TODO_ITEM_CLASS = 'todo-item';
const TODO_CLASS = 'done'
const TODO_ITEM_SELECTOR = '.todo-item'
const INVALID_INPUT_CLASS = 'invalid-input'
const toDoList = document.querySelector('#todolist')
const todoTemplate = document.querySelector('#Tdtemplate').innerHTML;
const todoInput = document.querySelector('input');
const todoForm = document.querySelector('#todoform');
const todoTable = document.querySelector('#container');
const btnOnClick = document.querySelector('#addBntClick');

let todoElList = [];

todoForm.addEventListener('submit', onFormSubmit);
toDoList.addEventListener('click', onToDoListClick);



init();

function init() {
    fetchToDo();
    renderList(todoElList);

}
function fetchToDo() {
    fetch('https://jsonplaceholder.typicode.com/todos').then((resp) => {
        resp.json().then((data) => {
            todoElList = data;
            renderList(todoElList);
        });
    })
};

function onFormSubmit(e) {
    e.preventDefault();
    const newTodo = getToDoValues();
    resetValidation();
    console.log(newTodo)
    if (!newTodo) return validateInput()
    addToDo(newTodo);
    resetFormData();

}
function onToDoListClick(e) {
    if (e.target.classList.contains(DELETE_BTN_CLASS)) {
        const toDoId = getToDoId(e.target)
        deleteToDoId(toDoId)
    }
    if (e.target.classList.contains(TODO_ITEM_CLASS)) {
        const toDoId = getToDoId(e.target)
        toggleTodo(toDoId)
    }

}

function renderList(list) {
    toDoList.innerHTML = list.map(generateTodoHtml).join('');

}

function generateTodoHtml({ title, id, completed }) {
    return todoTemplate.replaceAll('{{ToDo}}', title)
        .replaceAll('{{id}}', id)
        .replaceAll('{{classlayout}}', completed ? TODO_CLASS : '')


}

function getToDoValues() {
    if (todoInput.value) {
        return {
            toDo: todoInput.value
        }
    }
}

function getToDoId(el) {
    return +el.closest(TODO_ITEM_SELECTOR).dataset.contactId
}

function addToDo(todo) {

    todo.id = Date.now();
    todo.isDone = false;
    todoElList.push(todo);
    renderList(todoElList)
}

function deleteToDoId(id) {
    todoElList = todoElList.filter((item) => item.id !== id)
    renderList(todoElList)
}
function validateInput() {
    todoInput.classList.add(INVALID_INPUT_CLASS);
}

function resetValidation() {
    todoInput.classList.remove(INVALID_INPUT_CLASS);
}

function resetFormData() {
    todoInput.value = '';
}

function toggleTodo(id) {
    const todo = todoElList.find((item) => item.id === id)
    todo.completed = !todo.completed;
    renderList(todoElList);

}