/*
input - length and width of room in meters
output - area of room in both square meters and square feet

1 meter === 10.7639 square feet

Example:

Enter the length of the room in meters:
10
Enter the width of the room in meters:
7
The area of the room is 70.00 square meters (753.47 square feet).

Data Structure: integers and strings for the text

Algorithm:
1. prompt asking for length of room
2. prompt asking for width of room
3. one variable that is multiple of length x width
4. convert product to square feet in the final log using interpolation
*/
const feetConversion = 10.7639;
let rlSync = require("readline-sync");

let length = Number.parseFloat(rlSync.question("Enter the length of the room in meters: "));
let width = Number.parseFloat(rlSync.question("Enter the width of the room in meters: "));

let squareMeters = length * width;

console.log(`The area of the room is ${squareMeters} square meters (${squareMeters * feetConversion} square feet).`)