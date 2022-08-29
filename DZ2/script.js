let firstOperand = +prompt('Enter first operand');
while(validationFornumbers(firstOperand)) {
    firstOperand = prompt('Value is invalid. Enter first number');
   }
let secondOperand = +prompt('Enter second operand');

while(validationFornumbers(secondOperand)) {
    secondOperand = prompt('Value is invalid. Enter second number');
   }

let mathAction = prompt('Enter +, -, *, /');
while(!mathOperators(mathAction)) {
    mathAction = prompt('Value is invalid. Enter +, -, *, /');
   }
calculateMathoperators(mathAction);

function validationFornumbers(numbers){
return numbers === null || numbers === '' || isNaN(numbers);
}

function mathOperators(operators){
return operators === '+'|| operators === '-'|| operators === '*'|| operators === '/' 
}


function calculateMathoperators(calc){
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

