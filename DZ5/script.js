const calculation = {
    "+": function(a, b) {return a + b},
    "-": function(a, b) {return a - b},
    "*": function(a, b) {return a * b},
    "/": function(a, b) {return a / b},
};
const operand = getValidatedValue('Enter operand : +, -, *, /', chooseMathoperator)
console.log('your operand is -', operand)
const operandNumbers = getValidatedValue('enter numbers in format &,&,&...', validateNumber)
const operandNumbersFinal = arrayFormation( operandNumbers ,',', Number)

console.log('your numbers are -', operandNumbersFinal)
const result = operandNumbersFinal.reduce(calculation[operand])
console.log(`operation ${operand} to  ${operandNumbersFinal}  is  ${result}`)



function arrayFormation(operand, strsplit, numberformat){
    let format 
      format = operand.split(strsplit).map(numberformat)
    return format
}


function getValidatedValue(question, validationFunc){
    let value
    while(validationFunc(value)) {
        value = prompt(question);
    }
    return value
}

function chooseMathoperator(operator){
    return !(operator === '+'|| operator === '-'|| operator === '*'|| operator === '/')
    }

function validateNumber(number){
     if (number){
        return number.trim() === ''
     }
     return true
    }
