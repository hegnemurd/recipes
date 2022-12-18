import { Link } from "react-router-dom";

import Recipe from "../../models/Recipes";
import { Button, Col } from "react-bootstrap";
import classes from "./RecipeItem.module.css";

const RecipeItem: React.FC<Recipe> = (props: Recipe) => {
  return (
    <Col md={3} className={classes.col}>
      <div>
        <img alt="recipe" src={props.img} className="height: 200px" />
        <h2>{props.recipeName}</h2>
        <ul>
          {props.ingredients.map((ingredient: string) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
        <Link className="btn" to={`/recipe-details/${props.id}`}>
          <Button className={classes.button} variant="dark">
            Details
          </Button>
        </Link>
      </div>
    </Col>
  );
};

export default RecipeItem;
