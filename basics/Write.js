const Prompt = require('prompt-sync');

class Write {
    // Output

    // Problem 1: Info
    // Display your name, birthday, and birth place
    console.log("Talyr Williams");
    console.log("01/01/2021");
    console.log("Chester, PA");

    // Problem 2: Welcome Repeated
    // Display the message "Welcome to Java!" five times
    console.log("Welcome to Java!");
    console.log("Welcome to Java!");
    console.log("Welcome to Java!");
    console.log("Welcome to Java!");
    console.log("Welcome to Java!");


    // ================================================================
    // Math Operators

    // Problem 3: Area and Perimeter
    // Write a program that displays the area and perimeter of a rectangle
    // that has a width of 8.3 and a height of 4.1
        let width = 8.3;
let height = 4.1;
let area = width * height;
let perimeter = (2 * width) + (2 * height);
console.log(area, perimeter);

// Problem 4: Mph
// A runner took 58 minutes and 20 seconds to run 12 kilometers. Calculate
// how fast there were running in mph
myMph(){
    let time = (58 * 60) + 20; // convert time to seconds & assign value to variable time
    let km = 12; // assign the variable km the value of the distance
    let paceSecs = time / km; // divide time by distance traveled to determine pace in seconds
    let paceMins = paceSecs / 60; // convert seconds back to minutes
    let kmh = 60 / paceMins; // divide pace by 60 to determine value of speed
    let mph = kmh / 1.609; // divide kmh by 1.609 to convert kmh to mph 
    console.log(mph); // print the value of mph to the terminal
}

// Problem 5: Cone Volume
// A pyramid is 10 ft tall and has a radius of 2.1 ft. Calculate the volume of
// the pyramid
coneVolume(){
    // create variable for height
    let h = 10;
    // create variable for radius
    let r = 2.1;
    // use math.pow for base & exponent (r, 2)
    // create variable for volume and write out formula
    let v = Math.PI * Math.pow(r, 2) * h / 3;
    console.log(v);
}
// ================================================================
// Variables

// Problem 6: Two Variable
// Create two variables, each with their own number. Display the output of the
// sum of the two numbers
myVariables() {
    let a = 6;// assigns the variable a the value of 6
    let b = 3;// assigns the variable b the value of 3
    console.log(a + b); // prints sum (9) to the terminal
}
// Problem 7: Double or Nothing
// Create a variable and assign it an integer value. Update the variable to have
// twice its original value.
// Ex: If the variable starts at 6, it's value after the doubling should be 12

double() {
    let prompt = new Prompt();
    let numberOne = prompt("Enter a number");
    let numberTwo = numberOne * 2;
    console.log(numberTwo);
}

// Problem 8: Counting up
// Create a variable and assign it a value of 0. Increment its value 5 times. The
// variable should have a value of 5 at the end of the program
countUp(){
    let i;
    for (i = 0; i <= 5; i++) {
        console.log(i);
    }
}

// Problem 9: Counting down
// Create a variable and assign it a value of 3. Increment its value 6 times. The
// variable should have a value of -3 at the end of the program
Countdown() {
    let i;
    for (i = 3; i >= -3; i--) {
        console.log(i);
    }


    // ================================================================
    // Input

    // Problem 10: Age
    // Prompt the user for their age and display what the user enters

    age(){
        let prompt = new Prompt();
        let age = prompt("What is your age?");
        console.log(age);
    }

    // Problem 11: Circumference
    // Prompt the user for a radius, calculate the circumference of a circle with
    // that radius, and display the result
    circPrompt(){
        let prompt = new Prompt();
        let input = prompt("What is the radius");
        console.log(2 * Math.PI * input);
    }


    // Problem 12: Area of a Circle
    // Prompt the user for a radius, calculate the area of a circle with that radius,
    // and display the result
    circAreaPrompt(){
        let prompt = new Prompt();
        let input = prompt("What is the radius");
        console.log(Math.PI * (Math.Pow(input, 2));
    }

    // Problem 13: Two Numbers
    // Prompt the user for two numbers, multiply them, and display the answer in the
    // terminal
    twoInputPrompt() {
        let prompt = new Prompt();
        let input1 = prompt();
        let input2 = prompt();
        console.log(input1 * input2);
    }
}

let myWriter = new Write();
myWriter.myInfo();
myWriter.message();
myWriter.myArea();
myWriter.coneVolume();
myWriter.myVariables();
myWriter.double();
myWriter.countUp();
myWriter.countDown();
myWriter.age();