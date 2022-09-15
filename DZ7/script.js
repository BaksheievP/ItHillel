
function createCalculator() {
    let res = 0;
    return {
        set: function (value) { 
            return res = value 
        },
        sum: function sum(value) {
            return res = res + value
        },
        mult: function mult(value) {
            return res = res * value
        },
        div: function div(value) {
            return res = res / value
        },
        sub: function sub(value) {
            return res = res - value
        },
        
    };
}

const calc = createCalculator()

    
calc.set(15);
console.log(set)
calc.sum(15);
calc.calc(15);
calc.div(15);