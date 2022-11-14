function foo() {
    return 35
}
function bar() {
    return 40
}

function add(x,y) {
    return x + y
}
add(32,45)

function add2(fn1, fn2) {
    return add(fn1(), fn2())
}
add2(foo, bar)

function data(value) {
    return function() {
        return value;
    }
}