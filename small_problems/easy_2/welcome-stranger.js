/*
write a function that takes and array and object. Array has 2 or more elements that make up a person's name. Object has title and occupation as keys. The output should return string with the person's full name and their title. 

Example:
console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.

Algo:

1. join elements in array. 
2. use template literal to extract title and occ in object

*/

function greetings(nameArray, titleObject) {
  let fullName = nameArray.join(' ');
  console.log(`Hello, ${fullName}! Nice to have a ${titleObject['title']} ${titleObject['occupation']} around.`)
  
}

greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" });