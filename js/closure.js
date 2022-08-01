function add1(params) {
  let counter = 0;

  counter++;

  return counter;
}

// increment, but global is not good
let counter = 0;
function add2(params) {
  counter++;

  return counter;
}

const add3 = (function (params) {
  let counter = 0;

  return function () {
    counter++;
    return counter;
  };
})();

// approach1: no increment
console.log(add1(1));
console.log(add1(1));
console.log(add1(1));

// approach2: global
console.log(add2(1));
console.log(add2(1));
console.log(add2(1));

// approach3: closure
console.log(add3(1));
console.log(add3(1));
console.log(add3(1));
console.log(add3(1));

//
//
//
//
// closure
// - hide private variable
// - not used in work, but questioned a lot in interview
