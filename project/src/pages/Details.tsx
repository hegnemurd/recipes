import { useParams } from "react-router-dom";
import { recipes } from "../models/Recipes"; 
import RecipeDetails from "../components/Details/RecipeDetails";

const Details = () => {
  const params = useParams();

  const chosenRecipe = recipes.find(
    (chosenRecipe) => chosenRecipe.id === params.recipeId
  );

  return <RecipeDetails recipeName={chosenRecipe?.recipeName} ingredients={chosenRecipe?.ingredients} />;
};

export default Details;
