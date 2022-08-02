// lexical scope - dynamic scope
// - every language has scope type
// - used in closure

// lexical scope
// - block scope
// - function scope

// dynamic scope
// - this

class Test {
  log() {
    console.log(this.name);
  }
}

const test = new Test();
test.name = "Jack";
test.log();

const test2 = new Test();
test2.name = "Bec";
test2.log();
