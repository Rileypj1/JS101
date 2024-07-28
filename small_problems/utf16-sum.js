/*
input - string
output - a sum of the utf-16 value of each character in the string

data structures: strings, possibly arrays, numbers

algorithm:
1.set stringSum;

2.loop over input string:
  i. get utf-16 value with each iteration
  ii. add current iteration value to stringSum;
3. return stringSum;
*/

function utf16Value(string) {
  let stringSum = 0;

  for (let i = 0; i <= string.length - 1; i += 1) {
    
    stringSum += string.charCodeAt(i);
  }
  console.log(stringSum);
}

utf16Value('Four score');         // 984
utf16Value('Launch School');      // 1251
utf16Value('a');                  // 97
utf16Value('');                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
utf16Value(OMEGA);                  // 937
utf16Value(OMEGA + OMEGA + OMEGA);  // 2811