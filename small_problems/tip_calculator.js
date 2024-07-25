/*
prompt user with the bill and desired tip percentage
we're assuming the input will always be an integer

log the tip amount and total amount separately

Example given:
What is the bill? 200
What is the tip percentage? 15

The tip is $30.00
The total is $230.00


Data Structure: numbers

Algorithm:
1. prompt the user with the bill
2. prompt with how much they want to tip
3. convert these inputs to numbers
4. calculate the tip amount by dividing the input % by 100 and multipy that to the total bill
5. add that to the bill amount to get the total bill
6. log the tip amount first
7. log the total bill amount.
8. make sure both have two decimal points


*/

let rlSync = require('readline-sync');

let bill = Number(rlSync.question("What is the bill? "));
let tipPercentage = Number(rlSync.question("What is the tip percentage? "));

let tip = (tipPercentage / 100) * bill;
let total = bill + tip;

console.log(`The tip is $${tip.toFixed(2)}\nThe total is $${total.toFixed(2)}`);

