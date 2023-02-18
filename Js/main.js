/*
  String Methods
  - substring(Start [Mand], End [Opt] Not Including End)
  --- Start > End Will Swap
  --- Start < 0 It Start From 0
  --- Use Length To Get Last Character
  - substr(Start [Mand], Characters To Extract)
  --- Start >= Length = ""
  --- Negative Start From End
  - includes(Value [Mand], Start [Opt] Default 0) [ES6]
  - startsWith(Value [Mand], Start [Opt] Default 0) [ES6]
  - endsWith(Value [Mand], Length [Opt] Default Full Length) [ES6]
*/

// let a = "Elzero Web School";

// string.substring(startIndex, endIndex);

// console.log(a.substring(2, 6));
// console.log(a.substring(6, 2));

// let str = "Hello World";
// let newStr = str.substring(6); // newStr = "World"

// console.log(newStr);

// let str = "Hello World";
// let newStr = str.substring(0, 5); // newStr = "Hello"

// console.log(newStr);

// let str = "Hello World";
// let newStr = str.substring(3, 8); // lo Wo

// console.log(newStr);

// str.substr(start, length)

// const str = "Hello, World!";

// console.log(str.substr(7)); // "World!"
// console.log(str.substr(7, 3)); // "Wor"
// console.log(str.substr(-6)); // "World!"
// console.log(str.substr(-6, 4)); // "Worl"
// console.log(str.substr(0, 5)); // Hello

// var str = "Hello, World!";
// var result = str.substr(7, 5);
// console.log(result); // outPut in console "World"

const myName = "Tarek";
const myAge = 17.5;

console.log(Math.pow(myAge));
