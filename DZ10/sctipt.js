const INPUT_CLASS = 'input';
const DELETE_BTN_CLASS = 'delete-btn';
const contactTemplateHtml = document.querySelector('#Tdtemplate').innerHTML
const ContactListEl = document.querySelector('#List');
const ContactName = document.querySelector('#name');
const ContactSurname = document.querySelector('#surname');
const ContactNumber = document.querySelector('#number');
const addToDoBtn = document.querySelector('#addBntClick');

addToDoBtn.addEventListener('click', onAddToDoBtnClick);
ContactListEl.addEventListener('click', onListClick);

function onAddToDoBtnClick() {
    if (!validateForm()) {
        return;
    }
    const newContact = getValue();
    addContactEl(newContact);
    resetForm();
}

function getValue() {
    return {
        name: ContactName.value,
        surname: ContactSurname.value,
        number: ContactNumber.value
    }
}


function addContactEl(value) {
    const contactHtml = generateContactElement(value);

    ContactListEl.insertAdjacentHTML('afterbegin', contactHtml)
}
function generateContactElement({ name, surname, number }) {
  return template = contactTemplateHtml
        .replaceAll('{{name}}', name)
        .replaceAll('{{surmane}}', surname)
        .replaceAll('{{number}}', number)

}

function resetForm() {
    ContactName.value = '';
    ContactSurname.value = '';
    ContactNumber.value = '';
}

function validateForm() {
    resetValidation();
    if (ContactName.value === '') {
        ContactName.classList.add(INPUT_CLASS);
        return false;
    }
    if (ContactSurname.value === '') {
        ContactSurname.classList.add(INPUT_CLASS);
        return false;
    }
    if (ContactNumber.value === '') {
        ContactNumber.classList.add(INPUT_CLASS);
        return false;
    }
    return true;
}

function resetValidation() {
    ContactName.classList.remove(INPUT_CLASS);
    ContactSurname.classList.remove(INPUT_CLASS);
    ContactNumber.classList.remove(INPUT_CLASS);
}

function generateCell(value) {
    const tdEl = document.createElement('td');
    tdEl.textContent = value;
    return tdEl
}

function onListClick(event){
    if(event.target.classList.contains(DELETE_BTN_CLASS)){
        removeContact(event.target.parentElement);
    }
}

function removeContact(value){
    value.remove()
}