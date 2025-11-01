const readline = require('readline-sync');
const message = require('./calculator_messages.json')

let repeatCalculation = true;

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt("Select language: 1) English 2) Spanish 3) French or 4) Italian")
let languageSelection = readline.question();

while (!['1', '2', '3', '4'].includes(languageSelection)) {
    prompt(message.english.chose1to4);
    languageSelection = readline.question();
  }

let language;
  switch (languageSelection) {
    case '1':
      language = "english";
      break;
    case '2':
      language = "spanish";
      break;
    case '3':
      language = "french";
      break;
    case '4':
      language = "italian";
      break;
  }


prompt(message[language].welcome);

do {

  prompt(message[language].first_number);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(message[language].not_a_number);
    number1 = readline.question();
  }

  prompt(message[language].second_number);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(message[language].not_a_number);
    number2 = readline.question();
  }

  prompt(message[language].operation);
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(message[language].chose1to4);
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

  prompt(`${message[language].result} ${output}`);

  prompt(message[language].another)
  let answerToRepeat = readline.question();

  while (!['1', '2'].includes(answerToRepeat)) {
    prompt(message[language].chose1to2);
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
