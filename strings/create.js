
// Problem 1: Name Flip
// Prompt the user to enter their first and last name, return their 
// last name - comma - first name.
// ex: text => "Kaleb Burd" then output = "Burd, Kaleb"

nameFlip(){
    let prompt = new Prompt();
    let firstName = prompt("Enter your first name : ");
    let lastName = prompt("Enter your last name : ");
    let id = lastName + ", " + firstName;

    console.log(id);

}


// Problem 2: Valid SSN
// Prompt the user to enter their SSN and determine if it is a valid SSN or not. 
// A valid SSN follows the following format: NNN-NN-NNNN where N is a number 0-9

validSSN(){
    let prompt2 = new Prompt();
    let ssn = prompt2("Enter your SSN : ");
    let validate;

    /*  Now, for validating. A simple checklist of rules. A valid SSN will:
Not start with 000, 666 or a 9 (we’re only up through the 800s at this time)
Have be nine digits total
May be separated by dashes
*/

    /* (?!000|666) //Not start with 000 or 666
    [0-8][0-9]{2} //first digit must be 0-8, next digit must be 0-9 and so must the next one, hence the {2}
    - // must be a hyphen here
    (?!00)// not start with 00
    [0-9]{2}//first digit must be 0-9 and so must the next {2}
    - // must be a hyphen here
    (?!0000) //not start with 0000
    [0-9]{4} // first 4 digits must be 0-9
     */

    regexp = /^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$/;

    if (regexp.test(ssn)) {
        validate = true;
    }
    else {
        validate = false;
    }
    console.log(validate);
}

// Problem 3: Valid Telephone Number
// Prompt the user to enter their telephone number and determine if it is a valid telephone 
// number or not. A valid telephone number follows the following format: (NNN) NNN-NNNN 
// where N is a number 0-9

validNum(){
    let prompt3 = new Prompt();
    let phoneNum = prompt3("Enter your phone number : ");
    let validCheck;


    /* \( // checks for (
    [0-9]{3} // first 3 digits must be 0-9
    \) // checks for )
    - // checks for - */

    regexp = /^\d{3}[ -]?\d{3}[ -]?\d{4}$/;

    if (regexp.test(phoneNum)) {
        validCheck = true;
    }
    else {
        validCheck = false;
    }
    console.log(validCheck);
}

// Problem 4: Solve a Math Problem
// Prompt the user for a math problem in string form and calculate the answer to the 
// problem. You solution should work for the following operations: +, -, x, ÷, %, ^
// Ex1: input = "3x4" then output = 12
// Ex2: input = "2^3" then output = 8;

math(){
    let prompt4 = new Prompt();
    let math = prompt4("Enter a math problem: ");
    let prob = math.split(/([/,+,\-,*,^,%])/);
    let num1 = parseInt(prob[0]);
    let num2 = parseInt(prob[2]);
    let op = prob[1];
    let equ = eval(num1 + op + num2);
    console.log(equ)
}

// Problem 5: License Plate Number Generator
// Generate a license plate number. Each license plate should start with 3 uppercase 
// letters followed by 4 numbers. The letters and numbers should be choosen randomly
// and be different every time the function is called
// ex1: output = GAO7761
// ex2: output = SWE3098

licensePlate(){

    regexp = /\([A-Z]{3}\)[0-9]{4}$/;

    if (regexp.test(phoneNum)) {
        validCheck = true;
    }
    else {
        validCheck = false;
    }
    console.log(licensePlate);
}


// Problem 6: Keypad Conversion
// Given a letter, convert the into the sequance of key presses on telephone 
// keypad, seen here (https://en.wikipedia.org/wiki/Telephone_keypad)
// Ex1: Input = b then output = 22
// Ex2: Input = y then output = 999

// Problem 7: Cypher
// Given a letter and a shift amount, cypher the letter. To cypher a letter, you shift letter
// by the shift amount.
// Ex1: shift = 4 and message = "b" then output = "f" 
// Ex1: shift = 2 and message = "z" then output = "b" 
