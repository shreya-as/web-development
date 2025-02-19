// variable declaration using var keyword
var firstName = "Shreya";
var firstName = "Kajol"; //re-declare
console.log(firstName, "firstName");

//function declaration
function printName() {
  var lastName = "Thapa"; //function scope
  console.log(firstName + " " + lastName, "name"); //log the firstName
}
printName(); //function call
// console.log(lastName, "lastName");

// variable declaration using let keyword
let fruit = "Apple";
fruit = "Banana"; //re-assign values
// let fruit = "Banana"; //Cannot redeclare block-scoped variable 'fruit'.ts(2451)
console.log(fruit, "fruit");

const book = "Zara";
// const book = "Zara"; //Cannot redeclare block-scoped variable 'book'.ts(2451)
// book = "News Book"; // cannot be re-assigned
console.log(book, "book");

{
  let color = "green"; // let and const are block scope
}

console.log(color, "colorcolor");
//block

let isValid = true; //boolean
let isSelected = null; // null
let greet;
// var is declared and value is not assigned so it will return undefined
console.log(greet, "greet greet");
