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
// console.log(book, "book");

{
  let color = "green"; // let and const are block scope
}

// console.log(color, "colorcolor");
//block

let isValid = true; //boolean
let isSelected = null; // null
let greet;
// var is declared and value is not assigned so it will return undefined
console.log(greet, "greet greet");

//complex data types

// let age="20";
// let name="ram";

//let name="akash"

//curly braces
//key-value pairs
let person = {
  name: "Ram",
  age: 23,
  height: 6,
};
console.log(person["age"], "age");
console.log(person.height, "person height");

//square brackets

let fruits = ["Apple", "Banana", "Orange", ""]; //array of string
console.log(fruits[0], "fruits"); // access element using index
console.log(fruits.length, "fruits"); // length

let ages = [10, 20, 30, 40, 50, 100]; //Array of numbers
console.log(ages, "ages ages");

// array of objects
let students = [
  {
    name: "Ram",
    age: 20,
  },
  {
    name: "shyam",
    age: 21,
  },
  {
    name: "Hari",
    age: 23,
  },
];

console.log(students[0].age, "hey ram");

let age = 23;

//function to print age
function printAge(age) {
  console.log(age, "age of students");
}
printAge(students[0].age);
printAge(students[1].age);

// Hi i am name i am .. years old.
function printNameAndAge(name, age) {
  console.log("Hi i am " + name + "I am " + age + "years old.");
}

printNameAndAge("Ram", 20);
