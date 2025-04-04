let a = "hello";
let b = "coders!";
// synchronous programming
console.log(a, "a");

// api calls 4s
function getUserName() {
  console.log("Karuna");
}
// 4s
setTimeout(getUserName, 10000); //1000ms equals to 1s

console.log(b, "b");
console.log(b, "b");

// external forces dependency example: api calls

//multiplication function
const multiply = (a, b) => {
  console.log(a * b);
};

const getMultiplication = (a, b, callBack) => {
  callBack(a, b);
};

// callback function pass as an argument to another function
getMultiplication(10, 5, multiply);

const persons = [
  { firstname: "Malcom", lastname: "Reynolds" },
  { firstname: "Kaylee", lastname: "Frye" },
  { firstname: "Jayne", lastname: "Cobb" },
];
//  ["Malcom","Kaylee","Jayne"]

const getUserNames = (p, i) => {
  console.log(p.firstname, "firstName");
  return p.firstname;
};
let users = persons?.map(getUserNames);
console.log(users, "users");

let myPromise = new Promise(function (myResolve, myReject) {
  let result = false;

  if (result) {
    myResolve("Success to get data.");
  } else {
    myReject("Fail to get data.");
  }
});

myPromise
  .then((result) => console.log(result, "result result"))
  .catch((error) => console.log(error, "error"));
