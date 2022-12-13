import { Link } from "react-router-dom";

import Recipe from "../../models/Recipes";
import { Button } from "react-bootstrap";
import classes from "./RecipeItem.module.css";

const RecipeItem: React.FC<Recipe> = ({
  id,
  recipeName,
  ingredients,
}: Recipe) => {
  return (
    <div className={classes.div}>
      <h2>{recipeName}</h2>
      <p>{ingredients}</p>
      <Link className="btn" to={`/recipe-details/${id}`}>
        <Button className={classes.button} variant="dark">
          Details
        </Button>
      </Link>
    </div>
  );
};

export default RecipeItem;
