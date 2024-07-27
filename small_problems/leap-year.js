/*
input is a number representing a year. the output should return true if the input is divisible by 4. The exceptions to this rule are when the number is divisible by 100. If it is divisible by 100, you have to check if it is also divisible by 400. If yes, it's a leap year, if no, it's not.

*/

function isLeapYear(year) {
  if (year <= 1752) {
    console.log(year % 4 === 0);
  }
  else if (year % 4 === 0) {
    if (year % 100 === 0) {
      console.log(year % 400 === 0)
    }
    else console.log(true)
  } else console.log(false);
}

isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // true
isLeapYear(1);         // false
isLeapYear(100);       // true
isLeapYear(400);       // true
