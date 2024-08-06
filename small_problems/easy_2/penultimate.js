function penultimate(string) {
  let splitArray = string.split(" ")
  return splitArray[splitArray.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true
