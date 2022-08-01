const user = {
  firstName: "Jack",
  lastName: "Pearson",
};

console.log(user.firstName);
console.log(user["firstName"]);

for (let prop in user) {
  console.log(prop);
  console.log(user[prop]);
}

//
//
//
//
//
// how to access object property
// 1. dot notation
// 2. bracket notation
