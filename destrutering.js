const obj = {
  name: "nigga",
  age: 20,
  ocupation: "student",
  profession: {
    dev1: "figma",
    dev2: "ligma",
  },
};
let om = obj.name;

console.log(obj);
console.log(om);
//obj destructering
let { name, age } = obj;
let { dev2 } = obj.profession;
console.log(dev2);
console.log(name, age);
let arr = [10, 23, 44];
let [x, y, z] = arr;
console.log(z);
