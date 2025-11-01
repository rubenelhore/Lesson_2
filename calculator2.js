const readline = require('readline-sync');

let repeatCalculation = true;

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}


prompt('Welcome to Calculator!');

do {

  prompt("What's the first number?");
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt("Hmm... that doesn't look like a valid number.");
    number1 = readline.question();
  }

  prompt("What's the second number?");
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt("Hmm... that doesn't look like a valid number.");
    number2 = readline.question();
  }

  prompt("What operation do you want to realize? \n1) Add 2)Substract 3) Multiply 4 Divide");
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('Must choose 1, 2, 3 or 4');
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  prompt(`The result is: ${output}`);

  prompt('Would you like to do another operation? 1) Yes 2) No')
  let answerToRepeat = readline.question();

  while (!['1', '2'].includes(answerToRepeat)) {
    prompt('Must choose 1 or 2');
    answerToRepeat = readline.question();
  }

  switch (answerToRepeat) {
    case '1':
      repeatCalculation = true;
      break;
    case '2':
      repeatCalculation = false;
      break;
  }

} while (repeatCalculation === true)
