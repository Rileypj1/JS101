/*
1. a function that returns the sum of two numbers

START
Given two integers, number1 and number2

SET sum = number1 + number2
PRINT sum


2. a function that takes an array of strings, and returns a string that is all those strings concatenated together

START
GIVEN an array of strings, stringArray

SET concatenatedString;
SET iterator = 0;

WHILE iterator <= length of stringArray
  concatenatedString = concatenatedString + (value within stringArray at space "iterator")

  iterator = iterator = 1

PRINT concatenatedString;


3. a method that takes an array of integers, and returns a new array with every other element from the original array, starting with the first element. For instance:
everyOther([1,4,7,2,5]); // => [1,7,5]

input - array of integers

example given 

data structures - arrays and their indexes

algo:
set a new empty array
iterate over input array until iterator <= length of array
  i. start at the first element
  ii. add value at "iterator" index in array
  iii. iterator + 2
return new array



4. a function that determines the index of the 3rd occurrence of a given character in a string. For instance, if the given character is 'x' and the string is 'axbxcdxex', the function should return 6 (the index of the 3rd 'x'). If the given character does not occur at least 3 times, return null.

we have a string and a single character as two input values. Within the string we have to return the index value of the 3rd occurence of the character input. If there isn't a 3rd occurence, the program should return null

initialize counter variable

set a new variable, stringArray, where the elements are the individual characters of the input string

loop over stringArray, include an iterator variable set to 0
  i. for every match with the input character, set counter = counter + 1
  ii. set a condition that breaks the loop when counter = 3 and return the iterator value
if the loop finishes and counter is less than 3, return null


5. a function that takes two arrays of numbers and returns the result of merging the arrays. The elements of the first array should become the elements at the even indexes of the returned array, while the elements of the second array should become the elements at the odd indexes. For instance:
              merge([1, 2, 3], [4, 5, 6]); // => [1, 4, 2, 5, 3, 6]

input is two arrays => one merged array
first input array argument -- elements should be at the even indexes of output array
second input array -- elements at odd indexes of output array

set outputArray;
 outputArray = length of first array + length of second array

set iterator for input array 1 to 0
set i as 0 to iterator over input array 1
loop over input array 1, 
  1. increment iterator + 2 after each loop
  2. assign each element with iterator as index to outputArray such that inputArray[i] = outputArray[iterator]
  3. increment i + 1

set iterator for input array 2 to 1
set i as 0 to iterator over input array 1
loop over input array 2
  1. increment iterator + 2 after each loop
  2. assign each element with iterator as index to outputArray such that inputArray[i] = outputArray[iterator]
  3. increment i + 1


*/
