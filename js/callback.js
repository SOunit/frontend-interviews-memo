const arr = [1, 2, 3, 4, 5];

const arr2 = arr.map((num) => num + 5);
const arr3 = arr.map(add5);

console.log(arr);
console.log(arr2);
console.log(arr3);

function add5(val) {
  return val + 5;
}

//
//
//
//
//
// callback
// - called high-order function too
// - execute later
// - first-class citizen, can path like object
