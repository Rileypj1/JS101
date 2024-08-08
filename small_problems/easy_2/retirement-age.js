const rlSync = require("readline-sync");

let currentAge = Number(rlSync.question("What is your age? "));
let retirementAge = Number(rlSync.question("At what age would you like to retire? "));

const ageDiff = retirementAge - currentAge;

console.log(`\nIt's 2024. You will retire in ${2024 + ageDiff}.\nYou only have ${ageDiff} years to go!`)