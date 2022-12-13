import Recipe from "../../models/Recipes";
import { recipes } from "../../models/Recipes";
import classes from "./RecipeDetails.module.css";

// function findId(recipes, id) {
//   return recipes.find((element) => {
//     return element.id === id;
//   })
// }

const RecipeDetails: React.FC<Recipe> = (props: recipes) => {

  return (
    <div className={classes.div}>
      <p>{props.recipeName}</p>
      <p>{props.ingredients}</p>
    </div>
  );
};

export default RecipeDetails;
