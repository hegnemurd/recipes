import Recipe from "../../models/Recipes";
import classes from "./RecipeDetails.module.css";

const RecipeDetails = (props: Recipe) => {
  return (
    <div className={classes.div}>
      <p>{props.recipeName}</p>
      <p>{props.ingredients}</p>
    </div>
  );
};

export default RecipeDetails;
