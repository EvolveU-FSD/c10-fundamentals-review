// named export
export function add(number1, number2) {
  console.log(number1, number2);
  const sum = number1 + number2;
  console.log(sum);
  return sum;
}
// named export
export function subtract(number1, number2) {
  const diff = number1 - number2;
  return diff;
}
// named export
export function multiply(number1, number2) {
  const product = number1 * number2;
  return product;
}
// default export
export default { multiply, add, subtract };

// const number1 = 10;
// const number2 = 20;
// const result = add(number1, number2);
// console.log(result);
