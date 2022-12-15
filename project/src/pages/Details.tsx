import { useParams } from "react-router-dom";
import { recipes } from "../models/Recipes";
import RecipeDetails from "../components/Details/RecipeDetails";

const Details = () => {
  const params = useParams();

  // function ensure<T>(
  //   argument: T | undefined | null,
  //   message: string = "This value was promised to be there."
  // ): T {
  //   if (argument === undefined || argument === null) {
  //     throw new Error(message);
  //   }
  //   return argument;
  // }

  // const chosenRecipe = (query: Recipe) =>
  //   ensure(recipes.find((chosenRecipe) => chosenRecipe.id === params.recipeId));

  const chosenRecipe = recipes.find(
    (chosenRecipe) => chosenRecipe.id === params.recipeId
  );

  console.log(chosenRecipe);

  return (
    <RecipeDetails
      recipeName={chosenRecipe.recipeName}
      ingredients={chosenRecipe.ingredients}
    />
  );
};

export default Details;
