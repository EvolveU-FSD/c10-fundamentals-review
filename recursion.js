// fibonacci numbers recursion
// 1 1 2 3 5 8 13

function nthFib(n) {
  console.log("n is", n);
  if (n == 1 || n == 2) {
    return 1;
  }
  return nthFib(n - 1) + nthFib(n - 2);
}

const seventh = nthFib(7);
console.log(seventh);
