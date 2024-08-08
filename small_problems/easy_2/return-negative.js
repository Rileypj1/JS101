function negative(num) {
  if (num > 0) {
    console.log(-num);
  } else if (num < 0) {
    console.log(num);
  } else {
    let zero = 1 / num < 0 ? num : -num;
    console.log(zero);
  }
}

negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0