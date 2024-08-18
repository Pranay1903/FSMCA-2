// String Methods
let str = " Hello, World! ";

//  Length of a string
console.log("Length of string:", str.length);

//  Removes whitespace from both ends
let trimmedStr = str.trim();
console.log("Trimmed string:", trimmedStr);

//  Converts to uppercase
console.log("Uppercase:", trimmedStr.toUpperCase());

//  Converts to lowercase
console.log("Lowercase:", trimmedStr.toLowerCase());

//  Finds the index of a substring
console.log("Index of 'World':", trimmedStr.indexOf("World"));

//  Extracts a section of the string
console.log("Sliced string:", trimmedStr.slice(0, 5));

//  Replaces a substring with another string
console.log("Replaced string:", trimmedStr.replace("World", "JavaScript"));

// Checks if a string contains a specific substring
console.log("Includes 'Hello':", trimmedStr.includes("Hello"));

//  Splits a string into an array of substrings
let words = trimmedStr.split(" ");
console.log("Array from split:", words);

//   Returns the character at a specific index
console.log("Character at index 1:", trimmedStr.charAt(1));

// Array methods
let arr = [1, 2, 3, 4, 5];

//  Adds a new element to the end of the array
arr.push(6);
console.log("Array after push:", arr);

//  Removes the last element from the array
arr.pop();
console.log("Array after pop:", arr);

//  Adds a new element to the beginning of the array
arr.unshift(0);
console.log("Array after unshift:", arr);

//  Removes the first element from the array
arr.shift();
console.log("Array after shift:", arr);

//  Merges two arrays
let arr2 = [6, 7, 8];
let mergedArray = arr.concat(arr2);
console.log("Merged array:", mergedArray);

//  Joins all elements of an array into a string
console.log("Joined array:", mergedArray.join("-"));

//  Extracts a section of the array
console.log("Sliced array:", mergedArray.slice(2, 5));

//  Adds/removes elements from an array
mergedArray.splice(3, 1, 10);
console.log("Array after splice (replace):", mergedArray);

//  Reverses the order of elements in an array
console.log("Reversed array:", mergedArray.reverse());

//  Executes a function for each array element
console.log("Array elements:");
mergedArray.forEach((element) => console.log(element));

//  map: Creates a new array with the result of calling a function for every array element
let squaredArray = mergedArray.map((element) => element * element);
console.log("Squared array:", squaredArray);

//  Creates a new array with elements that pass a test
let filteredArray = squaredArray.filter((element) => element > 20);
console.log("Filtered array:", filteredArray);

//  Reduces the array to a single value
let sum = mergedArray.reduce((total, currentValue) => total + currentValue, 0);
console.log("Sum of array:", sum);


// Number Methods

let num = 1234.56;

// Converts a number to a string
let numStr = num.toString();
console.log("Number as a string:", numStr);

// Returns the number in exponential notation
let numExponential = num.toExponential(2);
console.log("Number in exponential notation:", numExponential);

// Rounds the number to a specified number of decimal places
let numFixed = num.toFixed(2);
console.log("Number with 2 decimal places:", numFixed);

// Formats the number to a specified length
let numPrecision = num.toPrecision(6);
console.log("Number with precision of 6:", numPrecision);

// Returns the primitive value of a Number object
let numValue = num.valueOf();
console.log("Primitive value of number:", numValue);

// Converts a value to a number
let numFromString = Number("12345");
console.log("Number from string:", numFromString);

// Parses a string and returns a floating-point number
let floatFromString = parseFloat("12345.6789");
console.log("Parsed float:", floatFromString);

// Parses a string and returns an integer
let intFromString = parseInt("12345");
console.log("Parsed integer:", intFromString);

// The difference between 1 and the smallest number greater than 1
console.log("Number.EPSILON:", Number.EPSILON);

// The largest possible number in JavaScript
console.log("Number.MAX_VALUE:", Number.MAX_VALUE);

// The smallest possible number in JavaScript
console.log("Number.MIN_VALUE:", Number.MIN_VALUE);

// The maximum safe integer (2^53 - 1)
console.log("Number.MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER);

// The minimum safe integer -(2^53 - 1)
console.log("Number.MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER);

// Represents positive infinity
console.log("Number.POSITIVE_INFINITY:", Number.POSITIVE_INFINITY);

// Represents negative infinity
console.log("Number.NEGATIVE_INFINITY:", Number.NEGATIVE_INFINITY);

// A "Not-a-Number" value
console.log("NaN value:", NaN);

