const resTcountry = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((x) => x.json())
    .then((y) => country(y));
};
const country = (desh) => {
  console.log(desh);
  for (let deshi of desh) {
    console.log(deshi);
  }
};
resTcountry();
