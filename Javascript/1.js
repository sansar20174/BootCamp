// Variables in JavaScript
// keywords: var, let, const

// 1. var: function-scoped variable
var name = "John";
console.log(name, typeof name);

var id = 123;
console.log(id, typeof id);

// 2. let: block-scoped variable
let name2 = "Alice";
console.log(name2, typeof name2);

let id2 = 456;
console.log(id2, typeof id2);

// 3. const: block-scoped constant variable
const name3 = "Bob";
console.log(name3, typeof name3);

const id3 = 789;
console.log(id3, typeof id3);

// Note: Variables declared with var can be re-assigned and re-declared, while let and const cannot be re-declared. 
// const variables cannot be re-assigned.