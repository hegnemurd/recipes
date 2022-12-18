import Recipe from "../../models/Recipes";
import classes from "./RecipeDetails.module.css";

const RecipeDetails = (props: Recipe) => {
  return (
    <div className={classes.div}>
      <img alt="recipe" src={props.img} className={classes.img}/>
      <h2>{props.recipeName}</h2>
      <ul>
        {props.ingredients.map((ingredient: any) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeDetails;
