const info = {
  id: " 12",
  name: " hanif",
  age: "20",
  class: "hons",
  job: ["studebt", "student", "freeloader"],
  deposit: function (exp) {
    console.log(this.name);
    this.age = this.age - exp;
    return this.age;
  },
};
console.log(info.deposit(2));
console.log(info.deposit(2));
console.log(info.deposit(2));
console.log(info.deposit(2));
// regular for loop
//for(let i =0 i<=20; i++){

//}
// for of loop for array
//for (let a of array) {
//}
// for in for object
//for (let x in object) {
//}
const obj = {
  id: " 120",
  name: "MD hanif",
  age: "22",
  class: "hons 2nd",
};
for (let x in obj) {
  console.log(x, obj[x]);
}
