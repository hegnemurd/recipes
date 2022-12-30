import { Link } from "react-router-dom";

import { Button, Card } from "react-bootstrap";
import classes from "./RecipeItem.module.css";
import Recipe from "../../models/Recipes";

export interface RecipeItemProp {
  recipe: Recipe;
  editHandler: (id: string) => void;
}

const RecipeItem = (props: RecipeItemProp) => {
  return (
    <Card className={classes.card} id={props.recipe.id}>
      <Card.Img alt="recipe" src={props.recipe.img} className="height: 200px" />
      <Card.Body>
        <Card.Title className={classes.title}>
          {props.recipe.recipeName}
        </Card.Title>
        <Card.Body>
          <ul>
            {props.recipe.ingredients.map((ingredient, id) => (
              <li key={id}>{ingredient}</li>
            ))}
          </ul>
        </Card.Body>
        <Link className="btn" to={`/recipe-details/${props.recipe.id}`}>
          <Button className={classes.button}>Details</Button>
        </Link>
        <Button
          className={classes.button}
          onClick={() => props.editHandler(props.recipe.id)}
        >
          Edit
        </Button>
      </Card.Body>
    </Card>
  );
};

export default RecipeItem;
