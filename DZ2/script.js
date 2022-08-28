let firstOperand = prompt('Enter first operand');
while(validation(firstOperand)) {
    firstOperand = prompt('Value is invalid. Enter first number');
   }
let secondOperand = prompt('Enter second operand');

while(validation(secondOperand)) {
    secondOperand = prompt('Value is invalid. Enter second number');
   }

let mathAction = prompt('Enter +, -, *, /');

if (conditionalOperators(mathAction)){
    calculateMath(mathAction)
  }
else{
while(validation1(mathAction)) {
    mathAction = prompt('Value is invalid. Enter +, -, *, /');
   }
calculateMath(mathAction);

}



function validation(Numbers){
return Numbers === null || Numbers === '' || isNaN(Numbers);
}
function validation1(Symbols){
return Symbols === null || Symbols === '' || !isNaN(Symbols) || Symbols !=='+' 
}

function conditionalOperators(Operators){
return Operators === '+'|| Operators === '-'|| Operators === '*'|| Operators === '/' 
}


function calculateMath(Calc){
    switch(Calc){
        case '+': 
        alert(firstOperand+ '+' + secondOperand + '=' +(+firstOperand + +secondOperand));
        break;
        case '-': 
        alert(firstOperand+ '-' + secondOperand+ '=' +(+firstOperand - +secondOperand));
        break;
        case '*': 
        alert(firstOperand+ '*' + secondOperand+ '=' +(+firstOperand * +secondOperand));
        break;
        case '/': 
        alert(firstOperand+ '/' + secondOperand+ '=' +(+firstOperand / +secondOperand));
        break;
        default: 
        alert('incorrect symbols')
    }
return Calc
}


