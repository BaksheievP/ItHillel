const calculation = {
    "+": function(a, b) {return a + b},
    "-": function(a, b) {return a - b},
    "*": function(a, b) {return a * b},
    "/": function(a, b) {return a / b},
};

const operand = getValidatedValue('Enter operand : +, -, *, /', chooseMathoperator)
console.log('your operand is -', operand)
const counter = getValidatedValue('How amount numbers do you use?', validateNumber)
console.log('you use -', counter,'numbers')


let result = getValidatedValue('Enter number', validateNumber)
console.log(result)
for(let i = 0; i < counter - 1; i++){

    const numberItem = getValidatedValue('Enter number', validateNumber)
    console.log(numberItem)
    result = calculation[operand](result, +numberItem) 
    
}
console.log('calculation result -',result)


function chooseMathoperator(operator){
    return !(operator === '+'|| operator === '-'|| operator === '*'|| operator === '/')
    }


function validateNumber(number){
    return number === null || number === '' || isNaN(number);
    }

    function getValidatedValue(question, validationFunc){
        let value
        while(validationFunc(value)) {
            value = prompt(question);
        }
        return value
    }

