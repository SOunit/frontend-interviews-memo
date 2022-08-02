(() => {
  const hi = "hi";
  console.log(hi);
})();

const result = (() => {
  const init = {
    id: 0,
    methods: {
      call() {},
    },
  };

  return init;
})();

console.log(result);
result.methods.call();
