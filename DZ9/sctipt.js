const toDoListEl = document.querySelector('#toDoList');
const toDoItem = document.querySelector('#toDoitem');
const addToDoBtn = document.querySelector('#addToDoBnt');

addToDoBtn.addEventListener('click', onAddToDoBtnClick);

function onAddToDoBtnClick() {
    if (!validateForm()) {
        return;
    }
    const newToDoItem = getValue();
    addToDo(newToDoItem);
    resetForm();
}

function getValue() {
    return toDoItem.value;
}

function addToDo(value) {
    const ToDoEl = generateToDoElement(value);
    toDoListEl.append(ToDoEl);
}
function generateToDoElement(value) {
    const trEl = document.createElement('tr');
    const toDoTd = document.createElement('td');
    toDoTd.textContent = value;
    trEl.classList.add('basecolor');
    trEl.append(toDoTd);
    trEl.addEventListener('click', () => {
        trEl.classList.toggle('switchcolor')
    });
    return trEl;
}

function resetForm() {
    toDoItem.value = '';
}

function validateForm() {
    resetValidation();
    if (toDoItem.value === '') {
        toDoItem.classList.add('input');
        return false;
    }
    return true;
}

function resetValidation() {
    toDoItem.classList.remove('input');
}

