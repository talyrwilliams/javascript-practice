const Prompt = require('prompt-sync');


class Create {

    // Problem 1: JavaScript Ascii Art
    // Replicate the image found in "resources/createOne.png" in the terminal
    jsArt() {
        console.log("    J     A    V     V    A");
        console.log("    J    A A    V   V    A A");
        console.log("J   J   AAAAA    V V    AAAAA");
        console.log(" J J   A     A    V    A     A");
    }

    // Problem 2: Celsius to Fahrenheit
    // Prompt the user for a temperature in celsius, convert the value to its
    // fahrenheit equivalent, and display in the terminal
    double() {
        let prompt = new Prompt();
        let numberOne = prompt("Enter a temperature : ");
        let numberTwo = (numberOne * 1.8) + 32;
        console.log(numberTwo);
    }

    // Problem 3: Hours and Minutes
    // Prompt the user for a number of minutes and display the equivalent number
    // of hours and minutes
    // Ex: 67 -> 1 hour, 7 minutes
    // Ex: 139 -> 2 hours, 19 minutes

    timeConvert() {
        let prompt = new Prompt();
        var num = prompt("Enter a time in number of minutes : ");
        var hours = Math.floor(num / 60);
        var minutes = num % 60;
        var time = num + " minutes = " + hours + " hour(s) and " + minutes + " minute(s). "
        console.log(time);
    }


    // Problem 4: BMI Calculator
    // Prompt the user for their weight and height and display their BMI

    bmiCalc() {
        let prompt = new Prompt();
        var weight = prompt("Enter your weight : ");
        var height = prompt("Enter your height : ");
        var result = weight / (height * height) * 703;

        console.log(result);
    }

    // Problem 5: Tip Calculator
    // Prompt the user for a bill amount and gratuity rate and display to bill
    // plus gratuity

    tipCalc() {
        let prompt = new Prompt();
        var bill = Number(prompt("Enter your bill amount : ")); // Get bill amount
        var tip = Number(prompt("Enter your gratuity rate : ")); // Get tip rate
        var realTip = (bill / 100) * tip; // Calculate tip cost
        var finalBill = bill + realTip; // add bill amount and tip cost

        console.log(finalBill); // print final bill to the terminal
    }

    // Problem 6: Quadratic Formula
    // Prompt the user for three values (a, b, and c) and use those values to
    // calculate x in the quadratic formula. Display the values of x that you
    // calculate

    quadFormula() {
        let prompt = new Prompt();
        let a = Number(prompt("Enter a : "));
        let b = Number(prompt("Enter b : "));
        let c = Number(prompt("Enter c : "));
        let x = b * b - 4 * a * c;
        console.log(x);
    }

}

let myCreate = new Create();
myCreate.jsArt();
myCreate.double();
myCreate.timeConvert();
myCreate.bmiCalc();
myCreate.tipCalc();
myCreate.quadFormula();