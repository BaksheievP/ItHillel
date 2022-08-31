
  let sum = 0
  let i = 0
  let j = 0
const operandA = caclulateNumbers('Enter number'); 
const operandB = sumEvennumbers('sum of even numbers -',sum)
const operandC = sumOddnumbers('sum of odd numbers -',sum)


function validateOperand(value){
    return value < 0 || value === '' || value === null || isNaN(value)
 
}

function caclulateNumbers(label){
        let operand
        while( validateOperand(operand)){
            operand = prompt(label)
            }     
         
    return +operand
    }
    
   
function sumEvennumbers(label,sum){   
do{
    if(i % 2 == 0)
    sum += i
    i++
   
}
while(i <= operandA)
return console.log(label,sum)
}

function sumOddnumbers(label,sum){   
    do{
        if(j % 2 != 0)
        sum += j
        j++
       
    }
    while(j <= operandA)
    return console.log(label,sum)
    }


