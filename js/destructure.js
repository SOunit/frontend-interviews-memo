const birthDay = [10, 25, 1987];
const user = {
  firstName: "Jack",
  lastName: "Pearson",
};

console.log(birthDay);
console.log(user);

const [month, day, year] = [10, 25, 1987];
let { firstName: fn, lastName } = {
  firstName: "Jack",
  lastName: "Pearson",
};

fn = "Book";

console.log(`${month}/${day}/${year}`);
console.log(`${firstName} ${lastName}`);

console.log(`${fn} ${lastName}`);
console.log(user);
