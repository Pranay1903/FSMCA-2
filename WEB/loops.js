//Program loops

//for loop
let i;
for (i = 0; i <= 5; i++) {
    console.log("for count " + i)
}


//do loop
let p = 1;
while (p <= 5) {
    console.log("while count: " + p);
    p++;
}

//do loop
let n = 1;
do {
    console.log("do while count: " + n);
    n++;
} while (n <= 5);

//break and continue statment
for (i = 0; i <= 10; i++) {
    if (i == 3) { 
        break;
    }
    console.log("The number is " + i);//it will print till 3 (3 will not printed)
}

// for in statement

var fruits = ["Apple", "Banana", "Cherry"];

for (let x in fruits){
    console.log(fruits[x]);
}