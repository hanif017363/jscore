// javascript obj notation => jason
let obj = {
  name: "hanif",
  age: 20,
  profession: " student",
};
// stingyfi
let res = JSON.stringify(obj);
console.log(res);
const res2 = JSON.parse(res);
console.log(res2);
