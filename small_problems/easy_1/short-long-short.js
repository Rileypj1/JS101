/*
input: two strings
return shorter string + longer string + shorter string

1.get length of both input strings
2.find the shorter string
3. set new concatString
4.concatString should be sum of shorter string longer string shorter string
*/

function shortLongShort(string1, string2) {
  let shorterString = string1.length < string2.length ? string1 : string2;
  let longerString = string1 === shorterString ? string2 : string1;

  let concatString = shorterString + longerString + shorterString;

  console.log(concatString);
}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"