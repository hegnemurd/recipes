import { Link } from "react-router-dom";

import Recipe from "../../models/Recipes";
import { Button, Card } from "react-bootstrap";
import classes from "./RecipeItem.module.css";

const RecipeItem: React.FC<Recipe> = (props: Recipe) => {
  return (
    <Card className={classes.card} id={props.id}>
      <Card.Img alt="recipe" src={props.img} className="height: 200px" />
      <Card.Body>
        <Card.Title className={classes.title}>{props.recipeName}</Card.Title>
        <Card.Body>
          <ul>
            {props.ingredients.map((ingredient, id) => (
              <li key={id}>{ingredient}</li>
            ))}
          </ul>
        </Card.Body>
        <Link className="btn" to={`/recipe-details/${props.id}`}>
          <Button className={classes.button}>Details</Button>
        </Link>
        <Link className="btn" to={`/recipe-details/${props.id}/edit`}>
          <Button className={classes.button}>Edit</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default RecipeItem;
