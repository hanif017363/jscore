document.getElementById("button").addEventListener("click", () => {
  let searchBox = document.getElementById("input");
  let foods = searchBox.value;

  if (searchBox.value === " ") {
    alert("Field Must Not Be Emply");
  } else {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foods}`)
      .then((x) => x.json())
      .then((y) => geTmeals(y.meals));

    spinnerToggole("flex", "none");
  }
  searchBox.value = "";
});

// spinner
const spinnerToggole = (plural, maindivdispaly) => {
  document.getElementById("spin").style.display = plural;
  document.getElementById("maincard").style.display = maindivdispaly;
};

const geTmeals = (meal) => {
  let mainCard = document.getElementById("maincard");
  mainCard.textContent = "";
  for (let food of meal) {
    let child = document.createElement("div");

    console.log(food);
    child.classList.add("col");
    child.innerHTML = `<div id="maincard" class="card " style="width: 18rem">
  <img src="${food.strMealThumb}" class="card-img-top" alt="..." />
  <div class="card-body">
    <p class="card-text">
    <h1 class="card-title"> ${food.strMeal}</h1>
      
    </p>
  </div></div>
  `;
    spinnerToggole("none", "flex");
    mainCard.appendChild(child);
  }
};
