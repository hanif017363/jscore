document.getElementById("btn").addEventListener("click", () => {
  let con = confirm("I did your mom");
  if (con === true) {
    console.log("Dame Nigga ain't no reaction");
  } else {
    console.log("Booho Nigga i'm scared");
  }
});
document.getElementById("btn2").addEventListener("click", () => {
  let pro = prompt("How Diyo Do?");
  let prom = document.getElementById("prom");
  // prom.innerText = pro;
  prom.innerHTML = ` <h1>${pro}</h1>`;
});
// special code (window.history.go/back(1,2,..))
