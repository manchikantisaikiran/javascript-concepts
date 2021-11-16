const memoize = (cb) => {
  const results = {};
  return (...args) => {
    const argsKey = JSON.stringify(args);
    if (!results[argsKey]) {
      results[argsKey] = cb(...args);
    }
    return results[argsKey];
  };
};

const getSquare = memoize((num) => {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
      result++;
    }
  }
  return result;
});

console.time("First call");
console.log(getSquare(9467));
console.timeEnd("First call");

console.time("Second call");
console.log(getSquare(9467));
console.timeEnd("Second call");

console.time("Third call");
console.log(getSquare(9467));
console.timeEnd("Third call");
