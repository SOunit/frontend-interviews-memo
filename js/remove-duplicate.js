const nums = [1, 1, 1, 2, 2, 2, 3, 3, 3];

const numSet = new Set();
nums.forEach((num) => numSet.add(num));
console.log(numSet);

const singleValueArr = [];
nums.forEach((num) => {
  if (!singleValueArr.includes(num)) {
    singleValueArr.push(num);
  }
});
console.log(singleValueArr);

//
//
//
//
//
// 1. use set, not duplicate key
// 2. includes
