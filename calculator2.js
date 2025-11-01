const readline = require('readline-sync');
const message = require('./calculator_messages.json')

let repeatCalculation = true;

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}


prompt(message.welcome);

do {

  prompt(message.first_number);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(message.not_a_number);
    number1 = readline.question();
  }

  prompt(message.second_number);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(message.not_a_number);
    number2 = readline.question();
  }

  prompt(message.operation);
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(message.chose1to4);
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

  prompt(`${message.result} ${output}`);

  prompt(message.another)
  let answerToRepeat = readline.question();

  while (!['1', '2'].includes(answerToRepeat)) {
    prompt(message.chose1to2);
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
