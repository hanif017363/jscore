function users() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((x) => x.json())
    .then((y) => usersData(y));

  function usersData(users) {
    const Ul = document.getElementById("ul");

    for (let user of users) {
      let Li = document.createElement("li");
      Li.innerText = `email: ${user.email}`;
      Ul.appendChild(Li);
    }
  }
}
// post
document.getElementById("pt").addEventListener("click", function postMessage() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((z) => z.json())
    .then((m) => mosts(m));
  function mosts(mass) {
    const p1 = document.getElementById("pi");
    for (let most of mass) {
      let child = document.createElement("div");

      child.innerHTML = `
     <h1>${most.title}</h1>
     <p>${most.body}</p>
     `;
      child.style.border = "3px solid grey";
      child.style.margin = "5px";
      child.style.padding = "5px";
      child.style.backgroundColor = "red";
      child.style.color = "white";
      p1.appendChild(child);
    }
  }
});
//jason() convert string "" => object or jaon use as parse
//without click
users();
