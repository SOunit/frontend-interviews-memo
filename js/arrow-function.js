function example(param1) {
  return param1 + 1;
}
console.log(example(5));

const example2 = (param1) => {
  return param1 + 1;
};
console.log(example2(5));

const example3 = (param1) => param1 + 1;
console.log(example3(5));

const user = {
  firstName: "Jack",
  lastName: "Pearson",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(user.fullName());

const user2 = {
  firstName: "Jack",
  lastName: "Pearson",
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(user2.fullName());

const user3 = {
  firstName: "Jack",
  lastName: "Pearson",
  fullName: () => {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(user3.fullName());

//
//
//
//
//
//
//
// - this
//   - self
