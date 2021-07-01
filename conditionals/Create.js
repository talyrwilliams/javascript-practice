const Prompt = require("prompt-sync");

class Create {

  // Problem 1: Fire and Ice

  // Prompt the user for two numbers. If one is less than 32 and the other greater than 212, display
  // "Fire and Ice!", otherwise display "Lukewarm"

  // Ex 1: If temp1 is 240 and temp2 is 0 then display "Fire and Ice!"
  // Ex 2: If temp1 is 0 and temp2 is 240 then display "Fire and Ice!"
  // Ex 3: If temp1 is 40 and temp2 is 0 then display "Lukewarm"
  fireandice() {

    let myPrompt = new Prompt();
    let temp1 = Number(myPrompt("Enter a number: "));
    let temp2 = Number(myPrompt("Enter another number: "));

    if (temp1 < 32 && temp2 > 212)
      console.log("Fire and Ice!");
    else if (temp2 < 32 && temp1 > 212)
      console.log("Fire and Ice!");
    else
      console.log("Lukewarm");
  }
  // ===================================================================
  // Problem 2: Fencing

  // Create an function that produces the price of fences by the foot.
  // Prompt the user for a total length in feet of fence to purchase.
  // Each foot should cost $16.00, but if the purchase more than 100 feet of Fencing
  // a discount of 20% for each foot over 100 feet. Display the final cost

  // Ex 1: If distance is 50 feet then the total cost will be 800
  // Ex 2: If distance is 150 feet the the total cost will be 2240 (100ft at regular cost and 50ft at discounted rate)
  fence() {
    let myPrompt2 = new Prompt();
    let fenceLength = Number(myPrompt2("Length of fence? (ft): "));
    let fencePrice = 16.00;
    let total;
    let getsDiscount;
    let discounted;

    if (fenceLength <= 100) {
      let total = fenceLength * fencePrice;
      console.log("Your total cost is : ", total);
    } else if (fenceLength >= 101) {
      let discounted = (fenceLength - 100) * 12.80;
      let total = discounted + 1600.00;
      console.log(total);
    }
  }

  // ===================================================================
  // Problem 3: Guessing Game

  // Generate a number between 1-10. Ask the user to guess the number and display if the user guessed correctly or not.
  // Additionally, if the user guesses within 1 number above or below also output that they were close.

  guessingGame() {
    let myPrompt3 = new Prompt();
    let randomNum = ~~(Math.random() * (10 - 1) + 1);
    let guessNum = Number(myPrompt3("Guess a number between 1 & 10 : "));
    if (randomNum == guessNum) {
      console.log("correct")
    } else if (randomNum == guessNum - 1 || randomNum == guessNum + 1) {
      console.log("wrong, but close! The correct answer was : ", randomNum)
    } else if (randomNum !== guessNum) {
      console.log("wrong, the correct answer was : ", randomNum)
    }
  }

  // ===================================================================
  // Problem 4: Validation

  // Create a function that asks the user for input and checks the input to validate it is a number.
  // Display to the user if they entered a valid number or not. Additionally, the number can not be under 100 or above 99,999

  validate() {
    let myPrompt4 = new Prompt();
    let enterNum = myPrompt4("Enter a number between 100-99,000 : ");

    if (!isNaN(enterNum)) {
      if ((enterNum > 99) && (enterNum < 99001)) {
        console.log("valid number")
      } else {
        console.log("invalid number")
      }
    } else {
      console.log("not a number")
    }

  }

  // validate(){
  // let prompt = new Prompt();
  //let input = prompt("User input: ");
  //let output
  //if (isNaN(input)){
  //  output = "Not a Number"
  //}
  //else {
  //  output = (input < 100 || input > 99999) ? "Number is not in range" : "Input is a NUMBER";
  // }
  // console.log(output);
  // }
}


let create = new Create();
create.fireandice();
create.fence();
create.guessingGame();
create.validate();