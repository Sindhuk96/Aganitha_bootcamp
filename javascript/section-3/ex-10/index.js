function memoize(expensiveOperationFn) {
    let dp = [];
  
    return function memoizedVersion(n) {
      if (dp[n] === undefined) {
        dp[n] = expensiveOperationFn(n);
      }
      return dp[n];
    };
  }
  
  function fib(n) {
    if (n <= 1) {
      return n;
    }
    return fib(n - 1) + fib(n - 2);
  }
  
  const memoizedfunc = memoize(fib);
  const res = memoizedfunc(6);
  console.log(`Final result is: ${res}`);
  