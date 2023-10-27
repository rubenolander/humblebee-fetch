interface Recipe {
  strMeal: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
  strIngredient16: string;
  strIngredient17: string;
  strIngredient18: string;
  strIngredient19: string;
  strIngredient20: string;

  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10: string;
  strMeasure11: string;
  strMeasure12: string;
  strMeasure13: string;
  strMeasure14: string;
  strMeasure15: string;
  strMeasure16: string;
  strMeasure17: string;
  strMeasure18: string;
  strMeasure19: string;
  strMeasure20: string;
}

const fetchedRecipes: Recipe[] = [];

//This would ideally be processed from an env file.
const API_key: string = "1";

async function fetchRecipesByLetter(letter: string, fetchedRecipes: Recipe[]) {
  await fetch(
    `http://www.themealdb.com/api/json/v1/${API_key}/search.php?f=${letter}`
  )
    .then((response: Response) => {
      return response.json() as Promise<{ meals: Recipe[] }>;
    })
    .then((recipesData: { meals: Recipe[] }) => {
      recipesData.meals.forEach((recipe: Recipe) => {
        fetchedRecipes.push(recipe);
      });
    });
}

fetchRecipesByLetter("g", fetchedRecipes).then(() =>
  console.log(
    `${fetchedRecipes[0].strMeal} : ${fetchedRecipes[0].strMeasure1} of ${fetchedRecipes[0].strIngredient1} etc`
    //A for-loop would iterate through ingredients measure and name.
  )
);
