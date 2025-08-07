const form = document.getElementById("search-form");
const input = document.getElementById("search-input");
const resultsDiv = document.getElementById("results");

const API_KEY = "59f119e1e8ed4c3f98ec7221a78bc05c"; //

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const query = input.value.trim();
  if (!query) return;

  resultsDiv.innerHTML = "<p>Loading recipes...</p>";

  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=6&apiKey=${API_KEY}`
    );
    const data = await response.json();

    if (data.results.length === 0) {
      resultsDiv.innerHTML = "<p>No recipes found.</p>";
      return;
    }

    displayRecipes(data.results);
  } catch (error) {
    resultsDiv.innerHTML = `<p>Error fetching recipes. Try again later.</p>`;
    console.error(error);
  }
});

function displayRecipes(recipes) {
  resultsDiv.innerHTML = "";
  recipes.forEach((recipe) => {
    const recipeDiv = document.createElement("div");
    recipeDiv.classList.add("recipe");

    recipeDiv.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}">
            <h3>${recipe.title}</h3>
        `;

    resultsDiv.appendChild(recipeDiv);
  });
}
