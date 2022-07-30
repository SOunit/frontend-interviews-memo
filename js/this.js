console.log(this);

const sample = {
  first: "Jack",
  last: "Pearson",
  fullName: function () {
    return `${this.first} ${this.last}`;
  },
};

const sample2 = {
  first: "Jack",
  last: "Pearson",
  fullName() {
    return `${this.first} ${this.last}`;
  },
};

const sample3 = {
  first: "Jack",
  last: "Pearson",
  fullName: () => {
    return `${this.first} ${this.last}`;
  },
};

console.log(sample.fullName());
console.log(sample2.fullName());
console.log(sample3.fullName());

//
//
//
//
//
//
//
// 1. function and this
// 2. shortcut and this
// 3. arrow function and this
