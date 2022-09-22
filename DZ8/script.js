const calculation = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
};
const firstOperand = document.querySelector('#first-operand');
const secondOperand = document.querySelector('#second-operand');
const selectOperator = document.querySelector('#choose-math-operator');
const resultDiv = document.querySelector('#result');
const btn = document.querySelector('button');
btn.addEventListener('click', onBtnClickAll);

// task base
function onBtnClick() {
    const num1 = +(firstOperand.value);
    const num2 = +(secondOperand.value);
    resultDiv.textContent = `${num1} + ${num2} = ${num1 + num2}`;
}

// task *
function onBtnClickAll() {
    const num1 = +(firstOperand.value);
    const num2 = +(secondOperand.value);
    const operator = selectOperator.value;
    resultDiv.textContent = `${num1} ${operator} ${num2} = ${calculation[operator](num1, num2)}`;
}

