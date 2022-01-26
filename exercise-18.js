function memoize(factorial) {
  let cache = {};
  return (num) => {
    if(cache[num]) {
      console.log(cache);
      return cache[num];
    }
    let x = factorial(num);
    cache[num] = x;
    return x
  }

}

function factorial(x) {
  if (x === 0) {
    return 1;
  }

  return x * factorial(x - 1);
}

factorial = memoize(factorial);
console.log(factorial(10));
console.log(factorial(6));
console.log(factorial(5));
console.log(factorial(10));
