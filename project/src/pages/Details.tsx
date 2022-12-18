import { useParams } from "react-router";
import { recipes } from "../models/Recipes";
import RecipeDetails from "../components/Details/RecipeDetails";

const Details = () => {
  const params = useParams();

  const { recipeId } = params;

  const chosenRecipe = recipes.find(
    (chosenRecipe) => chosenRecipe.id === recipeId
  );

  if (chosenRecipe !== undefined) {
    return (
      <RecipeDetails
        id={chosenRecipe.id}
        img={chosenRecipe.img}
        recipeName={chosenRecipe.recipeName}
        ingredients={chosenRecipe.ingredients}
      />
    );
  }
  return <p>Recipe not found!</p>;
};

export default Details;
