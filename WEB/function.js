// Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Coder"));

// Function Expression
const add = function (a, b) {
    return a + b;
};
console.log(add(3, 4));

// Arrow Function
const multiply = (a, b) => a * b;
console.log(multiply(2, 5));

// Function with Default Parameters
function greeting(name = "Coder") {
    return `Hello, ${name}!`;
}
console.log(greeting());
console.log(greeting("Pranay"));