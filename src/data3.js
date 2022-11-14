function mult(...args) {
    if  (args.length <= 2) {
        return args[0] * args[1]
    }
    return args[0] * mult(...args.slice(1))
}
console.log(mult(3,4,5,6,7,8));

const fruits = ["banana", "orange", "lemon", "apple", "mango"];
const citrus = fruits.slice(-3,-1);
console.log(citrus)

function count(fromNumber) {
    console.log(fromNumber)
    let nextNum = fromNumber -1;
    
}
