
// Problem 1
let hour = 5; // assigns the variable hour the value 5
let minute = 30; // assigns the variable minute the value 30
console.log(`${hour}:${minute}`) // will print out the template literal of hours & minutes

// ============================================================

// Problem 2
let a = 5; // assigns the variable a the value 5
let b = 7; // assigns the variable b the value 7
console.log(`${a} x ${b} = ${a * b}`) // prints variable a then X then variable b = the operation of a multiplied by b

// ============================================================

// Problem 3
let person = "Mike";
let age = 45;
let ageGroup;

if (age > 99) {
    ageGroup = 'centenarian'; // if the value of age is greater than 99, assign ageGroup the string "Centenarian"
} else {
    ageGroup = 'youngster'; // if the value of agg is not greater than 99
}

console.log(`That ${person} is a ${ageGroup}.`)
console.log(`That ${person} is a ${ageGroup}.`) // prints Mike is a Youngster since age is less than 99

// ============================================================

// Problem 4
let text = "Hola Mundo";
console.log(text[0]); // print the first character of the text string

// ============================================================

// Problem 5
let text = "Hola Mundo";
console.log(text[text.length - 1]); // prints the last character

// ============================================================

// Problem 6
let message = "Stop" + " " + "Drop" + " " + "Role"; //concatenates each string
console.log(message); // prints Stop Drop Role to the console

// ============================================================

// Problem 7
let message = "Stop" + "\n" + "Drop" + "\n" + "Role"; // concatenates strings with line breaks
console.log(message); // prints Stop Drop Role on 3 different lines

// ============================================================

// Problem 8
let age = 15;
let message = "You";

if (age >= 16) {
    message += " can "; // if the above condition is true, the string "can" will be added to the variable message
}

else {
    message += " can't ";// if the condition is false, the string "can't" will be added to the variable message
}

message += "drive"; // adds the string "drive" to the variable message

console.log(message); // prints you cant drive

// ============================================================

// Problem 9
let text = "Code Differently";
let subtext = text.substring(5); // assigns the variable subtext the string at and beyond the fifth character in the index
console.log(subtext);// prints Differently

// ============================================================

// Problem 10
let text = "Code Differently";
let subtext = text.substring(0, 4);//assigns the string the characters between 0 and 4 in the variable text
console.log(subtext);// prints Code

// ============================================================

// Problem 11
let text = "Code Differently";
let subtext = text.substring(10, 14) + text.substring(4); // adds the characters in the string from 10 to 14 and characted 4 and beyond
console.log(subtext);
