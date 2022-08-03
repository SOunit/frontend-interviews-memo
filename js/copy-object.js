const user = {
  firstName: "Jack",
  lastName: "Pearson",
};
console.log(user);

const user2 = user;
console.log(user2);
console.log(Object.is(user, user2));

const user3 = JSON.parse(JSON.stringify(user));
console.log(user3);
console.log(Object.is(user, user3));

const user4 = { ...user };
console.log(user4);
console.log(Object.is(user, user4));

//
//
//
//
//
//
//
// 1. stringify
// 2. spread operator
// 3. loop props
