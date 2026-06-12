// ========[ES6 Concepts]==========

// // 1. Destructuring in JS

// // Array Destructuring

// let arr = [1, 2, 3, 4, 5];

// let [a, b, c, d, e, f] = arr;

// console.log(a, b, c, d, e, f); // 1 2 3 4 5 undefined

// // Object Destructuring

// let obj = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };

// let { name, age, city, country } = obj;

// console.log(name, age, city, country); // John 30 New York undefined

// 2. Type conversion in JS

let str = "123";

let a1 = Number(str); // 123
console.log(a1, typeof a1); // 123 number

let a2 = +str; // 123
console.log(a2, typeof a2); // 123 number

// co