
const operandA = getMathoperand('Enter operand : +, -, +, /')
const numbersA = getNumbers('How amount numbers are you use?')
console.log(numbersA)

const numbersB = getNumbers('Enter first number')


for(let i = 0; i <= numbersB; i++){
    console.log(i) 
}









function chooseMathoperator(operator){
    return operator === '+'|| operator === '-'|| operator === '*'|| operator === '/' 
    }

function getMathoperand(label){
    let value 
while(!chooseMathoperator(value)) {
        value = prompt(label);
       }
    return label
}

function getNumbers(amountnumbers){
    let num 
    while(validateNumber(num)){
        num = prompt(amountnumbers)
    }
    return num
}

function validateNumber(number){
    return number === null || number === '' || isNaN(number);
    }
