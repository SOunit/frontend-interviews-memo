const user = {
  firstName: "Jack",
  lastName: "Pearson",
};

const response = delete user.firstName;
const response2 = delete user.firstName;

console.log(response);
console.log(response2);

console.log(user.hasOwnProperty("firstName"));
console.log(user.hasOwnProperty("lastName"));
console.log(user);

//
//
//
//
//
//
// delete
// - delete property itself, not value
// - use a lot leads to fragile application
