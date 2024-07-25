/*
prompt where
input = integer > 0

then ask for another input: sum or product of first input 
the sum or product starts with 1 and goes to the first input value

Example:
Please enter an integer greater than 0: 5
Enter "s" to compute the sum, or "p" to compute the product. s

The sum of the integers between 1 and 5 is 15.

Data Structure:
prompt strings, number

Algorithm:
1. ask for input integer
2. ask for sum or product
3. iterate starting from 1 
  i. depending on sum or product, initialize a variable that is keeping track of the current product or sum in the loop
4. return final number

*/
let rlSync = require("readline-sync");

let inputInt = Number(rlSync.question("Please enter an integer greater than 0: "));
let operationInput = rlSync.question("Enter \"s\" to compute the sum, or \"p\" to compute the product. ").trim();
let counter = operationInput === 's' ? 0 : 1;

if (operationInput === 's') {
  for (let i = 1; i <= inputInt; i += 1) {
    counter += i;
  }
  console.log(`The sum of the integers between 1 and ${inputInt} is ${counter}`);
} else if (operationInput === 'p') {
  for (let i = 1; i <= inputInt; i += 1) {
    counter *= i;
  }
  console.log(`The sum of the integers between 1 and ${inputInt} is ${counter}`);
}