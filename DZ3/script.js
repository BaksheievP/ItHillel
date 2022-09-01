
  let oddresult = 0
  let i = 0
  let evenresult = 0
const operandA = validateOperand('Enter number'); 
const operandB = caclulateNumbers(evenresult,oddresult)


function operandIsunvalid(value){
    return value < 0 || value === '' || value === null || isNaN(value)
 
}

function validateOperand(label){
        let operand
        while( operandIsunvalid(operand)){
            operand = prompt(label)
            }     
         
    return +operand
    }
    
   
function caclulateNumbers(evenresult, oddresult){
do{

    if(i % 2 == 0){
        evenresult += i
        i++
        }
    else {
       oddresult += i
       i++
    }
}  

while(i <= operandA)
return console.log(evenresult, oddresult)

}