const API_KEY = "c6b4cf263d9345f7b3f16a2e9e83f0c7";
const recipeListEl = document.getElementById("recipe-list");


function displayRecipes(recipes) {
    recipeListEl.innerHTML = "";
    recipes.forEach((recipe)=> {
        const recipeListEl = document.createElement('li');
        recipeItemEl.classList.add('recipe-item');
        recipeImageEl = document.createElement('img');
        recipeImageEl.src = recipe.image;
        recipeImageEl.alt = "recipe image";
        recipeTitleEl = document.createElement("h2");
        recipeTitleEl.innerText = recipe.title;

        
        recipeIngredientsEl = document.createElement("p");
        recipeIngredientsEl.innerHTML = `
        <strong>Ingredients:</strong> ${recipe.extendedIngredients
            .map((ingredient)=>ingredient.original)
            .join(", ")}
            `;

            recipeLinkEl = document.createElement("a");
            recipeLinkEl.href = recipe.sourceUrl;
            recipeLinkEl.innterText = "View Recipe";
    

        recipeImageEl.appendChild(recipeImageEl);
        recipeTitleEl.appendChild(recipeTitleEl);
        recipeItemEl.appendChild(recipeLinkEl);
        recipeItemEl.appendChild(recipeIngredientsEl);
        recipeListEl.appendChild(recipeItemEl);
    });
}

async function getRecipes(){
    const response = await fetch(`https//api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`)

    const data = await response.json();
    
    return data.recipes;
}   



async function init() {
    const recipes = await getRecipes();
    displayRecipes(recipes);
}

init();