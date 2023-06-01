// spread operator
// ...
const arr = [10, 20, 30, 40];
console.log(arr);
console.log(...arr);
let arr2 = [20, 30, 50];
console.log(Math.max(...arr2));
let arr3 = [...arr2];
console.log(arr2, arr3);
arr2.push(500);
let arr4 = [1000, 2000, ...arr3, ...arr2];
console.log(arr4);
