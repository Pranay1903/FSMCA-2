//Date object

let now=new Date();
console.log("Current time and date:",now)

// breaking time and date 
console.log("year:",now.getFullYear());
console.log("month:",now.getMonth()+1); // 0=january , 11=december  (added +1 for human readable)
console.log("date:",now.getDate());
console.log("day:",now.getDay());// 0=sunday , 6=saturday
console.log("hour:",now.getHours());
console.log("minute:",now.getMinutes());
console.log("second:",now.getSeconds());
console.log("millisecond:",now.getMilliseconds());


// Setting date
now.setFullYear(2025);
now.setMonth(11); // December
now.setDate(25);
console.log("updated date:", now);

//Local date and time
console.log("Local date:", now.toLocaleDateString()); 
console.log("Local time:", now.toLocaleTimeString());

let date1 = new Date("2024-08-10");
let date2 = new Date("2024-08-15");

//time diffrence
let timediff = date2 - date1;
console.log("Time Difference(milliseconds):", timediff);

let daydiff = timediff / (1000 * 60 * 60 * 24);
console.log("Time Difference(days):", daydiff);