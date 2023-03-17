// default export way of importing
// import calcFuncs from "./calculatorFunctions.js";

// named export way of importing
import { multiply, add, subtract } from "./calculatorFunctions.js";
import {
  capitalize,
  capitalizeAllWords,
} from "./functions/string/stringFunctions.js";

const cString = capitalize("");
console.log("cString", cString);

const result = add(12, 13);

// console.log("result", result);

const result2 = subtract(15, 10);
// console.log("result2", result2);

const result3 = multiply(5, 3);
// console.log("result3", result3);
