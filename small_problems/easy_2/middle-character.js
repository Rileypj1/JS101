function centerOf(string) {
  let middle = (string.length - 1) / 2;
  if (middle % 2 === 0) {
    console.log(string[Math.ceil(middle)]);

  } else {
    console.log(string.slice(middle, middle + 2));
  }
}

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"