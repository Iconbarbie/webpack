function foo(a,b) {
    return function () {
        return a + b
    }
}
var x = foo(3,4)

console.log(x());
console.log(x());
