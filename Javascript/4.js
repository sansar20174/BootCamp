// // Loops in Arrays

// var arr = [1, 2, 3, 4, 5];

// // for of loop
// for (let value of arr) {
//     console.log(value);
// }

// //  CRUD Operations

// // 1. Create
// let obj = {};
// obj = {
//     name: "John",
//     age: 30,
//     city: ["New York", "Los Angeles", "Chicago"],    
//     address: {
//         street: "123 Main St",
//         zip: "12345"
//     }
// };

// // 2. Read
// console.log(obj, typeof obj); // object

// //  bracket notation example: obj["key"] 
// // dot notation example: obj.key

// // 3. Update
// obj["status"]= true; // using bracket notation
// obj.name = "Jane"; // using dot notation

// // create a new key value pair in the object
// obj.email = "jane@example.com";
// console.log(obj);

// // 4. Delete
// delete obj["age"]; // using bracket notation
// delete obj.address; // using dot notation
// console.log(obj);

// // Loops in Objects
// let obj = {
//     name: "John",
//     age: 20,
//     status: true,
// }

// // for in loop
// for (let key in obj) {
//     console.log(key, typeof key); // all keys are string
//     console.log(obj[key], typeof obj[key]); // all values are string
//     // but if we want to access the value of the key using dot notation then we have to use the key as a string
//     // console.log(obj.key); // undefined beacause there is no key named "key" in the object
// }

// Question 1: What will be the output of the following code? 

// let arr = [1, 2, 3, 4, 5];
// let arr1 = arr; 

// arr1.push(6);
// arr.pop();

// console.log(arr);
// console.log(arr1);

// // Output:
// // [1, 2, 3, 4, 5]
// // [1, 2, 3, 4, 5]

// // Question 2: What will be the output of the following code?

// let str = "Hello";
// let str1 = str;

// str1 = " World";

// console.log(str, str1);

// //  Funtion in JavaScript

// // 1. Function Declaration

// // a.) Function with no parameters.
// function greet() {
//     console.log("Hello, World!");
// }
// // 2. Function calling
// greet(); 
// greet();

// // b.) Function with parameters.
// function add(a, b) {
//     console.log(a + b);
// }
// add(2, 3); // 5
// add(10, 20); // 30

// // c.) Function with parameter and return statement.
// function multiply(a, b) {
//     return a * b;
// }
// let result = multiply(4, 5);
// console.log(result); // 20

// // 3.) Function with expression
// let x = function (a) {
//     return a * 5;
// }
// console.log(x(2)); // 10

// Arrow Functions

const add = a => a + 5;
console.log(add(2)); // 7
