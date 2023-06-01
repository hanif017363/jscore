let arr = [10, 5, 20, 30, 40, 50, 77];
//map
let map = arr.map((x) => x * 2);
console.log(map);
let sqr = arr.map((a) => a * a);
console.log(sqr);
// filter
let res = arr.filter((x) => x >= 20);
let res2 = arr.filter((x) => x % 2 === 0);
console.log("res2", res2);
console.log(res);
/// filter
let res3 = arr.find((x) => x > 20);
console.log(res3, "res3");
