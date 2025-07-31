
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