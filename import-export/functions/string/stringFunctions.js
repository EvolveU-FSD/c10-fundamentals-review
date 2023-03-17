// importing from folders further up in folder structure
import { add } from "../../calculatorFunctions.js";

export function capitalize(str) {
  if (str.length === 0) {
    return "";
  }
  const firstLetter = str[0];

  console.log("firstLetter", firstLetter);
  const restOfString = str.slice(1);
  console.log("restOfString", restOfString);
  const capitalized = firstLetter.toUpperCase() + restOfString;
  // console.log("capitalized", capitalized);
  return capitalized;
}

// const result = capitalize("hello my name is bob");
// console.log("result", result);

export function capitalizeAllWords(string) {
  const words = string.split(" ");

  // console.log("words", words);
  const capitalizedWords = [];
  for (let word of words) {
    let capWord = capitalize(word);
    capitalizedWords.push(capWord);
  }
  // console.log("capitalizedWords", capitalizedWords);
  const resultString = capitalizedWords.join(" ");
  return resultString;
}

// const result = capitalizeAllWords("hello how are you?");
// console.log("result", result);
