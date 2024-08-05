let rlSync = require("readline-sync");

let first = Number(rlSync.question("==> Enter the first number:\n"));
let second = Number(rlSync.question("==> Enter the second number:\n"));

console.log(`${first} + ${second} = ${first + second}`);
console.log(`${first} - ${second} = ${first - second}`);
console.log(`${first} * ${second} = ${first * second}`);
console.log(`${first} / ${second} = ${Math.floor(first + second)}`);
console.log(`${first} % ${second} = ${first % second}`);
console.log(`${first} ** ${second} = ${first ** second}`);

