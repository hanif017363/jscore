const info = {
  id: " 12",
  name: " hanif",
  age: "20",
  class: "hons",
};
// get Object keys
const keys = Object.keys(info);
console.log(keys);
// get object value
const values = Object.values(info);
console.log(values);
// get object entries
const enter = Object.entries(info);
console.log(enter);
// seal dosent let obj delete
Object.seal(info);
// delete object
delete info.name;
// freeze dosent let value change
Object.freeze(info);
info.name = "md";
console.log(info);
