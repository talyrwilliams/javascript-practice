const Prompt = require("prompt-sync");

// Conditional Operators

// Problem 1
console.log(3 < 8); // Compares if 3 is less than 8 in value, then prints result to the console (true)//

// Problem 2
console.log(15 == 27); //// Compares if 15 is equal to 27 in value, then prints result to the console (false)//

// Problem 3
console.log(15 === "15");// Uses conditional operator === to compare if 15 & "15" are equal in value and date type, then returns false since "15" is a string

// Problem 4
console.log(10 >= 10); // Compares if 10 is greater than or equal to 10, which returns true

// Problem 5
console.log("Hello" == true); // Compares if the string "Hello" is true, which is false

// Problem 6
let a = 34;
let b = 56;
console.log(a > b); // Checks if the variable a is greater in value than variable b, and returns false

// Problem 7
let c = "42";
let d = 21;
console.log(d <= c); // Checks if variable d is less than variable c in value, then returns true

// Problem 8
let e = 0;
let f = false;
console.log(e == f); // Checks if 0 is equal in value to false, and returns true

// Condition Statements

// Problem 9
let thirsty = false; // assigns the variable thirsty the value of false

if (thirsty == true) { // checks if thirsty is equal in value to true
  console.log("Have a glass of water"); //will only print to console if thirsty was equal to true
} // wont do anything

// Problem 10
let hungry = true;

if (hungry) {
  console.log("Taco Time"); // checks if the variable hungry is equal to true and prints Taco Time to the console
}

// Problem 11
let limit = 60;
let input = 45;

if (input < limit) {  // checks if input is less than limit in value
  console.log(true); // prints true to the console if print is less than limit in value
} else {
  console.log(false); // prints false to the console in print is less than limit in value
}  // will print true to the console

// Problem 12
let length = 3;
if (length > 0) { // checks if length is greater in value than 0
  console.log(Math.pow(length, 2)); // performs the math.pow function to return the value of length to the power of 2 to the console (9)
} else {
  console.log(0); // prints 0 to the console is length is less in value than 0
} // prints 9 to the console

// Problem 13
let height = 4.5;

if (height > 3.5) { // checks if height is greater in value than 3.5
  console.log("Tall engough to ride"); // prints "Tall enough to ride" if height is greater than 3.5 in value
} else {
  console.log("Too short to ride"); // prints "Too short to ride" if height is less than 3.5 in value
}

// Problem 14
let total = 150.0;
let discount = 0.1;
if (total >= 100.0) { // checks if the value of total is greater than or equal to 100
  total = total - total * discount; //multiplies total by discount, then subtracts that value from discount if total is greater than or equal to 100
}
console.log(total); // prints the value of total to the console

// Problem 15
let score = 78;

if (score == 100) {
  console.log("perfect"); // prints perfect to the console if score is equal to 100
} else if (score < 65) {
  console.log("needs imporvement"); // prints needs improvement to the console if score is less than 65
} else {
  console.log("doing well"); // prints doing well to the console if scorce is greater than 65 but less than 100
} // prints doing well to the console

// Problem 16
let card1 = 10;
let card2 = 9;

if (!(card1 + card2 > 21)) { // checks if the added value of card1 and card2 are not greater than 21
  console.log("valid total"); // prints to the console if added value of card1 and card2 is not greater than 21
} else {
  console.log("you bust");
} // prints valid total to the console

// Logical Operators

// Problem 17
let myPrompt1 = new Prompt();
let age = Number(myPrompt1("Enter your age: "));
let points = Number(myPrompt1("Enter amount of points on your license: "));

if (age > 21 && points == 0) { //checks if the value of age is equal to 21 and if points is equal to 0 in value
  console.log("Eligable for discounted insurance!"); // if both the conditions are true, this prints to the console
} else {
  console.log("No discount available"); // if either or both of the conditions aren't true, this prints to the console
}

// Problem 18
let myPrompt2 = new Prompt();
let isHungry;
let isThursty;
let input1 = myPrompt2("Are you hungry? (y/n): ");
let input2 = myPrompt2("Are you thursty? (y/n): ");

isHungry = input1 == "y" ? true : false; // checks if input1 is equal to "y" and assigns result to isHungry
isThursty = input2 == "y" ? true : false; // checks if input2 is equal to "y" and assigns result to isThursty

if (isHungry || isThursty) {
  console.log("go to the kitchen");// if either above condition is true, this prints to the console
} else {
  console.log("keep playing video games"); // if both above conditions aren't true, this prints to the console
}
