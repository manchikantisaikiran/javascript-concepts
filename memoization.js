// Memoization is an optimization technique that speeds up applications by storing the results of expensive function calls
// and returning the cached result when the same inputs are supplied again.

function memoizedFibonacci(n, memo) {
  memo = memo || {};

  if (memo[n]) {
    return memo[n];
  }

  if (n <= 1) {
    return 1;
  }

  return (memo[n] =
    memoizedFibonacci(n - 1, memo) + memoizedFibonacci(n - 2, memo));
}

function memoizer(cb) {
  let cache = {};

  return function (n) {
    if (cache[n]) {
      return cache[n];
    }

    let result = cb(n);
    cache[n] = result;

    return result;
  };
}

const optimisedFunc = memoizer(fibonacci2);

function fibonacci1(n) {
  if (n <= 1) {
    return 1;
  }

  return fibonacci1(n - 1) + fibonacci1(n - 2);
}

function fibonacci2(n) {
  if (n <= 1) {
    return 1;
  }

  return optimisedFunc(n - 1) + optimisedFunc(n - 2);
}

console.time("fib2");
console.log(optimisedFunc(40));
console.timeEnd("fib2");

console.time("fib1");
console.log(fibonacci1(40));
console.timeEnd("fib1");


