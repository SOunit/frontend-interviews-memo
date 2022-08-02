function factorializeBefore(num) {
  let COUNT = num;
  if (COUNT === 0) {
    return 1;
  }

  for (let i = 1; i < COUNT; i++) {
    num = num * i;
  }

  return num;
}

function factorializeAfter(num: number): number {
  // let totalMultiplication = num;
  let factorialTotal = num;

  if (num === 0) {
    return 1;
  }

  for (let i = 1; i < num; i++) {
    factorialTotal = num * i;
  }

  return factorialTotal;
}

function getTodaysDateBefore(): Date {
  const d = new Date();
  return d;
}

function getTodaysDateAfter(): Date {
  const todaysDate = new Date();
  return todaysDate;
}

//
// standard
// - naming convention
//   - variable
//     - camel case
//     - pascal case
//   - boolean
//     - prefix
//   - function
//     - verb

// code like a pro
// - variable
//   - 3 main objectives
//     - searchable
//     - readable
//     - understandable

// refactor
// - follow variable naming convention
// - less variable, the better

// use for of loop instead of for loop using ugly `i` variable

// avoid magic number / string
// avoid hungarian convention / catAgeNumber, userIdString etc.
