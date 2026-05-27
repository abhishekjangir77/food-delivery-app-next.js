

async function fetchRecipe() {
  const res = await fetch("https://dummyjson.com/recipes");

  const data = await res.json();
  return data.recipes;
}

export { fetchRecipe };

async function fetchRecipebyid(id) {
  const res = await fetch(`https://dummyjson.com/recipes/${id}`);

  const data = await res.json();
  return data;
}

export { fetchRecipebyid };
