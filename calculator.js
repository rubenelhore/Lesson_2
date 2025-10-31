// Ask the user for the first number
// Ask the user for the second number
// Ask the user for the operation to perform
// Perform the operation on the two numbers
// Print the result on the terminal

const readline = require("readline-sync") 

console.log('Welcome to the Calculator!');

console.log("What's the first number?");
let number1 = readline.question();

console.log("What's the second number?");
let number2 = readline.question();

console.log("What operation do you want to realize? \n1) Add 2)Substract 3) Multiply 4 Divide")
let operation = readline.question();

let output;

if (operation === '1') {
    output = Number(number1) + Number(number2);
} else if (operation === '2') {
    output = Number(number1) -  Number(number2);
} else if (operation === '3') {
    output = Number(number1) * Number(number2);
} else if (operation === '4') {
    output = Number(number1) / Number(number2);
}
console.log(`The result is: ${output}`);