function isSameObject(obj1, obj2) {
  const props1 = Object.getOwnPropertyNames(obj1);
  const props2 = Object.getOwnPropertyNames(obj2);

  if (props1.length !== props2.length) {
    return false;
  }

  for (let i = 0; i < props1.length; i++) {
    const property = props1[i];
    if (props1[property] !== props2[property]) {
      return false;
    }
  }

  return true;
}

const user1 = {
  firstName: "Jack",
  lastName: "Pearson",
};

const user2 = {
  lastName: "Pearson",
  firstName: "Jack",
};

console.log(Object.is(user1, user2));
console.log(user1 === user2);

const objString1 = JSON.stringify(user1);
const objString2 = JSON.stringify(user2);
console.log(typeof objString1);
console.log(objString1 === objString2);

console.log(isSameObject(user1, user2));

//
//
//
//
//
// 1. loose way
// 2. strict way

// how to check
// loop through all props
