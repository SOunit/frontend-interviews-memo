function add(...num) {
  console.log(arguments);

  console.log(Array.prototype.slice.call(arguments));
  console.log([].slice.call(arguments));
  console.log(Array.from(arguments));

  console.log(num);
}

add(5, 6, 7, 8);

function add2(...num) {
  const nums = [1, 2, 3, 4, ...num];

  console.log(nums);
  console.log(num);
}

add2(5, 6, 7, 8);

function add3(user) {
  const newUser = { ...user };

  console.log(user);
  console.log(newUser);
}

add3({ firstName: "Jack", lastName: "Pearson" });

//
//
//
//
// rest operator
// spread operator
