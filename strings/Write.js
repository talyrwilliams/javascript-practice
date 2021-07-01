const Prompt = require("prompt-sync");


class Write {


    // Problem 1: Concat
    // Prompt the user for two different words and concatante the two words
    // Ex. word1 = "Hello" and word2 = "World" then output = "HelloWorld"

    concat() {
        let prompt = new Prompt();
        let word1 = prompt("Enter a word : ");
        let word2 = prompt("Enter a different word : ");
        let conWords = word1 + word2;

        console.log(conWords);

    }

    // Problem 2: Empty String
    // Prompt the user and display true if the string is empty, otherwise display false
    emptyString() {
        let prompt2 = new Prompt();
        let check = prompt2("?");

        check != "" ? console.log("False") : console.log("True");

    }

    // Probmlem 3: Even Length
    // Prompt the user and display true if the string has an even number of characters, otherwise display false
    evenLength() {
        let prompt3 = new Prompt();
        let length = prompt3("Give me a word : ");

        length.length % 2 == 0 ? console.log("True") : console.log("False");

    }
    // Problem 4: GPA to Letter Grade
    // Prompt the user to enter their gpa and display their letter grade. Use the conversion found below 
    // (https://binary-translator.co/upload/cache/upload/imgs/how-to-use-free-gpa-calculator--m256x190.jpg)
    gpaGrade() {
        let prompt4 = new Prompt();
        let gpa = Number(prompt4("Enter your gpa : "));
        let grade;

        if (gpa == 4.0) {
            let grade = "A";
            console.log(grade);
        } else if (gpa <= 3.9 && gpa >= 3.0) {
            let grade = "B";
            console.log(grade);
        } else if (gpa <= 2.9 && gpa >= 2.0) {
            let grade = "C";
            console.log(grade);
        } else if (gpa <= 1.9 && gpa >= 1.0) {
            let grade = "D";
            console.log(grade);
        } else {
            let grade = "F";
            console.log(grade);
        }

    }

    // Problem 5: Calculator
    // Prompt the user for two numbers and an operation, generate the math problem, and display. 
    // Ex. num1 = 4, num2 = 2, operator = "-", then output should be 4-2=?

    calculator() {
        let prompt5 = new Prompt();
        let num1 = prompt5("Enter a number : ");
        let num2 = prompt5("Enter another number : ");
        let opera = prompt5("Enter an operation : ");
        let output = num1 + opera + num2;
        let finalOutput = output + " = " + eval(output);

        console.log(finalOutput);

    }


    // Problem 6: Starts with a Vowel
    // Prompt the user to enter a word and display true or false if the word they entered starts with a vowel

    startsV() {
        let prompt6 = new Prompt();
        let wordVowel = prompt6("Enter a word : ");

        if (wordVowel[0] == "a" || wordVowel[0] == "e" || wordVowel[0] == "i" || wordVowel[0] == "o" || wordVowel[0] == "u") {
            console.log("true")
        } else {
            console.log("false")
        };
    }


    // Problem 7: Ends with a Vowel
    // Prompt the user to enter a word and display true or false if the word they entered ends with a vowel
    endsV() {
        let prompt7 = new Prompt();
        let wordVowel2 = prompt7("Enter a word : ");
        let check = wordVowel2.charAt(wordVowel2.length - 1);

        if (check == "a" || check == "e" || check == "i" || check == "o" || check == "u") {
            console.log("true")
        } else {
            console.log("false")
        };
    }

}

let write = new Write();
write.concat();
write.emptyString();
write.evenLength();
write.gpaGrade();
write.calculator();
write.startsV();
write.endsV();