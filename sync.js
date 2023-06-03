/**
 *
 *javascript behaviour
 *
 * 1.syncronize
 * 2.asyncronize but solve problem with jit
 * 3.blocking
 * 4.interpreted
 * 5.single threaed language
 *
 *
 */
console.log(1);
console.log(2);
console.log(4);
console.log(3);
console.log(5);
//setTimeout(function,time)
setTimeout(() => {
  console.log("inside the sea");
}, 3000);
console.log(9);
// setInterval(() => {

//}, interval);  use for runing code continously with few moment interval
setInterval(() => {
  console.log("inside the ocean");
}, 5000);
let count = 0;
setInterval(() => {
  ++count;
  console.log(count);
}, 1000);
