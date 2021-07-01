
const Prompt = require('prompt-sync');

// Output

// Problem 1
console.log("Hello World");// prints Hello World to the terminal

// Problem 2
console.log("Stop");// prints Stop to the terminal
console.log("Drop");// prints Drop to the terminal
console.log("Roll");// prints Roll to the terminal

// ================================================================
// Math Operators

// Problem 3
console.log(3 + 5);
// adds 3 & 5 then prints 8 to the terminal


// Problem 4
console.log(9 - 7);
// prints 2 to the terminal

// Problem 5
console.log(5 * 5);
// prints 25 to the terminal

// Problem 6
console.log(4 / 2);
// prints 2 to the terminal


// Problem 7
console.log(5 / 2);
// prints 2.5 to the terminal


// Problem 8
console.log(5 / 2.0);
// prints 2.5 to the terminal

// Problem 9
console.log(5 % 2);
// prints remainder of 1 to the terminal

// Problem 10
console.log(10 % 2);
// prints remainder of 0 to the terminal

// Problem 11
console.log(Math.pow(3, 2)); // using the math object on the pow method, the terminal performs the operation 3^2 and prints the answer which = 9

// Problem 12
console.log(Math.pow(4, 2));
// using the math object on the pow method, the terminal performs the operation 4^2 and prints the answer which = 16

// ================================================================
// Variables

// Problem 13
let myNumber = 6; // assigns the variable myNumber the value of 6
console.log(myNumber); // prints the value of myNumber to the terminal which is 6

// Problem 14
let yourNumber = 6; // assigns the variable yourNumber the value of 6
console.log(2 * yourNumber); // performs the operation of 2 multiplied by the value of the variable yourNumber(6) and prints the product to the terminal which is 12

// Problem 15
let a = 6;// assigns the variable a the value of 6
let b = 3;// assigns the variable b the value of 3
console.log(a * b); // performs the operation of a multiplied by b and prints the product to the terminal which is 18

// Problem 16
let sideLength = 4; // assigns the variable sideLength the value of 4
let area = Math.pow(sideLength, 2); // uses the math.pow method to return the value of sideLength to the power of 2, and assigns that value to the variable area
console.log(area); // prints the value of area to the terminal

// ================================================================
// Input

// Problem 17
let myPrompt = new Prompt(); // creates a new instance of the prompt then assigns to variable myPrompt
let input = myPrompt(); // uses the obj to capture input from user then assigns input to variable input
console.log(input); // prints the value of input to the terminal

// Problem 18
let thisPrompt = new Prompt(); // creates a new instance of the prompt then assigns to the variable myPrompt
console.log(thisPrompt("Enter a number: ")); // uses myPrompt to display

// Problem 19
let yourPrompt = new Prompt();// creates a new instance of the prompt then assisns to the variable myPrompt
let c = Number(yourPrompt());// prompts user to enter a numerical value and assigns it to the variable c
let d = Number(yourPrompt());// prompts user to enter a numerical value and assigns it to the variable d
console.log(c + d);// uses addition operation to add the values of variables c + d, and prints the resulting value to the console

// Problem 20
let ourPrompt = new Prompt();// creates a new instance of prompt then assigns to the variable myPrompt
let lengthOfSide = Number(ourPrompt());// 
let areaOfSquare = Math.pow(lengthOfSide, 2);// 
console.log(areaOfSquare);// prints the value of areaOfSquare to the terminal
