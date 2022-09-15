
function createCalculator() {
    let res = +prompt('enter number');
    return {
        set: (value) =>  res = value ,
        sum: (value) =>  res = res + value ,
        mult:(value) =>  res = res * value , 
        div: (value) =>  res = res / value ,
        sub: (value) =>  res = res - value ,
        }
};
 const calc = createCalculator();
 const result = calc.mult(2)
 console.log(result)