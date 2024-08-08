let a = 10;
let b = 2;

// Arithmetic Operators
console.log("Arithmetic Operators:");
console.log(`a + b = ${a + b}`); // Addition
console.log(`a - b = ${a - b}`); // Subtraction
console.log(`a * b = ${a * b}`); // Multiplication
console.log(`a / b = ${a / b}`); // Division
console.log(`a % b = ${a % b}`); // Modulus
console.log(`a ** b = ${a ** b}`); // Exponentiation
console.log(`++a = ${++a}`); // Increment
console.log(`--b = ${--b}`); // Decrement

// Assignment Operators
console.log("\nAssignment Operators:");
let x = 20;

x += 10; // x=x+10
console.log(`x += 10 -> x = ${x}`);

x -= 5; // x=x-5
console.log(`x -= 5 -> x = ${x}`);

x *= 2; // x=x*2
console.log(`x *= 2 -> x = ${x}`);

x /= 4; // x=x/4
console.log(`x /= 4 -> x = ${x}`);

x %= 3; // x=x%3
console.log(`x %= 3 -> x = ${x}`);

// Comparison Operators
console.log("\nComparison Operators:");
console.log(`a == b -> ${a == b}`); // Equal to
console.log(`a != b -> ${a != b}`); // Not equal to
console.log(`a > b -> ${a > b}`); // Greater than
console.log(`a < b -> ${a < b}`); // Less than
console.log(`a >= b -> ${a >= b}`); // Greater than or equal to
console.log(`a <= b -> ${a <= b}`); // Less than or equal to

// Logical Operators
console.log("\nLogical Operators:");
let p = true;
let q = false;

console.log(`p && q -> ${p && q}`); // Logical AND
console.log(`p || q -> ${p || q}`); // Logical OR
console.log(`!p -> ${!p}`); // Logical NOT

// Bitwise Operators
console.log("\nBitwise Operators:");
console.log(`a & b -> ${a & b}`); // Bitwise AND
console.log(`a | b -> ${a | b}`); // Bitwise OR
console.log(`a ^ b -> ${a ^ b}`); // Bitwise XOR
console.log(`~a -> ${~a}`); // Bitwise NOT
console.log(`a << 1 -> ${a << 1}`); // Bitwise Left Shift
console.log(`a >> 1 -> ${a >> 1}`); // Bitwise Right Shift

// String Operators
console.log("\nString Operators:");
let str1 = "Hello";
let str2 = "World";
console.log(`str1 + " " + str2 -> ${str1 + " " + str2}`); // Concatenation

// Ternary Operator
console.log("\nTernary Operator:");
let age = 18;
let canVote = age >= 18 ? "Yes" : "No";
console.log(`Can vote: ${canVote}`);

// Type Operators
console.log("\nType Operators:");
console.log(`typeof a -> ${typeof a}`); // Type of variable