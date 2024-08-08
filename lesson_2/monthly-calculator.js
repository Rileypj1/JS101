/*
output will be the monthly payment for a mortgage.
To find this output, you need the user to enter their
loan amount, the apr, and the loan duration
From these inputs you will need to find the monthly interest rate and
the loan duration in months, which will then be used in the final formula.
 Print the final amount in a dollar/currency format.

data structure:
loan amount input: number but will need to check for decimal points

APR as a number (5) not a percentage (0.5)

loan duration:
specify the loan duration in years

Algorithm:
1. set prompt function
2. prompt user for loan amount
  i. check for valid number
3. prompt user for apr
  i. ask for percentage as a number not decimal
  ii. confirm with user they meant the decimal to
      be the number not a % if a decimal was given
4. ask for loan duration in years
  i. convert to months after input given
5. compute monthly interest rate
6. compute final formula
7. ask if user wants to put a new monthly payment in
*/

const readline = require("readline-sync");

function prompt(message) {
  console.log(`=> ${message} `);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

let startNewCalculation = true;

while (startNewCalculation) {
  prompt('Welcome to the Monthly Mortgage Calculator!\n=> We have a couple of questions to ask to calculate your monthly payments. To get started please enter the loan amount.');
  let loanAmount = readline.question();

  while (invalidNumber(loanAmount)) {
    prompt('Looks like you didn\'t enter a number. Please enter your loan amount.');
    loanAmount = readline.question();
  }
  /* check if decimal was given and confirm
  whether user wants to keep the value or enter a new one */
  prompt('Thank you. Please enter your APR as a number (not a %)');
  let apr = readline.question();
  if (Number(apr) < 1 && Number(apr) > 0) {
    prompt('It looks like you entered a percentage amount here. Did you mean to enter a decimal? If not, please enter a number. If you meant to, please press enter');
    let newApr = readline.question();
    apr = newApr === '' ? apr : newApr;
  }

  prompt('How long is the duration of your loan (in years)?');
  let loanDuration = readline.question();

  while (invalidNumber(loanDuration)) {
    prompt('Looks like you didn\'t enter a number. Please enter your loan duration in years.');
    loanDuration = readline.question();
  }
  //convert to %
  apr = Number(apr) / 100;
  let loanDurationMonths = Number(loanDuration) * 12;
  let monthlyInterest = apr / 12;
  let monthlyPayment;
  if (monthlyInterest) {
    monthlyPayment = Number(loanAmount) * (monthlyInterest
             / (1 - Math.pow((1 + monthlyInterest), (-loanDurationMonths))));
  } else {
    monthlyPayment = Number(loanAmount) / loanDurationMonths;
  }
  console.log(`Your estimated monthly payment is $${monthlyPayment.toFixed(2)}.`);

  prompt('Do you want to get a new monthly estimate? Enter \'y\' for yes or \'n\' for no.');
  let askNewCalculation = readline.question();
  while (['y','n'].indexOf(askNewCalculation.toLowerCase()) === -1) {
    prompt('I\'m sorry, we didn\'t understand. Please enter \'y\' for yes or \'n\' for no.');
    askNewCalculation = readline.question();
  }
  startNewCalculation = (askNewCalculation.toLowerCase() === 'y');

}
