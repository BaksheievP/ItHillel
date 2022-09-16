
let res
function createCalculator(res) {
    return {
        set: (value) => res = value,
        sum: (value) => res = res + value,
        mult: (value) => res = res * value,
        div: (value) => res = res / value,
        sub: (value) => res = res - value,
    }
};
const calc = createCalculator(100);