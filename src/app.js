async function getRecipe(params) {
  const apiKey = "767aaafa8a7c4e529a8a8fbf5159753e";
  let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${param}`;

  try {
    let response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Bad HTTP response: ${response.status}`);
    }

    let data = await response.json();
    console.log(data.results);

    displayRecipes(data.results);
  } catch (error) {
    console.error("process failed:", error);
  }
}

function displayRecipes(x) {
  const container = document.getElementById("container");
  container.innerHTML = ""; //clear previous results

  x.forEach((recipe) => {
    const recipeCard = document.createElement("div");
    recipeCard.classList.add("recipe-card");

    recipeCard.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.tittle}" />
        <h3>${recipe.tittle}</h3>
        `;

    container.appendChild(recipeCard);
  });
}
