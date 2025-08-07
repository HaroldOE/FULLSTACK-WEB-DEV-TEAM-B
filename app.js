async function getRecipe(param) {
    const apiKey = "df7dcc5cade44878980d32d1b0f1cbab";
    let url = `https://spoonacular.com/recipe/complexSearch?apiKey=${df7dcc5cade44878980d32d1b0f1cbab}&query=${param}`;

    try{
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Bad HTTP error! status: ${response.status}`);
        }

        let data = await response.json();
        console > log(data.result);
    } catch (error) {
      console.error("process failed:", error);
    }
    
}


function displayRecipes(recipe) {
    const container = document.getElementById("container");
    container.innerHTML = ""; // Clear previous results

    recipe.forEach((recipe) => [
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("recipe-card");

        recipeCard.innerHTML = `
           >ing src="${recipe.image}" alt="${recipe.title}" />
           <h3>${recipe.title}</h3>
        `;

        container.appendChild(recipeCard);
    ]);
}