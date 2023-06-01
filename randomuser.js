const randomUsers = () => {
  fetch("https://randomuser.me/api/?results=50")
    .then((x) => x.json())
    .then((y) => allUsers(y.results)); // because its an obj we need arrays which are inside of it
};
const allUsers = (users) => {
  console.log(users);
  const userDiv = document.getElementById("userdiv");
  for (let mass of users) {
    console.log(mass);
    const card = document.createElement("div");
    card.classList.add("col");
    card.innerHTML = `
    <div class="card">
    <img src="${mass.picture.large}" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">${mass.id.name}</h5>
      <p class="card-text">
        E-mail: ${mass.email}
      </p>
    </div>
    `;
    userDiv.appendChild(card);
  }
};
randomUsers();
