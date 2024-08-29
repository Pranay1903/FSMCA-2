// async function getUsers() {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/users"
//     );
//     let data = await response.json(); //here  we use await beacause oarsing process may take time so it will wait for to parse and then go to next line
//     console.log(data);
//   } catch (error) {
//     console.log(`Eroor:${error}`);
//   }
// }

// getUsers();

const promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("consuming promise");
    resolve();
  });
});

promise.then(function () {
  console.log("promise is consumed");
});

// abbove work using fetch and then
fetch("https://api.github.com/users/Pranay1903")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(`Error: ${error}`);
  });

const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("consuming promiseOne");
    resolve();
  },1000);
});

promiseOne.then(function () {
  console.log("promiseOne is consumed");
});
