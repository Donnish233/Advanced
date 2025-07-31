// write a function that uses setTimeOut to simulate fetching a user's name after 3 seconds
// rewrite this function to work with promises
// rewrite it again using async/await
// Bonus: Fetch two users' data in parallel using promise.all and async/await

console.log("Start!!!")

// SetTimeout Solution
setTimeout(
    () => {
        console.log("User: Dami");
    },  3000
)

// Promise solution
const myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function () {
        myResolve("User: Anthony");
    }, 3000);
});
myPromise.then(function (value) {
    console.log(value)
        ;
});


// Async function solution
async function fetchUsers(params) {
  const username = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("User: Michael");
    }, 3000);
  });

  const result = await username;
  console.log(result);
}

console.log("Fetching Users....");
fetchUsers();
console.log("This run second time");

setTimeout(() => {
    console.log("End")
}, 3000);