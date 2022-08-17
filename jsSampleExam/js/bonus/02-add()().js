// Make this syntax possible: var a = add(2)(3); //5

function add(x) {
    return function(y) { return x + y; };
}

console.log(add(2)(3));