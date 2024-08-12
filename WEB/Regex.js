const text="The quick brown fox jumps over 12 lazy dog."
const multi=`first person
second person
third person`;

// Modifiers
// i: search case insensitive
// g: Finds all matches rather than stopping after the first match
// m: Enables multi-line matching


// 1. Modifier i 
const pattern1= /Brown/i;
console.log(pattern1.test(text));

// 2. Modifier g
const pattern2= /u/g;
console.log(text.match(pattern2));

//3. Modifier m
const pattern3 = /^second/m;
console.log("Multiline Search:", pattern3.test(multi));

// Brackets: used to define a range or set of characters to match

//matching digit
const pattern4 = /[0-9]/g;
console.log("Digits:", text.match(pattern4)); 

//matching non alphabetical
const pattern5 = /[^a-zA-Z]/g;
console.log("Non-Alphabet Characters:", text.match(pattern5)); 


// Quantifiers: pecify the number of occurrences of a character or group of characters
const pattern6 = /\d+/g;
console.log("One or More Digits:", text.match(pattern6));

const pattern7 = /\d*/g;
console.log("Zero or More Digits:", text.match(pattern7));

// Anchors: used to match positions in the string

// Anchor ^  : match the start of the string
const pattern8 = /^The/;
console.log("Starts with 'The':", pattern8.test(text));

// Anchor $ : Match the end of the string
const pattern9 = /dog\.$/;
console.log("Ends with 'dog.':", pattern9.test(text));

// Metacharacters: are special characters that represent a class of characters

// Metacharacter \w : Match any word character (alphanumeric + underscore)
const pattern10 = /\w+/g;
console.log("Word Characters:", text.match(pattern10)); 

// Metacharacter \W : Match any non-word character (opposite of \w)
const pattern11 = /\W+/g;
console.log("Non-Word Characters:", text.match(pattern11)); 