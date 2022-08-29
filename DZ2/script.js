let firstOperand = prompt('Enter first operand');
while(validateNumber(firstOperand)) {
    firstOperand = prompt('Value is invalid. Enter first number');
   }
firstOperand = +firstOperand

let secondOperand = prompt('Enter second operand');

while(validateNumber(secondOperand)) {
    secondOperand = prompt('Value is invalid. Enter second number');
   }
secondOperand = +secondOperand

let mathAction = prompt('Enter +, -, *, /');
while(!chooseMathoperator(mathAction)) {
    mathAction = prompt('Value is invalid. Enter +, -, *, /');
   }
calculateMathoperator(mathAction);



function validateNumber(number){
return number === null || number === '' || isNaN(number);
}

function chooseMathoperator(operator){
return operator === '+'|| operator === '-'|| operator === '*'|| operator === '/' 
}


function calculateMathoperator(calc){
    switch(calc){
        case '+': 
        alert(firstOperand+ '+' + secondOperand + '=' +(firstOperand + secondOperand));
        break;
        case '-': 
        alert(firstOperand+ '-' + secondOperand+ '=' +(firstOperand - secondOperand));
        break;
        case '*': 
        alert(firstOperand+ '*' + secondOperand+ '=' +(firstOperand * secondOperand));
        break;
        case '/': 
        alert(firstOperand+ '/' + secondOperand+ '=' +(firstOperand / secondOperand));
        break;
        default: 
        alert('incorrect symbols')
    }
return calc
}

