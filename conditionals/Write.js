const Prompt = require("prompt-sync");

class Write {

  // Problem 1: Relaxation
  // Ask the user if they are at work (true or false) and if they are traveling (true or false). Using
  // those two pieces of information, determine if we are relaxing or not. We are relaxing if it we are
  // not a work or we're traveling. Return display if we are relaxing or not.

  // Ex 1: If we are not working and not traveling then we are relaxing
  // Ex 2: If we are working and not traveling then we are not relaxing
  // Ex 3: If we are not working and traveling then we are relaxing

  relax() {

    let myPrompt = new Prompt();
    let workQ;
    let travelQ;
    let input1 = myPrompt("Are you at work? (t/f): ");
    let input2 = myPrompt("Are you traveling? (t/f): ");

    workQ = input1 == "f" ? true : false; // checks if input1 is equal to "y" and assigns result to workQ
    travelQ = input2 == "f" ? true : false; // checks if input2 is equal to "y" and assigns result to travelQ

    if (workQ == true) { // checks if thirsty is equal in value to true
      console.log("We are relaxing"); //will only print to console if thirsty was equal to true
    } else {
      console.log("We are not relaxing"); // prints false to the console in print is less than limit in value
    }

  }

  // ================================================================
  // Problem 2: Laughing Babies
  // Ask the users if each of their babies are laughing. We have a problem if both babies are laughing or
  // if neither baby is laughing. Display if there is a problem or not.

  // Ex 1: If both babies are laughing then we have a problem
  // Ex 2: If neither baby is laughing then we have a problem
  // Ex 3: If the first baby is not laughing and the second is, we don't have a problem

  babies() {

    let myPrompt1 = new Prompt();
    let babyA;
    let babyB;
    let input1 = myPrompt1("Is your first child laughing? (y/n): ");
    let input2 = myPrompt1("Is your second child laughing? (y/n): ");

    babyA = input1 == "y"  // checks if input1 is equal to "y" and assigns result to workQ
    babyB = input2 == "y" // checks if input2 is equal to "y" and assigns result to travelQ

    if (babyA == babyB) {
      console.log("We have a problem");
    } else {
      console.log("We don't have a problem");
    }
  }
  // ================================================================
  // Problem 3: First digit
  // Prompt the user for two numbers between 10 and 99. Display "Match!" if both numbers have the same
  // value in the 10s place, otherwise display "Miss"

  // Ex 1: If num one is 23 and num two is 56, display "Miss"
  // Ex 2: If num one is 29 and num two is 26, display "Match!"
  // Ex 3: If num one is 30 and num two is 30, display "Match!"

  digits() {

    let myPrompt2 = new Prompt();
    let numA;
    let numB;
    let input1 = Number(myPrompt2("Enter a number between 10 and 99 : "));
    let input2 = Number(myPrompt2("Enter a number between 10 and 99 : "));

    let newNum1 = ~~(input1 / 10) // divides by 10 and ~~ drops decimal
    let newNum2 = ~~(input2 / 10)

    if (newNum1 == newNum2) {
      console.log("Match")
    } else {
      console.log("Miss")
    }
  }

  // ================================================================
  // Problem 4: Barking Puppy
  // The user just got a new puppy. Prompt the user for the hour of the day (0-23) and if the puppy is
  // barking or not. If the dog is barking before 6 or after 19, we have a problem. Display if there is
  // a problem or not.

  numbers() {

    let myPrompt3 = new Prompt();
    let dogBarking;
    let goodTime;
    let hour = Number(myPrompt3("What hour of the day is it? (enter 0-23): "));

    if (0 < hour && hour < 23) {
      if (6 < hour && hour < 19) {
        goodTime = hour
      }
    } else if (hour > 24) {
      console.log("Invalid hour")
    }

    let barking = myPrompt3("Is the puppy barking? (y/n): ");

    dogBarking = barking == "y" ? true : false;

    if (dogBarking && goodTime) {
      console.log("Not a problem");// if either above condition is true, this prints to the console
    } else if (dogBarking && !goodTime) {
      console.log("We have a problem")
    } else if (!dogBarking) {
      console.log("Not a problem")
    }
  }
  // if ((hour > 6 && hour <19) && dogBarking)
  //  console.log("There is no problem")
  // else if ((hour <6 || (hour > 19) && dogBarking)
  //   console.log("There is a problem");

  // ================================================================
  // Problem 5: Over the Hill
  // Prompt the user for two ages. Sum the two ages provided and display. However, if either value is 50+, the age
  // should be treated as 49.

  // Age1  Age2   Display
  // 24    36     60
  // 24    50     73 (the 50 is treated as 49)
  // 100   90     60 (both ages are treated as 49)

  ages() {
    let myPrompt4 = new Prompt();
    let ageA;
    let ageB;
    let inputAge1 = Number(myPrompt4("Enter an age : "));
    let inputAge2 = Number(myPrompt4("Enter an age : "));

    if (inputAge1 > 49) {
      ageA = 49
    } else {
      ageA = inputAge1
    }

    if (inputAge2 > 49) {
      ageB = 49
    } else {
      ageB = inputAge2
    }

    let sum = (ageA + ageB);
    console.log(sum)
  }

  // ================================================================
  // Problem 6: WuTangForever
  // Prompt the user for a number. If the number is a multiple of 3, display "Wu". If it is a multiple of 5,
  // display "Tang". If it is a multiple of both 3 and 5, display "WuTangForever". If the number is not a
  // multiple of 3 or 5, display n;

  // Number   Display
  // 9      → "Wu"
  // 20     → "Tang"
  // 30     → "WuTangForever"
  // 7      → 7

  wuTang() {
    let wuPrompt = new Prompt();

    let i = Number(wuPrompt("Enter a number : "));

    if (i % 3 === 0 && i % 5 === 0) { // if number divides by 3 with a remainder of 0 & divides by 5 with a remainder of 0

      console.log("Wu Tang Forever");// this prints to the console
    }

    else if (i % 3 === 0) { // if number divides by 3 with a remainder of 0
      console.log("Wu");
    }
    else if (i % 5 === 0) { // if number divides by 5 with a remainder of 0
      console.log("Tang");

    }
    else {
      console.log("Lame");
    }
  }
}



let write = new Write();
write.relax();
write.babies();
write.digits();
write.numbers();
write.ages();
write.wuTang();