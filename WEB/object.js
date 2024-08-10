//Object
//Three ways to create objects in JavaScript

// 1. Using Object Literals 
//    Example: const person = { firstName: "Pranay", lastName: "Patel" };

// 2. Using the new Keyword
//    Example: `const person = new Object();`  

// 3. Using a Constructor Function
//    This approach involves creating a function that acts as a blueprint for the object. You pass values as arguments when creating new instances of the object.
//    Example:
//      function Person(firstName, lastName) {
//          this.firstName = firstName;
//          this.lastName = lastName;
//      }
//      const person = new Person("Pranay", "Patel");

const person = {
    firstName: "Pranay",
    lastName: "Patel",
    age: 21,
    isMarried: false,
    hobbies: ["reading", "traveling", "listening"],
    
    // Method: A function defined as a property of an object
    fullName: function() {
        return this.firstName + " " + this.lastName;
    },
    
    // Method to greet the person
    greet: function() {
        console.log(`Hello, my name is ${this.fullName()} and I am ${this.age} years old.`);
    },

    // Getter method for full name
    get getFullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    // Setter method to change the person's name
    set changeName(newName) {
        const parts = newName.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};


// Accessing Object Properties
console.log(`First Name: ${person.firstName}`); 
console.log(`Last Name: ${person.lastName}`); 
console.log(`Age: ${person.age}`); 
console.log(`Is Married: ${person.isMarried}`); 
console.log(`Hobbies: ${person.hobbies.join(", ")}`); 

// Calling Object Methods
person.greet(); 
console.log(`Full Name: ${person.fullName()}`); 

// Using Getter Method
console.log(`Full Name: ${person.getFullName}`); 

// Using Setter Method
person.changeName = "Pranaykumar Patel";
console.log(`New Name: ${person.fullName()}`); 

// Adding New Properties
person.email = "pranaypatel1933@gmail.com";
console.log(`Email: ${person.email}`); 

// Adding New Methods
person.sayGoodbye = function() {
    console.log("Goodbye!");
};
person.sayGoodbye(); 

// Using 'this' Keyword
const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2021,
    startEngine: function() {
        console.log(`Starting ${this.brand} ${this.model}`);
    }
};
car.startEngine(); 

// Object Methods: Object.keys, Object.values, Object.entries
console.log("Object.keys(person):", Object.keys(person)); 
console.log("Object.values(person):", Object.values(person)); 
console.log("Object.entries(person):", Object.entries(person)); 

// Checking if a property exists
console.log("Has property 'age':", person.hasOwnProperty('age')); 