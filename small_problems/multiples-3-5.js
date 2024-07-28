/*
input is a number
output is a sum

to get to the sum output, take the sum of all numbers between 1 and the input number that are multiples of 3 and 5.

Examples: 
ourFunction(3) => 3
ourFunction(10) => 33 (the sum of [3, 5, 6, 9, 10])

Data Types: just working with numbers, but will use array to collect all the numbers that will be summed

Algorithm:
1.Set new array that will collect all multiples of 3 and 5
2. set iterator to 1;
3. create a for loop that starts from 1 and ends at the input number
  i. have condition that if the remainder of the current iterator value is  0, add it to the new array
4. reduce the array, getting the sum of all numbers contained in the array
*/

function multiSum(number) {
  let multiplesArray = [];
  

  for (let iterator = 1; iterator <= number; iterator += 1) {
    if ((iterator % 3 === 0) || (iterator % 5 === 0)) {
      multiplesArray.push(iterator);
    }
  }

  console.log(multiplesArray.reduce((acc, currentValue) => acc + currentValue));
}


multiSum(3);       // 3
multiSum(5);       // 8
multiSum(10);      // 33
multiSum(1000);    // 234168