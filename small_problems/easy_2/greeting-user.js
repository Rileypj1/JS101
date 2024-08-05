/*
input is a string that is either user's name or user's name + "!" Depending on the input ending character, the program will have a different greeting for the user.

Data Structure: string


*/

function greetUser(name) {
  let greeting = name[name.length-1] === '!' ? `HELLO ${name.slice(0,-1).toUpperCase()}. WHY ARE WE SCREAMING?` : `Hello ${name}`;

  console.log(greeting)
}

greetUser('Bob');


greetUser('Bob!');