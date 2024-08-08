// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.
/* BONUS FEATURES
Ask the user if they want to perform another calculation
  1. add new prompt asking if they want to perform another calc
    i. this will have to be run before the program ends or breaks
  2. depending on the response, loop through first 5 steps again or
  exit the program
Repeat steps 1-5 from original calculator assignment

Data structures: strings, numbers for operations
*/

const readline = require("readline-sync");

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt("What language would you prefer, English or Spanish? Write 'en' for English and 'es' for Spanish. ¿Qué idioma preferirías, inglés o español? Escribe 'en' para inglés y 'es' para español");
let language = readline.question();

while (!['es', 'en'].includes(language)) {
  prompt("Sorry we didn't understand. Type 'en' for English or 'es' for Spanish.");
  language = readline.question();
}

const prompts = require("./calculator_messages.json")[language];

let startNewCalculation;
do {
  prompt(prompts.greeting);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(prompts.invalidError);
    number1 = readline.question();
  }

  prompt(prompts.askSecond);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(prompts.invalidError);
    number2 = readline.question();
  }

  prompt(prompts.operation);
  let operation = readline.question();

  while (!['1','2','3','4'].includes(operation)) {
    prompt(prompts.operationError);
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

  prompt(`The result is ${output}`);

  prompt(prompts.askNewCalculation);
  startNewCalculation = readline.question();

  while (!['y', 's', 'n'].includes(startNewCalculation)) {
    prompt(prompts.newCalcError);
    startNewCalculation = readline.question();
  }
} while (startNewCalculation === 'y' || startNewCalculation === 's');
