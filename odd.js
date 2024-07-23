/*
Problem:
function takes one integer. Could be negative, positive or zero. Whatever the abs of that int is should return true if it's odd.

Examples: given below
5 => true
0 => false

Data:
working with number types only

Algo:
take the input integer and first get the absolute value. Divide that result by 2 and check if remainder is 0. If >0, then return true else false

*/

function isOdd(integer) {
  let remainderOfInt = Math.abs(integer) % 2;
  return remainderOfInt > 0 ? true: false;
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true