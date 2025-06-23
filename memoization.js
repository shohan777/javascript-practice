// Memoization is a technique to cache the results of expensive function calls, so if the same input happens again, the function doesn’t redo the work — it just returns the cached result.

// 🔍 Why Use It?
// Performance boost (especially in recursion, API calls, or complex calculations)

// Avoid redundant work
function memoizedFib() {
  const cache = {};

  return function fib(n) {
    if (n <= 1) return n;
    if (cache[n]) return cache[n];

    cache[n] = fib(n - 1) + fib(n - 2);
    return cache[n];
  };
}

const fib = memoizedFib();
console.log(fib(9)); // Much faster than normal recursive fib(40)
