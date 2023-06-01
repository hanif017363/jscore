const qq = () => {
  fetch("https://api.kanye.rest/")
    .then((x) => x.json())
    .then((y) => pp(y.quote));
};
const pp = (most) => {
  let quote = document.getElementById("quot");
  quote.innerText = most;
};
