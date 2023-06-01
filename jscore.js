// js core
/*
*1.variable
*const name = "arif"
*
*let name = "arif"
*
*2.condition
*if(true){
console.log("arif");
}else{

}
*if(false){

}else{
    console.log("arif");
}

*3.loop
*
*for,while,do
*
*for(let i = 0; i<= 20; i++ ){

}
let number = 10
*while(number<= 20){
number++
}
*
*4.array
*
*let arr = [1,2,3]
*
*arr.push9
*arr.pop()
*arr.shift()
*arr.unshift()
*arr.lenght
*
*arr.indexof()
*
*
*5.function name(params) {
    
}
*
*6.object
*const obj = {
    name : "arif"
    id : "21"
}
console.log(obj.name);
obj.name = "new name"
obj['name'] = "new name"
let a = "name"
onj[a]

*/
let comments = `i red in rose
heart thumps through rock`;
console.log(comments);
// function declaretion
function add(c, d) {
  return c + d;
}
console.log(add(10, 20));
// function expression
let add1 = function additon(a, b) {
  return a + b;
};
console.log(add1(11, 22));

let add2 = function (e, f) {
  return e + f;
};
console.log(add2(22, 33));
// arrow function
let add4 = (a, v) => {
  return a + v;
};
console.log(add4(30, 50));
let add5 = (a, n) => a + n;
console.log(add5(60, 40));
